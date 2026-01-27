import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button, SectionHeading } from '../components';
import { SITE_DATA } from '../../data';

export const ContactView = () => {
    const { contact, general } = SITE_DATA;

    return (
        <div className="pt-32 lg:pt-44 pb-20">
            <div className="container mx-auto px-6 max-w-5xl">
                <SectionHeading title={contact.title} subtitle={contact.subtitle} />
                
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-brand-light p-8 rounded-2xl">
                            <h3 className="font-bold text-xl mb-6">Información de Contacto</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full text-brand-green shadow-sm">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Oficina Principal</p>
                                        <p className="text-gray-600">{general.address}, {general.officeLocation}<br/>{general.city}</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full text-brand-green shadow-sm">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Email</p>
                                        <p className="text-gray-600">{general.email}</p>
                                        <p className="text-gray-600">{general.volunteersEmail}</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full text-brand-green shadow-sm">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Teléfono</p>
                                        <p className="text-gray-600">{general.phone}</p>
                                        <p className="text-sm text-gray-500 mt-1">{general.schedule}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <form className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="font-bold text-xl mb-6">Envíanos un mensaje</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-blue focus:outline-none transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-blue focus:outline-none transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-blue focus:outline-none transition-colors">
                                    {contact.formSubjects.map((subject, idx) => (
                                        <option key={idx}>{subject}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-blue focus:outline-none transition-colors"></textarea>
                            </div>
                            <Button className="w-full justify-center">Enviar Mensaje</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};