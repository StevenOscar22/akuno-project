

const NeracaSaldo = () => {
    return (
        <div className="p-8 flex-1">
            {/* Header Summary Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="glass-card p-6 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-symbols-outlined text-[64px]" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
                    </div>
                    <p className="font-label-md text-on-surface-variant mb-1">Total Debit</p>
                    <h3 className="font-headline-lg text-primary tracking-tight">Rp 1.450.000.000</h3>
                    <div className="mt-4 flex items-center gap-2">
                        <span className="text-primary text-[12px] bg-primary/10 px-2 py-0.5 rounded-full font-bold">STABLE</span>
                        <span className="text-on-surface-variant text-[12px]">Balanced state active</span>
                    </div>
                </div>
                <div className="glass-card p-6 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-symbols-outlined text-[64px]" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                    </div>
                    <p className="font-label-md text-on-surface-variant mb-1">Total Kredit</p>
                    <h3 className="font-headline-lg text-primary tracking-tight">Rp 1.450.000.000</h3>
                    <div className="mt-4 flex items-center gap-2">
                        <span className="text-primary text-[12px] bg-primary/10 px-2 py-0.5 rounded-full font-bold">VERIFIED</span>
                        <span className="text-on-surface-variant text-[12px]">All records synchronized</span>
                    </div>
                </div>
                <div className="glass-card p-6 rounded-3xl flex flex-col justify-center items-center border-dashed border-primary/20 bg-primary/5">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <span className="material-symbols-outlined text-primary text-[32px] animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <p className="font-label-md text-primary font-bold uppercase tracking-widest">Status: Balanced</p>
                    <p className="text-[12px] text-on-surface-variant text-center mt-1">Selisih (Difference): Rp 0</p>
                </div>
            </div>

            {/* Trial Balance Table Section */}
            <div className="glass-card rounded-3xl overflow-hidden glow-accent">
                <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>table_chart</span>
                        </div>
                        <h2 className="font-headline-md text-on-surface tracking-tight">Rincian Saldo Akun</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 font-label-md text-on-surface-variant hover:bg-white/10 transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">filter_list</span>
                            Filter
                        </button>
                        <button className="px-4 py-2 rounded-xl bg-primary-container text-on-primary-container font-label-md hover:opacity-90 transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">download</span>
                            Ekspor PDF
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-container-high/50">
                                <th className="px-8 py-5 font-label-md text-on-surface-variant uppercase tracking-wider w-32">No. Akun</th>
                                <th className="px-8 py-5 font-label-md text-on-surface-variant uppercase tracking-wider">Nama Akun</th>
                                <th className="px-8 py-5 font-label-md text-on-surface-variant uppercase tracking-wider text-right">Debit</th>
                                <th className="px-8 py-5 font-label-md text-on-surface-variant uppercase tracking-wider text-right">Kredit</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-8 py-4 font-body-md text-on-surface-variant">111</td>
                                <td className="px-8 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                                        <span className="font-body-md text-on-surface font-medium">Kas</span>
                                    </div>
                                </td>
                                <td className="px-8 py-4 font-body-md text-primary text-right">Rp 450.000.000</td>
                                <td className="px-8 py-4 font-body-md text-on-surface-variant text-right">-</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-8 py-4 font-body-md text-on-surface-variant">112</td>
                                <td className="px-8 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                                        <span className="font-body-md text-on-surface font-medium">Piutang Usaha</span>
                                    </div>
                                </td>
                                <td className="px-8 py-4 font-body-md text-primary text-right">Rp 120.000.000</td>
                                <td className="px-8 py-4 font-body-md text-on-surface-variant text-right">-</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-8 py-4 font-body-md text-on-surface-variant">121</td>
                                <td className="px-8 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                                        <span className="font-body-md text-on-surface font-medium">Perlengkapan Kantor</span>
                                    </div>
                                </td>
                                <td className="px-8 py-4 font-body-md text-primary text-right">Rp 15.000.000</td>
                                <td className="px-8 py-4 font-body-md text-on-surface-variant text-right">-</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-8 py-4 font-body-md text-on-surface-variant">211</td>
                                <td className="px-8 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-secondary/40"></div>
                                        <span className="font-body-md text-on-surface font-medium">Utang Usaha</span>
                                    </div>
                                </td>
                                <td className="px-8 py-4 font-body-md text-on-surface-variant text-right">-</td>
                                <td className="px-8 py-4 font-body-md text-secondary text-right">Rp 85.000.000</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-8 py-4 font-body-md text-on-surface-variant">311</td>
                                <td className="px-8 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-secondary/40"></div>
                                        <span className="font-body-md text-on-surface font-medium">Modal Pemilik</span>
                                    </div>
                                </td>
                                <td className="px-8 py-4 font-body-md text-on-surface-variant text-right">-</td>
                                <td className="px-8 py-4 font-body-md text-secondary text-right">Rp 1.000.000.000</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-8 py-4 font-body-md text-on-surface-variant">411</td>
                                <td className="px-8 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-secondary/40"></div>
                                        <span className="font-body-md text-on-surface font-medium">Pendapatan Jasa</span>
                                    </div>
                                </td>
                                <td className="px-8 py-4 font-body-md text-on-surface-variant text-right">-</td>
                                <td className="px-8 py-4 font-body-md text-secondary text-right">Rp 365.000.000</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-8 py-4 font-body-md text-on-surface-variant">511</td>
                                <td className="px-8 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                                        <span className="font-body-md text-on-surface font-medium">Beban Gaji</span>
                                    </div>
                                </td>
                                <td className="px-8 py-4 font-body-md text-primary text-right">Rp 780.000.000</td>
                                <td className="px-8 py-4 font-body-md text-on-surface-variant text-right">-</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-8 py-4 font-body-md text-on-surface-variant">512</td>
                                <td className="px-8 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                                        <span className="font-body-md text-on-surface font-medium">Beban Sewa</span>
                                    </div>
                                </td>
                                <td className="px-8 py-4 font-body-md text-primary text-right">Rp 85.000.000</td>
                                <td className="px-8 py-4 font-body-md text-on-surface-variant text-right">-</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="bg-primary/5 border-t border-primary/20">
                                <td className="px-8 py-6 font-headline-md text-primary text-right" colSpan={2}>TOTAL</td>
                                <td className="px-8 py-6 font-headline-md text-primary text-right border-x border-white/5">Rp 1.450.000.000</td>
                                <td className="px-8 py-6 font-headline-md text-primary text-right">Rp 1.450.000.000</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            {/* Footer Message */}
            <div className="mt-8 flex justify-between items-center text-on-surface-variant/60">
                <p className="font-body-md italic">Laporan dibuat secara otomatis pada 24 Mei 2024, 14:30 WIB</p>
                <div className="flex gap-4">
                    <span className="material-symbols-outlined cursor-help hover:text-primary transition-colors">info</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">print</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">share</span>
                </div>
            </div>
        </div>
    );
};

export default NeracaSaldo;
