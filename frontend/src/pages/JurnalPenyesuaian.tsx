

const JurnalPenyesuaian = () => {
    return (
        <div className="flex-1 flex flex-col p-8 lg:p-12 gap-8 overflow-y-auto">
            {/* Header Section */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-bold text-white tracking-tight">Jurnal Penyesuaian</h1>
                    <p className="text-on-surface-variant mt-1 text-lg">Catat penyesuaian akhir periode untuk akurasi laporan keuangan.</p>
                </div>
                <div className="flex gap-3">
                    <button className="glass-card px-4 py-2.5 rounded-xl text-sm font-semibold text-white hover:bg-white/10 flex items-center gap-2">
                        <span className="material-symbols-outlined">download</span> Ekspor
                    </button>
                    <button className="glass-card px-4 py-2.5 rounded-xl text-sm font-semibold text-white hover:bg-white/10 flex items-center gap-2">
                        <span className="material-symbols-outlined">history</span> Riwayat
                    </button>
                </div>
            </header>

            {/* Input Form Card */}
            <section className="glass-card rounded-3xl p-8 border-t border-l border-white/20">
                <div className="flex items-center gap-3 mb-8">
                    <div className="size-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                        <span className="material-symbols-outlined">add_circle</span>
                    </div>
                    <h2 className="text-xl font-bold text-white">Input Transaksi Baru</h2>
                </div>
                <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" onSubmit={(e) => e.preventDefault()}>
                    {/* Date */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-on-surface-variant px-1">Tanggal</label>
                        <div className="relative">
                            <input className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all" type="date" />
                        </div>
                    </div>
                    {/* Description */}
                    <div className="flex flex-col gap-2 lg:col-span-2">
                        <label className="text-sm font-semibold text-on-surface-variant px-1">Keterangan</label>
                        <input className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Contoh: Penyusutan Peralatan Kantor Januari" type="text" />
                    </div>
                    {/* Reference */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-on-surface-variant px-1">Referensi (Ref)</label>
                        <input className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="AJ-001" type="text" />
                    </div>
                    {/* Debit Account */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-on-surface-variant px-1">Akun Debit</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white appearance-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                            <option value="">Pilih Akun</option>
                            <option value="5101">Beban Penyusutan</option>
                            <option value="5102">Beban Sewa</option>
                            <option value="1102">Piutang Pendapatan</option>
                        </select>
                    </div>
                    {/* Credit Account */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-on-surface-variant px-1">Akun Kredit</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white appearance-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                            <option value="">Pilih Akun</option>
                            <option value="1104">Akumulasi Penyusutan</option>
                            <option value="1105">Sewa Dibayar Dimuka</option>
                            <option value="4101">Pendapatan Jasa</option>
                        </select>
                    </div>
                    {/* Nominal */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-on-surface-variant px-1">Nominal (Rp)</label>
                        <input className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="0" type="number" />
                    </div>
                    {/* Actions */}
                    <div className="lg:col-span-3 flex justify-end gap-4 mt-4 border-t border-white/5 pt-6">
                        <button className="px-8 py-3 rounded-xl text-sm font-bold text-on-surface-variant hover:text-white transition-colors" type="reset">Batal</button>
                        <button className="bg-gradient-to-r from-primary-fixed-dim to-secondary-container px-10 py-3 rounded-xl text-sm font-bold text-on-primary shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-95 transition-all" type="submit">
                            Simpan Penyesuaian
                        </button>
                    </div>
                </form>
            </section>

            {/* Table Section */}
            <section className="glass-card rounded-3xl overflow-hidden border-t border-l border-white/10 flex flex-col">
                <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h3 className="text-xl font-bold text-white">Daftar Jurnal Penyesuaian</h3>
                    <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2 border border-white/10 focus-within:border-primary transition-all">
                        <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
                        <input className="bg-transparent border-none focus:ring-0 text-sm p-0 w-48 text-white placeholder:text-on-surface-variant/50 outline-none" placeholder="Cari transaksi..." type="text" />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5">
                                <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Tanggal</th>
                                <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Keterangan</th>
                                <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant text-center">Ref</th>
                                <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant text-right">Debit (Rp)</th>
                                <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant text-right">Kredit (Rp)</th>
                                <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-8 py-5 text-sm text-white">31 Jan 2024</td>
                                <td className="px-8 py-5">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-white">Beban Penyusutan Peralatan</span>
                                        <span className="text-xs text-on-surface-variant italic ml-4">Akum. Penyusutan Peralatan</span>
                                    </div>
                                </td>
                                <td className="px-8 py-5 text-sm text-on-surface-variant text-center">AJ-001</td>
                                <td className="px-8 py-5 text-sm font-mono text-right text-emerald-400">1.250.000</td>
                                <td className="px-8 py-5 text-sm font-mono text-right text-rose-400">1.250.000</td>
                                <td className="px-8 py-5 text-center">
                                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
                                        <span className="material-symbols-outlined text-on-surface-variant text-lg">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-8 py-5 text-sm text-white">31 Jan 2024</td>
                                <td className="px-8 py-5">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-white">Beban Sewa Kantor</span>
                                        <span className="text-xs text-on-surface-variant italic ml-4">Sewa Dibayar Dimuka</span>
                                    </div>
                                </td>
                                <td className="px-8 py-5 text-sm text-on-surface-variant text-center">AJ-002</td>
                                <td className="px-8 py-5 text-sm font-mono text-right text-emerald-400">5.000.000</td>
                                <td className="px-8 py-5 text-sm font-mono text-right text-rose-400">5.000.000</td>
                                <td className="px-8 py-5 text-center">
                                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
                                        <span className="material-symbols-outlined text-on-surface-variant text-lg">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-8 py-5 text-sm text-white">31 Jan 2024</td>
                                <td className="px-8 py-5">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-white">Beban Gaji & Upah</span>
                                        <span className="text-xs text-on-surface-variant italic ml-4">Utang Gaji</span>
                                    </div>
                                </td>
                                <td className="px-8 py-5 text-sm text-on-surface-variant text-center">AJ-003</td>
                                <td className="px-8 py-5 text-sm font-mono text-right text-emerald-400">8.450.000</td>
                                <td className="px-8 py-5 text-sm font-mono text-right text-rose-400">8.450.000</td>
                                <td className="px-8 py-5 text-center">
                                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
                                        <span className="material-symbols-outlined text-on-surface-variant text-lg">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="bg-white/10 font-bold">
                                <td className="px-8 py-6 text-sm text-white uppercase text-right" colSpan={3}>Total Penyesuaian</td>
                                <td className="px-8 py-6 text-sm font-mono text-right text-emerald-400">14.700.000</td>
                                <td className="px-8 py-6 text-sm font-mono text-right text-rose-400">14.700.000</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default JurnalPenyesuaian;
