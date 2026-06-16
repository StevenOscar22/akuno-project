import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/useAuth';

const AppLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, isAuthenticated, isLoading, checkAuth, logout } = useAuth();
    const [searchFocused, setSearchFocused] = useState(false);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            navigate('/login');
        }
    }, [isLoading, isAuthenticated, navigate]);

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            logout();
            navigate('/login');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center dark">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!isAuthenticated) return null;

    // Helper to check if a path is active
    const isActive = (path: string) => location.pathname === path;

    const navLinkClass = (path: string) => {
        const baseClass = "flex items-center gap-4 px-4 py-3 rounded-r-lg transition-all duration-300 group ";
        if (isActive(path)) {
            return baseClass + "bg-primary/10 text-primary border-l-4 border-primary";
        }
        return baseClass + "text-on-surface-variant hover:text-on-surface hover:bg-white/5 hover:translate-x-1";
    };

    return (
        <div className="bg-surface text-on-surface min-h-screen dark">
            <div className="flex min-h-screen relative">
                {/* SideNavBar */}
                <aside className="fixed left-0 top-0 h-screen w-64 z-40 bg-surface-container-low/30 dark:bg-surface-container-lowest/30 backdrop-blur-3xl border-r border-white/10 flex flex-col py-8 shadow-xl">
                    <div className="px-6 mb-10">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
                                <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                            </div>
                            <div className="ml-3">
                                <p className="font-label-md text-label-md text-on-surface leading-none">{user?.name || 'Perusahaan'}</p>
                                <p className="text-xs text-on-surface-variant mt-1">Admin Keuangan</p>
                            </div>
                        </div>
                    </div>
                    <nav className="flex-1 space-y-1 px-4">
                        <Link to="/app/dashboard" className={navLinkClass('/app/dashboard')}>
                            <span className="material-symbols-outlined transition-colors group-hover:text-primary" style={isActive('/app/dashboard') ? { fontVariationSettings: "'FILL' 1" } : {}}>dashboard</span>
                            <span className="font-label-md">Jurnal Umum</span>
                        </Link>
                        <Link to="/app/buku-besar" className={navLinkClass('/app/buku-besar')}>
                            <span className="material-symbols-outlined transition-colors group-hover:text-primary" style={isActive('/app/buku-besar') ? { fontVariationSettings: "'FILL' 1" } : {}}>menu_book</span>
                            <span className="font-label-md">Buku Besar</span>
                        </Link>
                        <Link to="/app/neraca-saldo" className={navLinkClass('/app/neraca-saldo')}>
                            <span className="material-symbols-outlined transition-colors group-hover:text-primary" style={isActive('/app/neraca-saldo') ? { fontVariationSettings: "'FILL' 1" } : {}}>account_balance</span>
                            <span className="font-label-md">Neraca Saldo</span>
                        </Link>
                        <Link to="/app/neraca-lajur" className={navLinkClass('/app/neraca-lajur')}>
                            <span className="material-symbols-outlined transition-colors group-hover:text-primary" style={isActive('/app/neraca-lajur') ? { fontVariationSettings: "'FILL' 1" } : {}}>view_column</span>
                            <span className="font-label-md">Neraca Lajur</span>
                        </Link>
                        <Link to="/app/jurnal-penyesuaian" className={navLinkClass('/app/jurnal-penyesuaian')}>
                            <span className="material-symbols-outlined transition-colors group-hover:text-primary" style={isActive('/app/jurnal-penyesuaian') ? { fontVariationSettings: "'FILL' 1" } : {}}>tune</span>
                            <span className="font-label-md">Jurnal Penyesuaian</span>
                        </Link>
                        <Link to="/app/laporan" className={navLinkClass('/app/laporan')}>
                            <span className="material-symbols-outlined transition-colors group-hover:text-primary" style={isActive('/app/laporan') ? { fontVariationSettings: "'FILL' 1" } : {}}>assessment</span>
                            <span className="font-label-md">Laporan Keuangan</span>
                        </Link>
                    </nav>
                    <div className="px-4 mt-auto space-y-4">
                        <button className="w-full py-3 px-4 bg-gradient-to-r from-secondary-container to-primary-container text-on-secondary-container font-label-md rounded-xl shadow-lg shadow-primary-container/10 active:scale-95 transition-transform">
                            Buat Laporan Baru
                        </button>
                        <div className="pt-4 border-t border-white/5">
                            <a className="flex items-center gap-4 text-on-surface-variant px-4 py-2 hover:text-on-surface transition-all" href="#">
                                <span className="material-symbols-outlined">help</span>
                                <span className="font-label-md">Bantuan</span>
                            </a>
                            <button onClick={handleLogout} className="flex items-center gap-4 text-on-surface-variant px-4 py-3 hover:text-on-surface transition-all w-full text-left">
                                <span className="material-symbols-outlined">logout</span>
                                <span className="font-label-md text-label-md">Keluar</span>
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 ml-64 min-h-screen flex flex-col">
                    {/* TopNavBar */}
                    <header className="docked full-width top-0 sticky z-50 h-16 bg-surface/80 dark:bg-surface-container/80 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-gutter shadow-sm backdrop-saturate-150">
                        <div className="flex items-center gap-8">
                            <h1 className="font-headline-lg text-headline-lg tracking-tighter text-primary dark:text-primary-container">Akuno</h1>
                            <div className={`hidden md:flex items-center rounded-full px-4 py-1.5 w-96 transition-all ${searchFocused ? 'ring-2 ring-primary/50 bg-white/10' : 'bg-white/5 border border-white/10'}`}>
                                <span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
                                <input 
                                    className="bg-transparent border-none focus:ring-0 text-body-md w-full placeholder:text-on-surface-variant focus:outline-none ml-2" 
                                    placeholder="Cari transaksi..." 
                                    type="text"
                                    onFocus={() => setSearchFocused(true)}
                                    onBlur={() => setSearchFocused(false)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="p-2 text-on-surface-variant hover:bg-white/5 rounded-full transition-all duration-300">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <button className="p-2 text-on-surface-variant hover:bg-white/5 rounded-full transition-all duration-300">
                                <span className="material-symbols-outlined">settings</span>
                            </button>
                            <div className="h-8 w-[1px] bg-white/10 mx-2"></div>
                            <div className="flex items-center gap-3">
                                <div className="text-right">
                                    <p className="font-label-md text-on-surface">Budi Sudarsono</p>
                                    <p className="text-[10px] text-primary uppercase tracking-widest font-bold">Premium</p>
                                </div>
                                <img alt="User profile" className="w-10 h-10 rounded-full border-2 border-primary/20 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2U4z25QO-gCH4hv1qpJ4wMZhUmnHAdPk08QsYSpqAddnBgrjS7sHaQSZwycnk2xh5DxiwS30QfO85gsFIqE6jzgG7I6FnE6YkcXnZ-4jKDBSEMa2YHN3t0FT1nd4LB-d0h37yhXp4pkX8vscpJNRcFvONy8Pjb9_p_2CuGJHX2DZxFtsLC1wfoqHQVbxY3GnD7fDmGzPIp7ZqJKw7vMK4WZcqcU4ErgiYdjUrtrzsnTkqZlYiz9FF3Y26ojCQY_s0QDobu4l1GZcv" />
                            </div>
                        </div>
                    </header>

                    {/* Dynamic Page Content */}
                    <div className="flex-1">
                        <Outlet />
                    </div>

                    <footer className="p-12 text-center mt-auto">
                        <p className="font-label-md text-on-surface-variant/50">© 2026 Akuno. Premium Accounting Intelligence.</p>
                    </footer>
                </main>
            </div>

            {/* Floating Atmosphere Elements */}
            <div className="fixed top-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            <div className="fixed bottom-1/4 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
    );
};

export default AppLayout;
