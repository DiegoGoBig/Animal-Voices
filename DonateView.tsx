import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Button } from './components';
import { SITE_DATA } from './data';

export const DonateView = () => {
    const [amount, setAmount] = useState<number | null>(50);
    const [frequency, setFrequency] = useState<'monthly' | 'once'>('monthly');
    const [customAmount, setCustomAmount] = useState('');
    const { donate } = SITE_DATA;

    const presetAmounts = frequency === 'monthly' ? [20, 50, 100] : [50, 100, 200];

    return (
        <div className="pt-32 lg:pt-44 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">{donate.title}</h1>
                    <p className="text-lg text-gray-600">{donate.subtitle}</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Visual Side */}
                    <div className="md:w-5/12 bg-brand-blue p-8 text-white relative flex flex-col justify-between">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">¿Por qué donar mensualmente?</h3>
                            <ul className="space-y-4">
                                {donate.reasons.map((reason, idx) => (
                                    <li key={idx} className="flex gap-3">
                                        <div className="bg-white/20 p-1 rounded-full h-fit">{reason.icon}</div>
                                        <span className="text-blue-100 text-sm">{reason.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <img 
                            src={donate.image} 
                            className="absolute bottom-0 right-0 w-full opacity-20"
                            alt="Perro"
                        />
                    </div>

                    {/* Form Side */}
                    <div className="md:w-7/12 p-8 md:p-12">
                        {/* Frequency Toggle */}
                        <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
                            <button 
                                className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${frequency === 'monthly' ? 'bg-brand-green text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
                                onClick={() => setFrequency('monthly')}
                            >
                                Mensual (Recurrente)
                            </button>
                            <button 
                                className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${frequency === 'once' ? 'bg-brand-blue text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
                                onClick={() => setFrequency('once')}
                            >
                                Una sola vez
                            </button>
                        </div>

                        {/* Amount Grid */}
                        <div className="mb-8">
                            <label className="block text-sm font-bold text-gray-700 mb-3">Selecciona el monto</label>
                            <div className="grid grid-cols-3 gap-3 mb-4">
                                {presetAmounts.map((amt) => (
                                    <button
                                        key={amt}
                                        onClick={() => { setAmount(amt); setCustomAmount(''); }}
                                        className={`py-4 rounded-xl font-bold border-2 transition-all ${
                                            amount === amt 
                                            ? 'border-brand-green bg-green-50 text-brand-green' 
                                            : 'border-gray-200 text-gray-600 hover:border-brand-green/50'
                                        }`}
                                    >
                                        ${amt}
                                    </button>
                                ))}
                            </div>
                            <div className="relative">
                                <span className="absolute left-4 top-3.5 text-gray-500 font-bold">$</span>
                                <input 
                                    type="number" 
                                    placeholder="Otro monto" 
                                    className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-green focus:outline-none transition-colors"
                                    value={customAmount}
                                    onChange={(e) => { setCustomAmount(e.target.value); setAmount(null); }}
                                />
                            </div>
                        </div>

                        <Button variant="donate" className="w-full justify-center text-lg py-4 mb-6 shadow-xl shadow-green-200">
                            Donar {amount ? `$${amount}` : customAmount ? `$${customAmount}` : ''} {frequency === 'monthly' ? 'al Mes' : ''}
                        </Button>

                        <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Pago 100% seguro y encriptado (SSL)</span>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h4 className="font-bold text-gray-900 mb-4">Otras formas de ayudar</h4>
                    <div className="flex flex-wrap justify-center gap-4">
                        {donate.otherWays.map((way, idx) => (
                            <button key={idx} className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-brand-blue hover:text-brand-blue transition-colors">
                                {way}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};