

const NeracaLajur = () => {
    return (
        <div className="max-w-[1440px] mx-auto p-4 md:p-8">
            {/* Page Header */}
            <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="font-headline-xl text-primary font-bold mb-2">Neraca Lajur</h2>
                    <p className="font-body-lg text-on-surface-variant flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                        Periode Desember 2023
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 font-label-md transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        Export
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-primary-container text-on-primary-container hover:bg-tertiary-container font-label-md font-bold transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">print</span>
                        Print
                    </button>
                </div>
            </header>

            {/* Worksheet Container (Glass Panel) */}
            <div className="glass-card rounded-xl overflow-hidden flex flex-col">
                {/* Tools/Filter Bar */}
                <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                    <div className="relative w-64">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
                        <input className="w-full bg-surface-container-highest/50 border border-white/10 rounded-lg py-2 pl-10 pr-4 font-body-md text-on-surface focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/50" placeholder="Cari Akun..." type="text" />
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant font-label-sm">
                        <span>Tampilkan:</span>
                        <select className="bg-surface-container-highest/50 border border-white/10 rounded-md py-1 px-2 focus:outline-none focus:border-primary/50 text-on-surface">
                            <option>Semua Akun</option>
                            <option>Hanya yang memiliki saldo</option>
                        </select>
                    </div>
                </div>

                {/* 10-Column Table Wrapper with Horizontal Scroll */}
                <div className="overflow-x-auto custom-scrollbar pb-4">
                    <table className="w-full min-w-[1200px] text-left border-collapse">
                        {/* Header Grouping */}
                        <thead className="bg-white/5 font-label-md text-on-surface-variant">
                            <tr>
                                <th className="p-4 border-r border-white/10 font-semibold sticky left-0 bg-[#0d172e] z-10 w-[250px]" rowSpan={2}>Nama Akun</th>
                                <th className="p-3 text-center border-r border-b border-white/10 font-semibold text-primary-fixed-dim/80" colSpan={2}>Neraca Saldo</th>
                                <th className="p-3 text-center border-r border-b border-white/10 font-semibold text-secondary-fixed-dim/80" colSpan={2}>Penyesuaian</th>
                                <th className="p-3 text-center border-r border-b border-white/10 font-semibold text-tertiary-fixed-dim/80" colSpan={2}>NS Disesuaikan</th>
                                <th className="p-3 text-center border-r border-b border-white/10 font-semibold text-error/80" colSpan={2}>Laba Rugi</th>
                                <th className="p-3 text-center border-b border-white/10 font-semibold text-primary-container/80" colSpan={2}>Neraca</th>
                            </tr>
                            <tr className="text-xs tracking-wider">
                                <th className="p-3 text-right border-r border-white/10 font-medium">Debit</th>
                                <th className="p-3 text-right border-r border-white/10 font-medium">Kredit</th>
                                <th className="p-3 text-right border-r border-white/10 font-medium">Debit</th>
                                <th className="p-3 text-right border-r border-white/10 font-medium">Kredit</th>
                                <th className="p-3 text-right border-r border-white/10 font-medium">Debit</th>
                                <th className="p-3 text-right border-r border-white/10 font-medium">Kredit</th>
                                <th className="p-3 text-right border-r border-white/10 font-medium">Debit</th>
                                <th className="p-3 text-right border-r border-white/10 font-medium">Kredit</th>
                                <th className="p-3 text-right border-r border-white/10 font-medium">Debit</th>
                                <th className="p-3 text-right border-b border-white/10 font-medium">Kredit</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody className="font-body-md text-on-surface divide-y divide-white/5">
                            {/* Row 1: Kas */}
                            <tr className="hover:bg-white/[0.02] transition-colors">
                                <td className="p-4 border-r border-white/5 sticky left-0 bg-[#0b1326]">101 - Kas</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">15,000,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">15,000,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-primary-fixed-dim">15,000,000</td>
                                <td className="p-4 text-right font-mono text-on-surface-variant/50">-</td>
                            </tr>
                            {/* Row 2: Piutang */}
                            <tr className="hover:bg-white/[0.02] transition-colors">
                                <td className="p-4 border-r border-white/5 sticky left-0 bg-[#0b1326]">102 - Piutang Usaha</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">8,500,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">500,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">8,000,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-primary-fixed-dim">8,000,000</td>
                                <td className="p-4 text-right font-mono text-on-surface-variant/50">-</td>
                            </tr>
                            {/* Row 3: Pendapatan Jasa */}
                            <tr className="hover:bg-white/[0.02] transition-colors">
                                <td className="p-4 border-r border-white/5 sticky left-0 bg-[#0b1326]">401 - Pendapatan Jasa</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">25,000,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">25,000,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-secondary-fixed-dim">25,000,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right font-mono text-on-surface-variant/50">-</td>
                            </tr>
                            {/* Row 4: Beban Gaji */}
                            <tr className="hover:bg-white/[0.02] transition-colors">
                                <td className="p-4 border-r border-white/5 sticky left-0 bg-[#0b1326]">501 - Beban Gaji</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">4,000,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">1,500,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">5,500,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-error">5,500,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right font-mono text-on-surface-variant/50">-</td>
                            </tr>
                            {/* Placeholder Rows to simulate more data */}
                            <tr className="opacity-50 hover:bg-white/[0.02] transition-colors"><td className="p-4 text-center italic text-sm" colSpan={11}>...</td></tr>
                            
                            {/* Subtotals before Net Income */}
                            <tr className="bg-white/[0.03] border-t border-white/10 font-semibold">
                                <td className="p-4 border-r border-white/5 sticky left-0 bg-[#0d172e] text-right">Subtotal</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">27,500,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">27,500,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">1,500,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">1,500,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">28,500,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">28,500,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">5,500,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">25,000,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">23,000,000</td>
                                <td className="p-4 text-right font-mono">3,500,000</td>
                            </tr>
                            
                            {/* Net Income Row */}
                            <tr className="bg-primary/5 border-b border-white/10 font-semibold text-primary">
                                <td className="p-4 border-r border-white/5 sticky left-0 bg-[#0b1c31] pl-8">Laba Bersih</td>
                                <td className="p-4 border-r border-white/5"></td>
                                <td className="p-4 border-r border-white/5"></td>
                                <td className="p-4 border-r border-white/5"></td>
                                <td className="p-4 border-r border-white/5"></td>
                                <td className="p-4 border-r border-white/5"></td>
                                <td className="p-4 border-r border-white/5"></td>
                                <td className="p-4 text-right border-r border-white/5 font-mono">19,500,000</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right border-r border-white/5 font-mono text-on-surface-variant/50">-</td>
                                <td className="p-4 text-right font-mono">19,500,000</td>
                            </tr>
                            
                            {/* Final Totals */}
                            <tr className="bg-white/[0.05] border-b-2 border-primary-container font-bold text-on-surface">
                                <td className="p-4 border-r border-white/10 sticky left-0 bg-[#111d35] text-right uppercase tracking-wider text-sm text-primary-container">Total Balance</td>
                                <td className="p-4 text-right border-r border-white/10 font-mono">27,500,000</td>
                                <td className="p-4 text-right border-r border-white/10 font-mono">27,500,000</td>
                                <td className="p-4 text-right border-r border-white/10 font-mono">1,500,000</td>
                                <td className="p-4 text-right border-r border-white/10 font-mono">1,500,000</td>
                                <td className="p-4 text-right border-r border-white/10 font-mono">28,500,000</td>
                                <td className="p-4 text-right border-r border-white/10 font-mono">28,500,000</td>
                                <td className="p-4 text-right border-r border-white/10 font-mono text-secondary-container">25,000,000</td>
                                <td className="p-4 text-right border-r border-white/10 font-mono text-secondary-container">25,000,000</td>
                                <td className="p-4 text-right border-r border-white/10 font-mono text-primary-container">23,000,000</td>
                                <td className="p-4 text-right font-mono text-primary-container">23,000,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer indicator */}
            <div className="mt-4 flex justify-between items-center text-on-surface-variant font-label-sm">
                <p>Menampilkan 24 akun aktif</p>
                <div className="flex items-center gap-2 text-primary-fixed-dim">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>Worksheet Balanced</span>
                </div>
            </div>
        </div>
    );
};

export default NeracaLajur;
