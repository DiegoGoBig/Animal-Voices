import React, { useState, useEffect } from 'react';
import { Play, Plus, Star, X, PawPrint, Minus, Phone, ArrowRight, Target, List } from 'lucide-react';
import { Button, SectionHeading } from './components';
import { SITE_DATA, Page } from './data';

export const HomeView = ({ setPage }: { setPage: (p: Page) => void }) => {
    const [showVideo, setShowVideo] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const { home } = SITE_DATA;

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setShowVideo(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src={home.hero.bgImage} 
                        alt="Hero Background" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 animate-fade-in-up">
                            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-[#1a1a3a] leading-tight mb-6">
                                {home.hero.title}<br />
                                <span className="text-brand-blue">{home.hero.titleHighlight}</span> {home.hero.titleSuffix}
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                                {home.hero.description}
                            </p>
                            
                            <div className="flex flex-wrap items-center gap-4 mb-12">
                                <Button variant="salmon" onClick={() => setPage('donate')} className="!px-8 !py-4 text-lg shadow-xl shadow-red-200">
                                    Donar Ahora
                                </Button>
                                
                                <button 
                                    onClick={() => setShowVideo(true)}
                                    className="w-14 h-14 bg-[#1a1a3a] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
                                >
                                    <Play className="w-6 h-6 fill-current ml-1" />
                                </button>
                            </div>

                            {/* Social Proof Stats */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                <div>
                                    <h3 className="text-4xl font-bold text-[#1a1a3a] mb-1">{home.hero.socialProof.count}</h3>
                                    <p className="text-gray-600 text-sm">{home.hero.socialProof.label}</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex -space-x-4">
                                        {home.hero.socialProof.avatars.map((i) => (
                                            <img 
                                                key={i}
                                                src={`https://randomuser.me/api/portraits/women/${i + 40}.jpg`} 
                                                alt="User" 
                                                className="w-12 h-12 rounded-full border-4 border-white object-cover"
                                            />
                                        ))}
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-[#E98888] text-white flex items-center justify-center border-4 border-white -ml-4 z-10 relative shadow-md">
                                        <Plus className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative z-10">
                                <img 
                                    src={home.hero.mainImage} 
                                    alt="Hero" 
                                    className="w-full h-auto object-cover rounded-[3rem] shadow-2xl mask-image-gradient"
                                />
                            </div>
                            
                            <div className="absolute top-10 right-0 md:-right-6 bg-[#1a1a3a] text-white p-6 rounded-3xl shadow-2xl z-20 animate-bounce-slow max-w-[200px]">
                                <div className="text-4xl font-bold mb-2 text-center">{home.hero.socialProof.rating}</div>
                                <div className="flex justify-center gap-1 mb-2">
                                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <p className="text-center text-sm text-gray-300">Calificación de Donantes</p>
                            </div>

                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl -z-0"></div>
                            <div className="absolute top-20 right-20 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl -z-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="py-20 bg-gray-50/50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left Image */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                                <img 
                                    src={home.commitment.image} 
                                    alt="Compromiso" 
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                            {/* Floating Rating Card */}
                            <div className="absolute -top-10 -right-4 lg:-right-10 bg-[#1a1a3a] text-white p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center min-w-[180px] border-4 border-white">
                                <span className="text-5xl font-bold text-white mb-2">{home.commitment.rating}</span>
                                <div className="flex gap-1 mb-3">
                                     {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-brand-accent fill-current" />)}
                                </div>
                                <span className="text-sm font-medium text-gray-300">Donantes Felices</span>
                            </div>
                            {/* Background decoration */}
                             <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-dashed border-gray-200 rounded-[3rem] -z-10"></div>
                        </div>

                        {/* Right Content */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#1a1a3a] mb-6 leading-tight">
                                {home.commitment.title}
                            </h2>
                            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                                {home.commitment.description}
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                {home.commitment.cards.map((card, idx) => (
                                    <div key={idx} className="bg-red-50 p-6 rounded-2xl group hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="bg-[#1a1a3a] p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                                                {idx === 0 ? <Target className="w-6 h-6" /> : <List className="w-6 h-6" />}
                                            </div>
                                            <h4 className="font-bold text-xl text-[#E98888]">{card.title}</h4>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {card.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature & Impact Section - Structured like reference image */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    {/* Top Content Row */}
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
                                <Button onClick={() => setPage('what-we-do')} className="!bg-[#1a1a3a] hover:!bg-brand-blue text-white px-8">
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

                    {/* Stats Metrics Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Cards Column - Spans 2 cols */}
                        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                            {home.testimonials.items.map((item, idx) => (
                                <div key={idx} className="bg-red-50 p-8 rounded-3xl relative hover:shadow-lg transition-shadow">
                                    <div className="flex gap-1 mb-4">
                                        {[1,2,3,4,5].map(star => (
                                            <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                                        "{item.text}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.name}</h4>
                                            <p className="text-xs text-brand-salmon text-[#E98888] font-semibold">{item.role}</p>
                                        </div>
                                    </div>
                                    <PawPrint className="absolute bottom-6 right-6 text-red-200 w-8 h-8 opacity-50" />
                                </div>
                            ))}
                        </div>

                        {/* Text Column - Spans 1 col */}
                        <div className="flex flex-col justify-center lg:pl-8">
                            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#1a1a3a] mb-6">
                                {home.testimonials.title}
                            </h2>
                            <p className="text-gray-600 mb-8">
                                {home.testimonials.description}
                            </p>
                            <div>
                                <Button className="!bg-[#1a1a3a] hover:!bg-brand-blue">
                                    {home.testimonials.buttonText}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <SectionHeading 
                        title={home.faq.title} 
                        subtitle={home.faq.subtitle}
                    />

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left: Accordion */}
                        <div className="space-y-4">
                            {home.faq.items.map((item, idx) => {
                                const isOpen = openFaqIndex === idx;
                                return (
                                    <div 
                                        key={idx} 
                                        className={`rounded-xl transition-all duration-300 overflow-hidden ${
                                            isOpen ? 'bg-[#1a1a3a] text-white shadow-lg transform scale-[1.02]' : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
                                        }`}
                                    >
                                        <button 
                                            onClick={() => toggleFaq(idx)}
                                            className="w-full flex items-center justify-between p-6 text-left"
                                        >
                                            <span className="font-bold text-lg">{item.question}</span>
                                            <div className={`p-1 rounded-full ${isOpen ? 'bg-white/20' : 'bg-gray-200'}`}>
                                                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                            </div>
                                        </button>
                                        
                                        <div 
                                            className={`px-6 overflow-hidden transition-all duration-300 ${
                                                isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                        >
                                            <p className={`leading-relaxed ${isOpen ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right: Support Card */}
                        <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                            <img 
                                src={home.faq.supportCard.image}
                                alt="Support" 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            
                            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {home.faq.supportCard.title}
                                </h3>
                                <p className="text-gray-300 mb-8 text-sm">
                                    {home.faq.supportCard.text}
                                </p>
                                
                                <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-lg transform translate-y-0 hover:-translate-y-1 transition-transform">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#1a1a3a] p-3 rounded-xl text-white">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-brand-salmon font-bold uppercase tracking-wider">{home.faq.supportCard.cta}</p>
                                            <p className="font-bold text-gray-900">{home.faq.supportCard.phone}</p>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-1 text-sm font-bold text-[#1a1a3a] hover:text-brand-blue">
                                        {home.faq.supportCard.linkText} <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <SectionHeading 
                        title={home.blog.title} 
                        subtitle={home.blog.subtitle}
                    />

                    <div className="grid md:grid-cols-3 gap-8">
                        {home.blog.articles.map((article, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                <div className="h-64 overflow-hidden">
                                    <img 
                                        src={article.image} 
                                        alt={article.title} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-[#1a1a3a] mb-4 leading-tight font-heading">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                    <Button variant="salmon" className="!px-6 !py-2 !text-sm !font-bold">
                                        Leer Más
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Preview */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                        {home.mission.title}
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-12">
                        {home.mission.text}
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {home.mission.cards.map((item, i) => (
                            <div key={i} className="flex flex-col items-center p-6 bg-white rounded-xl hover:shadow-lg transition-all">
                                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-blue shadow-sm mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-xl text-gray-900">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="bg-brand-green rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-xl relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                        <div className="relative z-10 md:w-2/3 mb-8 md:mb-0">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                                {home.cta.title}
                            </h2>
                            <p className="text-green-50 text-lg">
                                {home.cta.text}
                            </p>
                        </div>
                        <div className="relative z-10">
                            <Button variant="white" onClick={() => setPage('donate')} className="!text-brand-green font-bold text-lg px-8">
                                {home.cta.buttonText}
                            </Button>
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
                            src={home.hero.videoUrl}
                            title="Video de Impacto" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};