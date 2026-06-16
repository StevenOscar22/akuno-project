import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../store/useAuth';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await axios.post('/api/auth/login', { email, password });
            login(response.data.user);
            navigate('/app');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Terjadi kesalahan saat login.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-surface text-on-surface min-h-screen relative overflow-hidden font-body-md text-body-md selection:bg-primary/30 dark">
            {/* Background Level 0 */}
            <div className="fixed inset-0 mesh-bg z-0 pointer-events-none"></div>

            {/* Main Content Canvas */}
            <main className="relative z-10 flex items-center justify-center min-h-screen p-gutter">
                {/* Glassmorphism Login Card (Level 2) */}
                <div className="glass-panel w-full max-w-[440px] rounded-[24px] p-[40px] shadow-2xl flex flex-col gap-[32px]">
                    
                    {/* Brand & Header */}
                    <div className="text-center space-y-2">
                        <h1 className="font-headline-lg text-headline-lg md:font-headline-xl md:text-headline-xl text-primary tracking-tighter">Akuno</h1>
                        <p className="font-body-md text-body-md text-on-surface-variant">Masuk ke akun Anda</p>
                    </div>

                    {/* Login Form */}
                    <form className="flex flex-col gap-unit space-y-6" onSubmit={handleSubmit}>
                        {error && <p className="text-error text-center text-label-md">{error}</p>}
                        <div className="space-y-4">
                            {/* Email Field */}
                            <div className="flex flex-col gap-2">
                                <label className="font-label-md text-label-md text-on-surface" htmlFor="email">Email</label>
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">mail</span>
                                    <input className="w-full bg-surface-container-lowest/40 border border-white/10 rounded-lg py-3.5 pl-12 pr-4 text-on-surface font-body-md placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300" id="email" placeholder="nama@email.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <label className="font-label-md text-label-md text-on-surface" htmlFor="password">Password</label>
                                    <a className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors" href="#">Lupa Password?</a>
                                </div>
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">lock</span>
                                    <input className="w-full bg-surface-container-lowest/40 border border-white/10 rounded-lg py-3.5 pl-12 pr-12 text-on-surface font-body-md placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300" id="password" placeholder="Masukkan kata sandi Anda" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    <button 
                                        aria-label="Toggle password visibility" 
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors focus:outline-none" 
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <span className="material-symbols-outlined">{showPassword ? "visibility_off" : "visibility"}</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Primary Submit Button */}
                        <button className="mt-2 w-full bg-gradient-to-r from-primary-container to-primary text-on-primary-fixed font-label-md text-label-md py-4 rounded-lg shadow-[0_0_20px_rgba(0,242,254,0.15)] hover:shadow-[0_0_30px_rgba(0,242,254,0.3)] transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2" type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <span className="material-symbols-outlined animate-spin text-sm">sync</span>
                                    Memproses...
                                </>
                            ) : (
                                'Masuk ke Akuno'
                            )}
                        </button>
                    </form>

                    {/* Footer Links */}
                    <div className="text-center pt-2 border-t border-white/5">
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            Belum punya akun? <Link className="font-label-md text-label-md text-primary hover:text-primary-fixed transition-colors" to="/register">Daftar di sini</Link>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;
