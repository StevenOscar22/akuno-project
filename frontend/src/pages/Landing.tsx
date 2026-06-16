import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';

const Landing = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll();

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    return (
        <div ref={scrollRef} data-scroll-container className="bg-background text-on-background font-body-md min-h-screen relative overflow-x-hidden dark">
            {/* Background Animation */}
            <div className="mesh-bg"></div>
            
            {/* Top Navigation */}
            <nav className="docked full-width top-0 sticky z-50 bg-surface/80 dark:bg-surface-container/80 backdrop-blur-xl border-b border-white/10 shadow-sm backdrop-saturate-150 flex justify-between items-center w-full px-gutter h-16 transition-all duration-300">
                <div className="flex items-center gap-4">
                    <span className="font-headline-lg text-headline-lg tracking-tighter text-primary dark:text-primary-container">Akuno</span>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    <a className="text-primary font-bold border-b-2 border-primary pb-1" href="#">Beranda</a>
                    <a className="text-on-surface-variant font-medium hover:bg-white/5 transition-all duration-300 px-3 py-2 rounded" href="#fitur">Fitur</a>
                    <a className="text-on-surface-variant font-medium hover:bg-white/5 transition-all duration-300 px-3 py-2 rounded" href="#keamanan">Keamanan</a>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/login" className="px-4 py-2 font-label-md text-primary dark:text-primary-fixed hover:bg-white/5 transition-colors rounded-lg">Login</Link>
                    <Link to="/register" className="px-4 py-2 bg-primary text-on-primary font-label-md rounded-lg hover:opacity-90 transition-opacity">Daftar</Link>
                </div>
            </nav>

            {/* Main Canvas */}
            <main className="w-full max-w-[1440px] mx-auto px-container-padding pb-24 relative z-10">
                {/* 1. Hero Section */}
                <section className="min-h-[819px] flex flex-col justify-center items-center text-center pt-20 pb-section-margin" data-scroll-section>
                    <div className="max-w-4xl space-y-8 animate-fade-in-up" data-scroll data-scroll-speed="1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary font-label-md mb-4" data-scroll data-scroll-speed="0.5">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Masa Depan Akuntansi Telah Tiba
                        </div>
                        <h1 className="font-headline-xl text-headline-xl text-on-surface glow-text mb-6">
                            Kejernihan Finansial Melalui <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-container">Lensa Kaca</span>
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
                            Sistem akuntansi modern yang merubah data rumit menjadi wawasan transparan. Dirancang untuk profesional yang menghargai keindahan dan akurasi.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to="/register" className="btn-primary text-on-primary-fixed px-8 py-4 rounded-xl font-label-md text-label-md flex items-center gap-2">
                                Mulai Uji Coba Gratis
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                            <a href="#fitur" className="glass-card px-8 py-4 rounded-xl font-label-md text-label-md text-on-surface hover:bg-white/10 transition-colors flex items-center gap-2">
                                Pelajari Lebih Lanjut
                            </a>
                        </div>
                    </div>
                </section>

                {/* 2. Features Overview (Bento Grid) */}
                <section className="py-section-margin" id="fitur" data-scroll-section>
                    <div className="mb-12 text-center" data-scroll data-scroll-speed="0.2">
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Fitur Inti yang Intuitif</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">Semua yang Anda butuhkan untuk pembukuan yang sempurna, disajikan dalam antarmuka yang mulus.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="glass-card p-6 rounded-2xl flex flex-col group hover:bg-white/5 transition-all duration-300" data-scroll data-scroll-speed="0.1">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>receipt_long</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Jurnal Umum</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">Catat transaksi harian dengan presisi mutlak. Antarmuka yang mulus mempercepat entri data Anda.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="glass-card p-6 rounded-2xl flex flex-col group hover:bg-white/5 transition-all duration-300" data-scroll data-scroll-speed="0.2">
                            <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Buku Besar</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">Klasifikasikan akun secara otomatis. Pantau arus kas masuk dan keluar secara real-time.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="glass-card p-6 rounded-2xl flex flex-col group hover:bg-white/5 transition-all duration-300" data-scroll data-scroll-speed="0.3">
                            <div className="w-12 h-12 rounded-xl bg-tertiary-container/20 flex items-center justify-center text-tertiary mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Neraca Saldo</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">Pastikan keseimbangan finansial Anda. Deteksi anomali sebelum menjadi masalah besar.</p>
                        </div>
                        {/* Feature 4 */}
                        <div className="glass-card p-6 rounded-2xl flex flex-col group hover:bg-white/5 transition-all duration-300" data-scroll data-scroll-speed="0.4">
                            <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary-container mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>assessment</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Laporan Keuangan</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">Hasilkan laporan komprehensif dalam hitungan detik. Visualisasikan profitabilitas Anda dengan jelas.</p>
                        </div>
                    </div>
                </section>

                {/* 3. Dashboard Preview Section */}
                <section className="py-section-margin relative" data-scroll-section>
                    <div className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative" data-scroll data-scroll-speed="0.2">
                        {/* Abstract Blur blobs behind the UI preview */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] -z-10"></div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6" data-scroll data-scroll-speed="0.3">
                                <h2 className="font-headline-lg text-headline-lg text-on-surface">Transparansi Visual</h2>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    Tinggalkan tabel kaku dan angka yang membingungkan. Dashboard Akuno mengubah data mentah menjadi narasi visual yang mudah dipahami, membantu Anda mengambil keputusan strategis dengan cepat.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                        <span className="font-label-md text-on-surface">Pembaruan Real-time</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                        <span className="font-label-md text-on-surface">Grafik Interaktif</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                        <span className="font-label-md text-on-surface">Ekspor Multi-format</span>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* Faux UI Component to simulate the dashboard */}
                            <div className="relative w-full aspect-video rounded-xl bg-surface-container/50 border border-white/10 shadow-2xl p-4 flex flex-col gap-4" data-scroll data-scroll-speed="-0.1">
                                {/* Chart Header */}
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <div className="font-label-md text-on-surface">Arus Kas Bulanan</div>
                                    <div className="flex gap-2">
                                        <span className="w-2 h-2 rounded-full bg-error"></span>
                                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                                    </div>
                                </div>
                                {/* Abstract Chart Lines */}
                                <div className="flex-grow relative flex items-end justify-between px-2 pb-2">
                                    <div className="w-1/6 h-[40%] bg-gradient-to-t from-primary/40 to-transparent rounded-t-sm border-t-2 border-primary"></div>
                                    <div className="w-1/6 h-[60%] bg-gradient-to-t from-primary/40 to-transparent rounded-t-sm border-t-2 border-primary"></div>
                                    <div className="w-1/6 h-[30%] bg-gradient-to-t from-error/40 to-transparent rounded-t-sm border-t-2 border-error"></div>
                                    <div className="w-1/6 h-[80%] bg-gradient-to-t from-primary/40 to-transparent rounded-t-sm border-t-2 border-primary"></div>
                                    <div className="w-1/6 h-[100%] bg-gradient-to-t from-primary/40 to-transparent rounded-t-sm border-t-2 border-primary glow-text"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Security/Trust Section */}
                <section className="py-section-margin" id="keamanan" data-scroll-section>
                    <div className="max-w-3xl mx-auto text-center space-y-6" data-scroll data-scroll-speed="0.5">
                        <div className="w-16 h-16 mx-auto rounded-full bg-surface-variant flex items-center justify-center border border-white/10 shadow-lg mb-6">
                            <span className="material-symbols-outlined text-4xl text-on-surface">shield_lock</span>
                        </div>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface">Perlindungan GlassGuard™</h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">
                            Keamanan data finansial Anda adalah prioritas mutlak. Menggunakan enkripsi berlapis dan arsitektur <i>zero-trust</i>, Akuno memastikan informasi sensitif Anda aman dari ancaman digital, bagaikan tersimpan dalam brankas kaca anti peluru.
                        </p>
                    </div>
                </section>
            </main>

            {/* 5. Footer */}
            <footer className="bg-surface-container-lowest border-t border-white/5 py-12 px-container-padding relative z-10">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="font-headline-md text-headline-md tracking-tighter text-primary block mb-4">Akuno</span>
                        <p className="font-body-md text-on-surface-variant max-w-sm">
                            Membawa kejernihan dan keindahan pada akuntansi modern. Didesain untuk profesional.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-label-md text-on-surface mb-4">Produk</h4>
                        <ul className="space-y-2 font-body-sm text-on-surface-variant">
                            <li><a className="hover:text-primary transition-colors" href="#">Fitur Utama</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Harga</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Keamanan</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-label-md text-on-surface mb-4">Perusahaan</h4>
                        <ul className="space-y-2 font-body-sm text-on-surface-variant">
                            <li><a className="hover:text-primary transition-colors" href="#">Tentang Kami</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Kontak</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Kebijakan Privasi</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-[1440px] mx-auto mt-12 pt-8 border-t border-white/5 text-center font-body-sm text-on-surface-variant/60">
                    © 2026 Akuno. All rights reserved. Liquid Glass Design System.
                </div>
            </footer>
        </div>
    );
};

export default Landing;
