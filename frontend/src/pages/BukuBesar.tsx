

const BukuBesar = () => {
    return (
        <div className="p-12 space-y-10 max-w-[1440px] mx-auto w-full">
            {/* Account Header & Selector */}
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <h1 className="font-headline-xl text-primary tracking-tight">Buku Besar</h1>
                    <p className="font-body-lg text-on-surface-variant max-w-2xl">Visualisasi rincian transaksi per akun untuk memastikan transparansi dan keseimbangan finansial Anda.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-label-md text-primary/80 px-1">Pilih Akun</label>
                    <div className="relative group min-w-[280px]">
                        <select className="w-full appearance-none bg-white/5 border border-white/20 rounded-xl py-3 pl-4 pr-12 text-on-surface font-label-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all cursor-pointer">
                            <option value="kas">1101 - Kas (Cash)</option>
                            <option value="piutang">1102 - Piutang Usaha</option>
                            <option value="perlengkapan">1103 - Perlengkapan</option>
                            <option value="peralatan">1201 - Peralatan Kantor</option>
                            <option value="modal">3101 - Modal Pemilik</option>
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined pointer-events-none text-primary">expand_more</span>
                    </div>
                </div>
            </section>

            {/* Summary Stats (Bento-ish Row) */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Total Debit */}
                <div className="glass-card p-8 rounded-3xl group hover:translate-y-[-4px] transition-all duration-500 overflow-hidden relative">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm">Bulan Ini</span>
                    </div>
                    <p className="font-label-md text-on-surface-variant mb-1">Total Debit</p>
                    <h3 className="font-headline-lg text-on-surface tracking-tight">Rp 45.250.000</h3>
                </div>
                {/* Total Kredit */}
                <div className="glass-card p-8 rounded-3xl group hover:translate-y-[-4px] transition-all duration-500 overflow-hidden relative">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors"></div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>remove_circle</span>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm">Bulan Ini</span>
                    </div>
                    <p className="font-label-md text-on-surface-variant mb-1">Total Kredit</p>
                    <h3 className="font-headline-lg text-on-surface tracking-tight">Rp 12.800.000</h3>
                </div>
                {/* Saldo Akhir */}
                <div className="glass-card p-8 rounded-3xl group hover:translate-y-[-4px] transition-all duration-500 overflow-hidden relative border-primary/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30 shadow-[0_0_15px_rgba(0,220,230,0.2)]">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-white/10 text-on-surface font-label-sm border border-white/10">Saldo Berjalan</span>
                    </div>
                    <p className="font-label-md text-on-surface-variant mb-1 relative z-10">Saldo Akhir</p>
                    <h3 className="font-headline-lg text-primary tracking-tight relative z-10 drop-shadow-sm">Rp 32.450.000</h3>
                </div>
            </section>

            {/* Transaction Table Section */}
            <section className="glass-card rounded-[32px] overflow-hidden">
                <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/5">
                    <div>
                        <h4 className="font-headline-md text-on-surface">Riwayat Transaksi</h4>
                        <p className="font-label-md text-on-surface-variant">Menampilkan data periode September 2023</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-on-surface font-label-md hover:bg-white/10 transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">filter_alt</span> Filter
                        </button>
                        <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-on-surface font-label-md hover:bg-white/10 transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">download</span> Ekspor PDF
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5">
                                <th className="px-8 py-5 font-label-md text-primary/70 uppercase tracking-widest border-b border-white/10">Tanggal</th>
                                <th className="px-8 py-5 font-label-md text-primary/70 uppercase tracking-widest border-b border-white/10">Keterangan</th>
                                <th className="px-8 py-5 font-label-md text-primary/70 uppercase tracking-widest border-b border-white/10 text-right">Debit</th>
                                <th className="px-8 py-5 font-label-md text-primary/70 uppercase tracking-widest border-b border-white/10 text-right">Kredit</th>
                                <th className="px-8 py-5 font-label-md text-primary/70 uppercase tracking-widest border-b border-white/10 text-right">Saldo</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-8 py-6 font-body-md text-on-surface-variant">01 Sep 2023</td>
                                <td className="px-8 py-6">
                                    <div className="flex flex-col">
                                        <span className="font-body-md text-on-surface">Saldo Awal</span>
                                        <span className="text-xs text-on-surface-variant/60">Saldo carry over dari bulan lalu</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-right font-body-md text-on-surface">-</td>
                                <td className="px-8 py-6 text-right font-body-md text-on-surface">-</td>
                                <td className="px-8 py-6 text-right font-label-md text-on-surface">Rp 25.000.000</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-8 py-6 font-body-md text-on-surface-variant">05 Sep 2023</td>
                                <td className="px-8 py-6">
                                    <div className="flex flex-col">
                                        <span className="font-body-md text-on-surface">Pendapatan Jasa Animasi</span>
                                        <span className="text-xs text-on-surface-variant/60">Invoice #2023-089 (Project Cyberpunk)</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-right font-label-md text-primary">+ Rp 15.000.000</td>
                                <td className="px-8 py-6 text-right font-body-md text-on-surface">-</td>
                                <td className="px-8 py-6 text-right font-label-md text-on-surface">Rp 40.000.000</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-8 py-6 font-body-md text-on-surface-variant">12 Sep 2023</td>
                                <td className="px-8 py-6">
                                    <div className="flex flex-col">
                                        <span className="font-body-md text-on-surface">Pembelian Lisensi Software</span>
                                        <span className="text-xs text-on-surface-variant/60">Subskripsi tahunan Adobe & Figma</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-right font-body-md text-on-surface">-</td>
                                <td className="px-8 py-6 text-right font-label-md text-secondary">- Rp 8.500.000</td>
                                <td className="px-8 py-6 text-right font-label-md text-on-surface">Rp 31.500.000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Decorative Graphic Card */}
            <section className="glass-card p-1 rounded-[32px] overflow-hidden relative min-h-[200px] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-container/10 via-transparent to-secondary-container/10"></div>
                <div className="flex flex-col md:flex-row items-center gap-8 px-12 py-8 relative z-10 w-full">
                    <div className="w-full md:w-1/3">
                        <h5 className="font-headline-md text-primary mb-2">Visualisasi Saldo</h5>
                        <p className="font-body-md text-on-surface-variant">Tren pertumbuhan saldo akun Modal Pemilik selama 30 hari terakhir menunjukkan stabilitas yang sangat baik.</p>
                    </div>
                    <div className="flex-1 w-full h-32 flex items-end gap-2 px-4">
                        <div className="flex-1 bg-primary/20 rounded-t-lg h-[40%] hover:bg-primary/40 transition-all cursor-help" title="Minggu 1"></div>
                        <div className="flex-1 bg-primary/30 rounded-t-lg h-[55%] hover:bg-primary/50 transition-all cursor-help" title="Minggu 2"></div>
                        <div className="flex-1 bg-primary/40 rounded-t-lg h-[75%] hover:bg-primary/60 transition-all cursor-help" title="Minggu 3"></div>
                        <div className="flex-1 bg-primary/60 rounded-t-lg h-[95%] hover:bg-primary/80 transition-all cursor-help" title="Minggu 4"></div>
                        <div className="flex-1 bg-secondary/30 rounded-t-lg h-[60%] hover:bg-secondary/50 transition-all cursor-help" title="Minggu 5"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BukuBesar;
