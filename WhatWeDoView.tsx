import React from 'react';
import { ArrowRight, Users } from 'lucide-react';
import { Button, SectionHeading } from './components';
import { SITE_DATA, Page } from './data';

export const WhatWeDoView = ({ setPage }: { setPage: (p: Page) => void }) => {
    const { whatWeDo } = SITE_DATA;

    return (
        <div className="pt-32 lg:pt-44 pb-20">
            <div className="container mx-auto px-6">
                <SectionHeading 
                    title={whatWeDo.title} 
                    subtitle={whatWeDo.subtitle}
                />
                
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {whatWeDo.programs.map((program, idx) => (
                        <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                            <div className="h-64 overflow-hidden relative">
                                <img 
                                    src={program.image} 
                                    alt={program.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">
                                    {program.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {program.desc}
                                </p>
                                <Button variant="outline" className="w-full justify-center text-sm" onClick={() => setPage('donate')}>
                                    Apoyar este programa <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-brand-light rounded-3xl p-10 text-center">
                    <Users className="w-16 h-16 text-brand-blue mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4">{whatWeDo.volunteer.title}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        {whatWeDo.volunteer.text}
                    </p>
                    <Button variant="primary" onClick={() => setPage('contact')}>
                        {whatWeDo.volunteer.buttonText}
                    </Button>
                </div>
            </div>
        </div>
    );
};