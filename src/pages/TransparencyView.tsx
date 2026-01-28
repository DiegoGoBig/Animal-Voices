import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Download, FileText, Archive } from 'lucide-react';
import { Button, PageHeader } from '../components';
import { SITE_DATA } from '../../data';

export const TransparencyView = () => {
    const navigate = useNavigate();
    const { transparency } = SITE_DATA;

    return (
        <div className="pb-20">
            <PageHeader 
                title={transparency.title} 
                breadcrumb="TRANSPARENCIA"
                bgImage="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=1920"
            />

            <div className="pt-20 container mx-auto px-6">

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

                <div className="grid md:grid-cols-2 gap-8 my-16">
                    {/* Current Report Card */}
                    <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                        <div className="bg-brand-blue/10 p-6 rounded-full mb-6 group-hover:bg-brand-blue/20 transition-colors">
                            <FileText className="w-12 h-12 text-brand-blue" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1a1a3a] mb-2">Informe de Gestión 2024</h3>
                        <p className="text-gray-500 mb-8">
                            Conoce en detalle cómo hemos invertido cada donación y el impacto logrado durante el último año.
                        </p>
                        <Button className="!rounded-full px-8 !bg-brand-blue text-white shadow-lg shadow-blue-200">
                            Descargar PDF <Download className="w-4 h-4 ml-2" />
                        </Button>
                        <span className="text-xs text-gray-400 mt-4">Actualizado: Enero 2025 • 2.4 MB</span>
                    </div>

                    {/* Historical Archive Card */}
                    <div className="bg-gray-50 rounded-[2rem] p-10 border-2 border-dashed border-gray-200 flex flex-col items-center text-center group hover:bg-white hover:border-brand-green/30 hover:shadow-lg transition-all duration-300">
                        <div className="bg-gray-200 p-6 rounded-full mb-6 group-hover:bg-brand-green/10 transition-colors">
                            <Archive className="w-12 h-12 text-gray-500 group-hover:text-brand-green transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-700 group-hover:text-[#1a1a3a] mb-2">Histórico de Gestión</h3>
                        <p className="text-gray-500 mb-8">
                            ¿Necesitas consultar información de años anteriores? Solicita acceso a nuestro archivo histórico.
                        </p>
                        <Button 
                            variant="outline" 
                            className="!rounded-full px-8 border-gray-300 group-hover:border-brand-green group-hover:text-brand-green"
                            onClick={() => navigate('/contacto')}
                        >
                            Solicitar Informes Anteriores
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};