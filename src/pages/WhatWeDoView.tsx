import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, TrendingUp, Users, Heart, ArrowRight, X, Phone } from 'lucide-react';
import { Button, PageHeader } from '../components';
import { SITE_DATA } from '../../data';

export const WhatWeDoView = () => {
    const navigate = useNavigate();
    const { whatWeDo, home } = SITE_DATA;
    const [showVideo, setShowVideo] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    return (
        <div className="pb-20 bg-white overflow-hidden">
            <PageHeader 
                title={whatWeDo.title} 
                breadcrumb="QUE HACEMOS"
                bgImage="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=1920"
            />
            
            <div className="pt-48 container mx-auto px-6">
                
                <div className="space-y-32">
                    {whatWeDo.programs.map((program, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24 relative`}>
                                
                                {/* Image Section */}
                                <div className="w-full lg:w-1/2 relative">
                                    {/* Blue Blob Background */}
                                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue/20 z-0 rounded-full blur-3xl opacity-60`}></div>
                                    
                                    {/* Organic Image Container */}
                                    <div className="relative z-10 group/image cursor-pointer" onClick={() => {
                                        if (program.video) {
                                            // Convert youtu.be or normal youtube link to embed if necessary
                                            // simpler: just trust the data or basic replace
                                            let embedUrl = program.video;
                                            if (program.video.includes('youtu.be')) {
                                                embedUrl = program.video.replace('youtu.be/', 'www.youtube.com/embed/');
                                            } else if (program.video.includes('watch?v=')) {
                                                embedUrl = program.video.replace('watch?v=', 'embed/');
                                            }
                                            if (!embedUrl.includes('?')) embedUrl += '?autoplay=1';
                                            
                                            setVideoUrl(embedUrl);
                                            setShowVideo(true);
                                        }
                                    }}>
                                        <div className="relative overflow-hidden w-full h-[500px] shadow-2xl transition-transform hover:scale-[1.02] duration-500"
                                            style={{
                                                borderRadius: isEven 
                                                    ? '42% 58% 70% 30% / 45% 45% 55% 55%' 
                                                    : '58% 42% 30% 70% / 55% 55% 45% 45%'
                                            }}
                                        >
                                            <img 
                                                src={program.image} 
                                                alt={program.title} 
                                                className="w-full h-full object-cover"
                                            />
                                            
                                            {/* Play Button Overlay */}
                                            {program.video && (
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/image:bg-black/40 transition-colors">
                                                    <div className="relative">
                                                        <span className="absolute inset-0 rounded-full bg-white opacity-30 animate-ping"></span>
                                                        <button className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center text-brand-blue shadow-2xl transform transition-transform group-hover/image:scale-110">
                                                            <Play className="w-8 h-8 fill-current ml-1" />
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Contact Card Overlay */}
                                        <div className={`absolute -bottom-8 ${isEven ? '-right-6' : '-left-6'} bg-[#1a1a3a] text-white p-6 rounded-2xl shadow-xl z-20 max-w-xs animate-bounce-slow`}>
                                            <p className="text-xs text-gray-300 mb-1">Dudas sobre este programa?</p>
                                            <div className="flex items-center gap-3">
                                                <div className="bg-brand-green p-2 rounded-full text-white">
                                                    <Phone className="w-4 h-4" />
                                                </div>
                                                <span className="font-bold text-lg">+57 300 123 4567</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative inline-block mb-6">
                                        <div className="border border-brand-green/30 px-4 py-1.5 rounded-full flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                                            <span className="text-sm font-bold text-[#1a1a3a] uppercase tracking-wider">Programa Activo</span>
                                        </div>
                                    </div>

                                    <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-[#1a1a3a] mb-6 leading-tight">
                                        {program.title}
                                    </h2>
                                    
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        {program.desc}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4">
                                        <Button 
                                            variant="outline" 
                                            className=" z-9 !rounded-full !px-8 border-gray-300 hover:border-[#1a1a3a]"
                                            onClick={() => navigate('/donar')}
                                        >
                                            Apoyar
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CTA Banner */}
            <section className="pt-48 pb-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl p-10 md:p-20 text-center md:text-left" style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #10B981 100%)' }}>
                        {/* Decorative Pattern Overlay */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <svg className="absolute top-0 right-0 w-64 h-64 -mr-16 -mt-16 text-white" fill="currentColor" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" />
                            </svg>
                            <svg className="absolute bottom-0 left-0 w-48 h-48 -ml-10 -mb-10 text-white" fill="currentColor" viewBox="0 0 100 100">
                                <rect x="10" y="10" width="80" height="80" rx="20" />
                            </svg>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6 leading-tight drop-shadow-md">
                                    {home.cta.title}
                                </h2>
                                <p className="text-blue-50 text-lg md:text-xl font-medium leading-relaxed opacity-90">
                                    {home.cta.text}
                                </p>
                            </div>
                            <div className="shrink-0">
                                <Button 
                                    variant="white" 
                                    onClick={() => navigate('/donar')} 
                                    className="!text-brand-blue !font-bold !text-lg !px-10 !py-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform rounded-full"
                                >
                                    {home.cta.buttonText}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {showVideo && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in"
                    onClick={() => setShowVideo(false)}
                >
                    <button 
                        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                        onClick={() => setShowVideo(false)}
                    >
                        <X className="w-10 h-10" />
                    </button>
                    <div 
                        className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative"
                        onClick={e => e.stopPropagation()}
                    >
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src={videoUrl}
                            title="Video del Programa" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};