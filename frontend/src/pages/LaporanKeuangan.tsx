import { useEffect } from 'react';

const LaporanKeuangan = () => {
    useEffect(() => {
        // Trigger chart animation
        const bars = document.querySelectorAll('.chart-bar') as NodeListOf<HTMLElement>;
        bars.forEach(bar => {
            const height = bar.getAttribute('data-height');
            bar.style.height = '0%';
            setTimeout(() => {
                if (height) bar.style.height = height;
            }, 300);
        });
    }, []);

    return (
        <div className="p-8">
            {/* Financial Summary Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
                {/* Profit/Loss Chart Card */}
                <div className="md:col-span-8 glass-card p-8 rounded-[1rem]">
                    <div className="flex justify-between items-center mb-10">
                        <div>
                            <h3 className="font-headline-md text-primary mb-1">Laporan Laba Rugi</h3>
                            <p className="font-body-md text-on-surface-variant">Ikhtisar pendapatan dan beban operasional.</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 glass-card rounded-lg font-label-md flex items-center gap-2 hover:bg-white/10 transition-all">
                                <span className="material-symbols-outlined text-sm">download</span> Unduh PDF
                            </button>
                        </div>
                    </div>
                    <div className="flex items-end gap-4 h-64 w-full">
                        {/* Revenue Visualization Bars */}
                        <div className="flex-1 flex flex-col items-center justify-end h-full">
                            <div className="w-full bg-secondary-container/40 rounded-t-lg chart-bar transition-[height] duration-1000 ease-out" data-height="85%" style={{ height: '0%' }}></div>
                            <p className="mt-4 font-label-md text-on-surface-variant">Pendapatan</p>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-end h-full">
                            <div className="w-full bg-error-container/40 rounded-t-lg chart-bar transition-[height] duration-1000 ease-out" data-height="45%" style={{ height: '0%' }}></div>
                            <p className="mt-4 font-label-md text-on-surface-variant">Beban HPP</p>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-end h-full">
                            <div className="w-full bg-primary-container/30 rounded-t-lg chart-bar transition-[height] duration-1000 ease-out" data-height="60%" style={{ height: '0%' }}></div>
                            <p className="mt-4 font-label-md text-on-surface-variant">Beban Operasional</p>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-end h-full">
                            <div className="w-full bg-surface-bright rounded-t-lg chart-bar transition-[height] duration-1000 ease-out" data-height="25%" style={{ height: '0%' }}></div>
                            <p className="mt-4 font-label-md text-on-surface-variant">Pajak</p>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-end h-full">
                            <div className="w-full bg-secondary/60 rounded-t-lg chart-bar transition-[height] duration-1000 ease-out" data-height="70%" style={{ height: '0%' }}></div>
                            <p className="mt-4 font-label-md text-primary">Laba Bersih</p>
                        </div>
                    </div>
                </div>

                {/* Summary Stats */}
                <div className="md:col-span-4 space-y-6">
                    <div className="glass-card rounded-[1rem] p-6 border-l-4 border-secondary-container">
                        <p className="text-on-surface-variant font-label-md">Total Pendapatan</p>
                        <h4 className="font-headline-lg text-on-surface mt-2">Rp 245.800.000</h4>
                        <div className="flex items-center gap-1 text-secondary mt-2">
                            <span className="material-symbols-outlined text-sm">trending_up</span>
                            <span className="text-xs font-label-md">+12.5% vs bln lalu</span>
                        </div>
                    </div>
                    <div className="glass-card rounded-[1rem] p-6 border-l-4 border-error">
                        <p className="text-on-surface-variant font-label-md">Total Beban</p>
                        <h4 className="font-headline-lg text-on-surface mt-2">Rp 162.350.000</h4>
                        <div className="flex items-center gap-1 text-error mt-2">
                            <span className="material-symbols-outlined text-sm">trending_down</span>
                            <span className="text-xs font-label-md">-2.4% vs bln lalu</span>
                        </div>
                    </div>
                    <div className="glass-card rounded-[1rem] p-6 border-l-4 border-primary bg-primary/5">
                        <p className="text-primary font-label-md">Laba Bersih</p>
                        <h4 className="font-headline-lg text-on-surface mt-2">Rp 83.450.000</h4>
                        <div className="flex items-center gap-1 text-primary-fixed-dim mt-2">
                            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                            <span className="text-xs font-label-md">Margin Laba: 34%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Reporting Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Laporan Neraca Section */}
                <div className="glass-card rounded-[1rem] p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-headline-md text-primary">Neraca</h3>
                        <span className="material-symbols-outlined text-on-surface-variant">account_balance_wallet</span>
                    </div>
                    <div className="space-y-6 flex-1">
                        <div>
                            <h4 className="font-label-md text-secondary-fixed-dim border-b border-white/5 pb-2 mb-4">AKTIVA (ASET)</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between font-body-md">
                                    <span className="text-on-surface-variant">Kas & Setara Kas</span>
                                    <span className="text-on-surface">Rp 120.000.000</span>
                                </div>
                                <div className="flex justify-between font-body-md">
                                    <span className="text-on-surface-variant">Piutang Usaha</span>
                                    <span className="text-on-surface">Rp 45.500.000</span>
                                </div>
                                <div className="flex justify-between font-body-md">
                                    <span className="text-on-surface-variant">Persediaan</span>
                                    <span className="text-on-surface">Rp 88.000.000</span>
                                </div>
                                <div className="flex justify-between font-body-md font-bold pt-2 border-t border-white/5">
                                    <span className="text-primary">Total Aktiva</span>
                                    <span className="text-primary">Rp 253.500.000</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-label-md text-secondary-fixed-dim border-b border-white/5 pb-2 mb-4">PASSIVA (KEWAJIBAN & MODAL)</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between font-body-md">
                                    <span className="text-on-surface-variant">Hutang Usaha</span>
                                    <span className="text-on-surface">Rp 30.000.000</span>
                                </div>
                                <div className="flex justify-between font-body-md">
                                    <span className="text-on-surface-variant">Modal Pemilik</span>
                                    <span className="text-on-surface">Rp 140.050.000</span>
                                </div>
                                <div className="flex justify-between font-body-md">
                                    <span className="text-on-surface-variant">Laba Ditahan</span>
                                    <span className="text-on-surface">Rp 83.450.000</span>
                                </div>
                                <div className="flex justify-between font-body-md font-bold pt-2 border-t border-white/5">
                                    <span className="text-primary">Total Passiva</span>
                                    <span className="text-primary">Rp 253.500.000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Jurnal Penutup Section */}
                <div className="glass-card rounded-[1rem] p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-headline-md text-error">Jurnal Penutup</h3>
                        <span className="material-symbols-outlined text-error">lock_clock</span>
                    </div>
                    <p className="font-body-md text-on-surface-variant mb-8">
                        Proses penutupan periode akuntansi akan mereset akun nominal (pendapatan & beban) ke saldo nol dan mentransfer laba bersih ke akun modal/laba ditahan. Tindakan ini tidak dapat dibatalkan.
                    </p>
                    <div className="space-y-4 mb-auto">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                            <span className="material-symbols-outlined text-secondary">check_circle</span>
                            <div>
                                <p className="font-label-md text-on-surface">Validasi Jurnal</p>
                                <p className="text-xs text-on-surface-variant">Semua transaksi periode ini telah diverifikasi.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                            <span className="material-symbols-outlined text-secondary">check_circle</span>
                            <div>
                                <p className="font-label-md text-on-surface">Konsolidasi Akun</p>
                                <p className="text-xs text-on-surface-variant">Akun pendapatan dan beban siap ditutup.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/10">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex flex-col">
                                <span className="text-xs text-on-surface-variant">Periode yang akan ditutup</span>
                                <span className="font-label-md text-on-surface">Desember 2023</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-xs text-on-surface-variant">Status</span>
                                <span className="px-2 py-1 rounded bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-wider">Terbuka</span>
                            </div>
                        </div>
                        <button className="w-full py-4 bg-error-container text-white font-headline-md rounded-xl hover:bg-error transition-all active:scale-[0.98] shadow-lg shadow-error/10 flex items-center justify-center gap-3">
                            <span className="material-symbols-outlined">lock</span>
                            Tutup Periode
                        </button>
                        <p className="text-center text-[10px] text-on-surface-variant mt-4 opacity-60 italic">
                            *Dengan mengklik tombol di atas, Anda menyetujui penguncian data permanen untuk periode ini.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaporanKeuangan;
