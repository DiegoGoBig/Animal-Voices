import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading, Button } from '../components';
import { SITE_DATA } from '../../data';
import { Play, X, PawPrint } from 'lucide-react';

export const ImpactView = () => {
    const navigate = useNavigate();
    const { impact, home } = SITE_DATA;
    const [showVideo, setShowVideo] = useState(false);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setShowVideo(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <div className="pt-32 lg:pt-44 pb-20">
            <div className="container mx-auto px-6">
                <SectionHeading 
                    title={impact.title} 
                    subtitle={impact.subtitle}
                />

                {/* Feature & Impact Section Content (Reused from Home) */}
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
                    {/* Left Image (Vet) */}
                    <div className="hidden lg:block w-1/4">
                        <img 
                            src={home.featureSection.image1} 
                            alt="Vet Care" 
                            className="w-full h-72 object-cover rounded-[2rem] shadow-lg transform -rotate-2 hover:rotate-0 transition-all duration-500"
                        />
                    </div>

                    {/* Center Text Content */}
                    <div className="w-full lg:w-2/4 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#1a1a3a] mb-6 leading-tight">
                            {home.featureSection.title}
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {home.featureSection.description}
                        </p>

                        <div className="bg-blue-50/80 p-6 rounded-2xl mb-8 text-left">
                            <ul className="space-y-4">
                                {home.featureSection.features.map((feature: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <PawPrint className="w-5 h-5 text-[#1a1a3a] shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium text-sm md:text-base">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex justify-center lg:justify-start">
                            <Button onClick={() => navigate('/what-we-do')} className="!bg-[#1a1a3a] hover:!bg-brand-blue text-white px-8">
                                {home.featureSection.buttonText}
                            </Button>
                        </div>
                    </div>

                    {/* Right Image (Happy People) */}
                     <div className="hidden lg:block w-1/4">
                        <img 
                            src={home.featureSection.image2} 
                            alt="Happy Adoption" 
                            className="w-full h-72 object-cover rounded-[2rem] shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-500"
                        />
                    </div>
                     {/* Mobile Image (Show only one or specific layout for mobile) */}
                     <div className="lg:hidden w-full h-64 relative overflow-hidden rounded-2xl">
                          <img src={home.featureSection.image1} className="w-full h-full object-cover" alt="Feature Mobile" />
                     </div>
                </div>
                
                {/* Dashed Divider */}
                <div className="w-full border-t-2 border-dashed border-gray-200 mb-16"></div>

                {/* Dashboard Highlights (Stats) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                    {home.impactStats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-4xl md:text-5xl font-heading font-bold text-[#E98888] mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-600 font-medium text-base">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured Story - "Where Friendships Begin" (Collage Layout) */}
                <div className="bg-[#FDFBF7] rounded-[3rem] p-8 lg:p-16 mb-24 overflow-hidden relative">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        
                        {/* Images Collage Column */}
                        <div className="lg:col-span-5 relative h-[500px] hidden lg:block">
                            {/* Top Image (Couple) */}
                            <div className="absolute top-0 left-0 w-3/4 h-64 rounded-2xl overflow-hidden shadow-lg z-10">
                                <img src={impact.featuredCampaign.images[0]} className="w-full h-full object-cover" alt="Couple" />
                            </div>
                            {/* Bottom Left Image (Cage) */}
                            <div className="absolute bottom-0 left-0 w-3/5 h-56 rounded-2xl overflow-hidden shadow-lg z-20 border-4 border-[#FDFBF7]">
                                <img src={impact.featuredCampaign.images[1]} className="w-full h-full object-cover" alt="Shelter" />
                            </div>
                            
                            {/* Paw Icon Decoration */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#D4E2D4] p-4 rounded-full z-30">
                                <svg className="w-8 h-8 text-[#2F4F38]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3-3c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v5zm1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="lg:col-span-7">
                             <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">{impact.featuredCampaign.tag}</p>
                             <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-[#004d60] leading-tight mb-8">
                                {impact.featuredCampaign.title.split(',')[0]},<br/>
                                <span className="opacity-90">{impact.featuredCampaign.title.split(',')[1]}</span>
                             </h2>

                             <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                                 {/* Text Block */}
                                 <div>
                                     <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                                        {impact.featuredCampaign.description}
                                     </p>
                                     <p className="text-gray-700 leading-relaxed text-sm">
                                        {impact.featuredCampaign.description2}
                                     </p>
                                 </div>
                                 {/* Interactive Image/Video Block */}
                                 <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => setShowVideo(true)}>
                                     <img src={impact.featuredCampaign.images[2]} alt="Dog eating" className="w-full h-48 object-cover" />
                                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                         <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform">
                                            <Play className="w-5 h-5 text-[#004d60] fill-current" />
                                         </div>
                                     </div>
                                 </div>
                             </div>

                             <Button className="!bg-brand-green/50 hover:!bg-brand-green/70 !text-[#004d60] !font-bold">
                                Más Información
                             </Button>
                        </div>
                    </div>
                </div>

                {/* Success Stories (Blog Style) */}
                <div className="mb-24">
                     <h3 className="text-3xl font-heading font-bold text-[#1a1a3a] mb-12 text-center">Historias de Éxito</h3>
                     <div className="grid md:grid-cols-3 gap-8">
                        {impact.successStories.map((story, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                <div className="h-64 overflow-hidden">
                                    <img 
                                        src={story.image} 
                                        alt={story.title} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-[#1a1a3a] mb-4 leading-tight font-heading">
                                        {story.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                        {story.excerpt}
                                    </p>
                                    <Button variant="salmon" className="!px-6 !py-2 !text-sm !font-bold">
                                        Leer Historia
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Transformation Stories (Before/After) */}
                {/* <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8 border-l-4 border-brand-green pl-4">
                    {impact.storiesTitle}
                </h3>
                <div className="grid md:grid-cols-2 gap-12">
                    {impact.stories.map((story, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="grid grid-cols-2 h-64">
                                <div className="relative">
                                    <img src={story.imageBefore} alt="Antes" className="w-full h-full object-cover grayscale" />
                                    <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Antes</span>
                                </div>
                                <div className="relative">
                                    <img src={story.imageAfter} alt="Después" className="w-full h-full object-cover" />
                                    <span className="absolute bottom-2 left-2 bg-brand-green text-white text-xs px-2 py-1 rounded">Ahora</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-2xl font-bold text-gray-900">{story.name}</h4>
                                    <span className="bg-brand-green/10 text-brand-green text-xs font-bold px-3 py-1 rounded-full">
                                        {story.badge}
                                    </span>
                                </div>
                                <h5 className="text-lg font-semibold text-brand-blue mb-2">{story.title}</h5>
                                <p className="text-gray-600">{story.desc}</p>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>

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
                            src={impact.featuredCampaign.videoUrl}
                            title="Video de Impacto" 
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