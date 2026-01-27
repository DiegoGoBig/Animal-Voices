import React from 'react';
import { Activity, Download } from 'lucide-react';
import { SectionHeading } from '../components';
import { SITE_DATA } from '../../data';

export const TransparencyView = () => {
    const { transparency } = SITE_DATA;

    return (
        <div className="pt-32 lg:pt-44 pb-20">
            <div className="container mx-auto px-6">
                <SectionHeading 
                    title={transparency.title} 
                    subtitle={transparency.subtitle}
                />

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Activity className="text-brand-blue" /> Destino de los Fondos
                        </h3>
                        <div className="space-y-6">
                            {transparency.funds.map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm font-medium mb-2 text-gray-700">
                                        <span>{item.label}</span>
                                        <span>{item.pct}</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                                        <div className={`${item.color} h-4 rounded-full`} style={{ width: item.pct }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-brand-light p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4">{transparency.efficiency.title}</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            {transparency.efficiency.text}
                        </p>
                        <div className="flex gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm flex-1 text-center">
                                <div className="text-2xl font-bold text-brand-blue">A+</div>
                                <div className="text-xs text-gray-500">Calificación de Transparencia</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm flex-1 text-center">
                                <div className="text-2xl font-bold text-brand-green">100%</div>
                                <div className="text-xs text-gray-500">Cumplimiento Legal</div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-8">Informes y Certificados</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {transparency.reports.map((report, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:border-brand-blue transition-colors group bg-white">
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-red-50 text-red-600 p-3 rounded-lg">
                                    {report.icon}
                                </div>
                                <span className="text-sm font-medium text-gray-400">{report.year}</span>
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                                {report.name}
                            </h4>
                            <p className="text-sm text-gray-500 mb-6">PDF • {report.size}</p>
                            <button className="flex items-center text-sm font-bold text-brand-blue hover:text-brand-darkBlue">
                                Descargar <Download className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};