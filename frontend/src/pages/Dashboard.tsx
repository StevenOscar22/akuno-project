

const Dashboard = () => {
    return (
        <div className="p-8 space-y-8 max-w-[1440px] mx-auto">
            <div className="flex items-end justify-between">
                <div>
                    <h2 className="font-headline-xl text-primary mb-2">Jurnal Umum</h2>
                    <p className="font-body-md text-on-surface-variant">Catat dan pantau aliran kas bisnis Anda secara presisi.</p>
                </div>
                <div className="flex gap-4">
                    <div className="glass-card px-6 py-3 rounded-2xl flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary">calendar_today</span>
                        <span className="font-label-md text-secondary">Mei 2024</span>
                    </div>
                </div>
            </div>

            {/* Input Section (Bento Style Card) */}
            <section className="glass-card rounded-[2rem] p-8 shadow-2xl overflow-hidden relative group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/20 transition-all duration-700"></div>
                <div className="relative">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-2 h-8 bg-primary rounded-full"></div>
                        <h3 className="font-headline-md text-on-surface">Input Jurnal Baru</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <label className="font-label-md text-on-surface-variant ml-2">Tanggal</label>
                            <input className="w-full bg-surface-container-highest/50 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface" type="date" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <label className="font-label-md text-on-surface-variant ml-2">Keterangan</label>
                            <input className="w-full bg-surface-container-highest/50 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface outline-none" placeholder="Contoh: Pembelian Inventaris Kantor" type="text" />
                        </div>
                        <div className="space-y-2">
                            <label className="font-label-md text-on-surface-variant ml-2">Ref</label>
                            <input className="w-full bg-surface-container-highest/50 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface outline-none" placeholder="REF-001" type="text" />
                        </div>
                        <div className="space-y-2">
                            <label className="font-label-md text-on-surface-variant ml-2">Akun Debit</label>
                            <select className="w-full bg-surface-container-highest/50 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface appearance-none outline-none">
                                <option>Pilih Akun...</option>
                                <option>Kas (1101)</option>
                                <option>Piutang Usaha (1103)</option>
                                <option>Perlengkapan (1105)</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="font-label-md text-on-surface-variant ml-2">Akun Kredit</label>
                            <select className="w-full bg-surface-container-highest/50 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface appearance-none outline-none">
                                <option>Pilih Akun...</option>
                                <option>Utang Usaha (2101)</option>
                                <option>Pendapatan Jasa (4101)</option>
                                <option>Modal Pemilik (3101)</option>
                            </select>
                        </div>
                        <div className="md:col-span-3">
                            <div className="flex items-center gap-6">
                                <div className="flex-1 space-y-2">
                                    <label className="font-label-md text-on-surface-variant ml-2">Nominal (Rp)</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold">Rp</span>
                                        <input className="w-full bg-surface-container-highest/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface font-headline-md outline-none" placeholder="0" type="number" />
                                    </div>
                                </div>
                                <div className="pt-8">
                                    <button className="bg-primary text-on-primary font-label-md px-8 py-4 rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
                                        <span className="material-symbols-outlined">add_circle</span>
                                        Simpan Jurnal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Table Section */}
            <section className="space-y-6">
                <div className="flex items-center justify-between px-4">
                    <h3 className="font-headline-md text-on-surface">Daftar Jurnal Umum</h3>
                    <div className="flex gap-2">
                        <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-on-surface-variant hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">filter_list</span>
                        </button>
                        <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-on-surface-variant hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">download</span>
                        </button>
                    </div>
                </div>
                <div className="glass-card rounded-[2rem] overflow-hidden border-white/5">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5">
                                <th className="p-6 font-label-md text-primary/70 uppercase tracking-widest border-b border-white/10">Tanggal</th>
                                <th className="p-6 font-label-md text-primary/70 uppercase tracking-widest border-b border-white/10">Keterangan</th>
                                <th className="p-6 font-label-md text-primary/70 uppercase tracking-widest border-b border-white/10 text-center">Ref</th>
                                <th className="p-6 font-label-md text-primary/70 uppercase tracking-widest border-b border-white/10 text-right">Debit (Rp)</th>
                                <th className="p-6 font-label-md text-primary/70 uppercase tracking-widest border-b border-white/10 text-right">Kredit (Rp)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr className="hover:bg-white/5 transition-all duration-300">
                                <td className="p-6 font-body-md text-on-surface">12 Mei 2024</td>
                                <td className="p-6">
                                    <div className="flex flex-col">
                                        <span className="font-body-md text-on-surface">Kas</span>
                                        <span className="font-body-md text-on-surface-variant ml-8">Pendapatan Jasa</span>
                                    </div>
                                </td>
                                <td className="p-6 text-center font-label-md text-secondary">1101 / 4101</td>
                                <td className="p-6 text-right">
                                    <div className="flex flex-col">
                                        <span className="font-body-md text-on-surface">5.000.000</span>
                                        <span className="font-body-md text-transparent">-</span>
                                    </div>
                                </td>
                                <td className="p-6 text-right">
                                    <div className="flex flex-col">
                                        <span className="font-body-md text-transparent">-</span>
                                        <span className="font-body-md text-on-surface">5.000.000</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-all duration-300">
                                <td className="p-6 font-body-md text-on-surface">14 Mei 2024</td>
                                <td className="p-6">
                                    <div className="flex flex-col">
                                        <span className="font-body-md text-on-surface">Beban Sewa</span>
                                        <span className="font-body-md text-on-surface-variant ml-8">Kas</span>
                                    </div>
                                </td>
                                <td className="p-6 text-center font-label-md text-secondary">5102 / 1101</td>
                                <td className="p-6 text-right">
                                    <div className="flex flex-col">
                                        <span className="font-body-md text-on-surface">2.500.000</span>
                                        <span className="font-body-md text-transparent">-</span>
                                    </div>
                                </td>
                                <td className="p-6 text-right">
                                    <div className="flex flex-col">
                                        <span className="font-body-md text-transparent">-</span>
                                        <span className="font-body-md text-on-surface">2.500.000</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-all duration-300">
                                <td className="p-6 font-body-md text-on-surface">15 Mei 2024</td>
                                <td className="p-6">
                                    <div className="flex flex-col">
                                        <span className="font-body-md text-on-surface">Perlengkapan Kantor</span>
                                        <span className="font-body-md text-on-surface-variant ml-8">Utang Usaha</span>
                                    </div>
                                </td>
                                <td className="p-6 text-center font-label-md text-secondary">1105 / 2101</td>
                                <td className="p-6 text-right">
                                    <div className="flex flex-col">
                                        <span className="font-body-md text-on-surface">750.000</span>
                                        <span className="font-body-md text-transparent">-</span>
                                    </div>
                                </td>
                                <td className="p-6 text-right">
                                    <div className="flex flex-col">
                                        <span className="font-body-md text-transparent">-</span>
                                        <span className="font-body-md text-on-surface">750.000</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="bg-primary/5">
                                <td className="p-6 font-headline-md text-primary text-right" colSpan={3}>Total Akhir</td>
                                <td className="p-6 text-right font-headline-md text-primary">8.250.000</td>
                                <td className="p-6 text-right font-headline-md text-primary">8.250.000</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
