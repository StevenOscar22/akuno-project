import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Konfirmasi kata sandi tidak cocok.');
            return;
        }

        setIsLoading(true);

        try {
            await axios.post('/api/auth/register', { fullname, email, password });
            navigate('/login');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Terjadi kesalahan saat registrasi.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-surface-dim text-on-surface font-body-md min-h-screen flex items-center justify-center p-gutter relative overflow-hidden dark">
            {/* Atmospheric Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Base blurred image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0QrIgIJWdfJ6PMcMWD4sLRbH8vrsxy03a5Knd9URxTTM4gEiDlaqa8Vv0EZLE62UmeG_57vecqVcph6eIYUsm4OJ17hm4JJFzOxUYs7Kvb_1I7WObVJyn5G7mCQv-OGGsSccjDI41kv8HeHCAVIzq1-6nj1L5EiNkkt8-tOBVzpvFiqELCm-c0681VCOcR93OFUpk7811drWFLTzVnKdN2_St4PMnhMiF7kkeTmGxHSyE6nOix4xz5tfXbfcsEXStHEGpW-pGoNr-')" }}
                ></div>
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface-dim/90 via-surface/80 to-surface-container-lowest/95"></div>
                {/* Glowing Orbs */}
                <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] animate-slow-pulse"></div>
                <div className="absolute bottom-[10%] right-[20%] w-[35vw] h-[35vw] bg-secondary-container/15 rounded-full blur-[100px] animate-slow-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Registration Glass Card */}
            <main className="relative z-10 w-full max-w-[480px] glass-panel rounded-2xl shadow-2xl p-8 sm:p-10 flex flex-col gap-8">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className="font-headline-lg text-headline-lg text-primary tracking-tighter">Akuno</h1>
                    <p className="font-body-md text-body-md text-on-surface-variant">Buat akun untuk memulai kejernihan finansial.</p>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-error-container/20 border border-error/50 text-error px-4 py-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}
                    {/* Full Name Input */}
                    <div className="space-y-1.5">
                        <label className="font-label-md text-label-md text-on-surface" htmlFor="fullname">Nama Lengkap</label>
                        <div className="relative group">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">person</span>
                            <input className="w-full bg-surface-container-lowest/40 border border-white/10 rounded-lg py-3.5 pl-12 pr-4 text-on-surface font-body-md placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300" id="fullname" placeholder="Masukkan nama lengkap Anda" type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                        <label className="font-label-md text-label-md text-on-surface" htmlFor="email">Email</label>
                        <div className="relative group">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">mail</span>
                            <input className="w-full bg-surface-container-lowest/40 border border-white/10 rounded-lg py-3.5 pl-12 pr-4 text-on-surface font-body-md placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300" id="email" placeholder="nama@email.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1.5">
                        <label className="font-label-md text-label-md text-on-surface" htmlFor="password">Kata Sandi</label>
                        <div className="relative group">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">lock</span>
                            <input className="w-full bg-surface-container-lowest/40 border border-white/10 rounded-lg py-3.5 pl-12 pr-12 text-on-surface font-body-md placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300" id="password" placeholder="Minimal 8 karakter" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors focus:outline-none" type="button" onClick={() => setShowPassword(!showPassword)}>
                                <span className="material-symbols-outlined">{showPassword ? "visibility_off" : "visibility"}</span>
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="space-y-1.5">
                        <label className="font-label-md text-label-md text-on-surface" htmlFor="confirm-password">Konfirmasi Kata Sandi</label>
                        <div className="relative group">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">lock_reset</span>
                            <input className="w-full bg-surface-container-lowest/40 border border-white/10 rounded-lg py-3.5 pl-12 pr-12 text-on-surface font-body-md placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300" id="confirm-password" placeholder="Ulangi kata sandi" type={showPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required minLength={8} />
                        </div>
                    </div>

                    {/* Primary Submit Button */}
                    <button className="mt-4 w-full bg-gradient-to-r from-primary-container to-primary text-on-primary-fixed font-label-md text-label-md py-4 rounded-lg shadow-[0_0_20px_rgba(0,242,254,0.15)] hover:shadow-[0_0_30px_rgba(0,242,254,0.3)] transition-all duration-300 transform active:scale-[0.98] flex justify-center items-center gap-2" type="submit" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <span className="material-symbols-outlined animate-spin text-sm">sync</span>
                                Memproses...
                            </>
                        ) : (
                            'Daftar'
                        )}
                    </button>
                </form>

                {/* Alternative Login Section */}
                <div className="flex flex-col gap-6">
                    {/* Divider */}
                    <div className="relative flex items-center">
                        <div className="flex-grow border-t border-white/10"></div>
                        <span className="flex-shrink-0 mx-4 text-on-surface-variant font-label-sm text-label-sm">atau daftar dengan</span>
                        <div className="flex-grow border-t border-white/10"></div>
                    </div>

                    {/* Google Social Login */}
                    <button className="w-full flex items-center justify-center gap-3 bg-surface-container-highest/30 border border-white/10 rounded-lg py-3.5 hover:bg-white/10 transition-all duration-300 font-label-md text-label-md text-on-surface" type="button">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                        </svg>
                        Google
                    </button>

                    {/* Login Link */}
                    <p className="text-center font-body-md text-body-md text-on-surface-variant">
                        Sudah punya akun? 
                        <a className="text-tertiary-fixed-dim hover:text-primary transition-colors font-label-md text-label-md ml-1" href="/login">Masuk di sini</a>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Register;
