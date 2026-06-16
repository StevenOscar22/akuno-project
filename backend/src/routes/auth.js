import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../db.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Validasi input
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "Semua kolom wajib diisi." });
        }

        // Cek apakah email sudah terdaftar
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({ message: "Email sudah terdaftar." });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Buat user baru (company_name disamakan dengan fullname untuk saat ini)
        const newUser = await prisma.user.create({
            data: {
                company_name: fullname,
                email,
                password: hashedPassword,
            }
        });

        // Seed Default Chart of Accounts (Bagan Akun)
        const defaultAccounts = [
            { code: '1101', name: 'Kas & Bank', type: 'ASSET' },
            { code: '1102', name: 'Piutang Usaha', type: 'ASSET' },
            { code: '1103', name: 'Persediaan', type: 'ASSET' },
            { code: '2101', name: 'Hutang Usaha', type: 'LIABILITY' },
            { code: '3101', name: 'Modal Pemilik', type: 'EQUITY' },
            { code: '4101', name: 'Pendapatan Jasa', type: 'REVENUE' },
            { code: '5101', name: 'Beban Gaji', type: 'EXPENSE' },
            { code: '5102', name: 'Beban Sewa', type: 'EXPENSE' },
            { code: '5103', name: 'Beban Operasional Lainnya', type: 'EXPENSE' },
        ];

        // Format data untuk bulk insert dengan menambahkan userId
        const accountsToInsert = defaultAccounts.map(acc => ({
            ...acc,
            userId: newUser.id
        }));

        await prisma.account.createMany({
            data: accountsToInsert
        });

        res.status(201).json({ message: "Registrasi berhasil.", user: { id: newUser.id, email: newUser.email, name: newUser.company_name } });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email dan kata sandi wajib diisi." });
        }

        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({ message: "Kredensial tidak valid." });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Kredensial tidak valid." });
        }

        // Buat JWT Token
        const token = jwt.sign(
            { id: user.id, email: user.email, name: user.company_name },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        // Set Cookie HttpOnly
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        res.status(200).json({
            message: "Login berhasil.",
            user: { id: user.id, email: user.email, name: user.company_name }
        });

    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
});

// Logout Route
router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: "Logout berhasil." });
});

// Get Current User (Me)
router.get('/me', verifyToken, async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            select: { id: true, email: true, company_name: true, created_at: true }
        });

        if (!user) {
            return res.status(404).json({ message: "User tidak ditemukan." });
        }

        res.status(200).json({ user: { ...user, name: user.company_name } });
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
});

export default router;
