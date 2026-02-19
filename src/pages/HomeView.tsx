import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Plus, Star, X, PawPrint, Minus, Phone, ArrowRight, Target, List, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button, SectionHeading } from '../components';
import { SITE_DATA } from '../../data';
import { wpService, WPPost } from '../services/wordpress';

export const HomeView = () => {
    const navigate = useNavigate();
    const [showVideo, setShowVideo] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const [posts, setPosts] = useState<WPPost[]>([]);
    const [loadingPosts, setLoadingPosts] = useState(true);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
    const { home } = SITE_DATA;

    // Handle resize
    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-play carousel
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (!isPaused) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => 
                    prev === home.testimonials.items.length - (isDesktop ? 2 : 1) ? 0 : prev + 1
                );
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isPaused, isDesktop, home.testimonials.items.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => 
            prev >= home.testimonials.items.length - (isDesktop ? 2 : 1) ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => 
            prev === 0 ? home.testimonials.items.length - (isDesktop ? 2 : 1) : prev - 1
        );
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await wpService.getPosts(3);
            setPosts(data);
            setLoadingPosts(false);
        };
        fetchPosts();
    }, []);

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
            <section className="relative h-[100vh] pt-32 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
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
                                <Button variant="salmon" onClick={() => navigate('/donar')} className="!px-8 !py-4 text-lg shadow-xl shadow-red-200">
                                    Donar Ahora
                                </Button>
                                
                                <div className="relative group">
                                    <span className="absolute inset-0 rounded-full bg-[#1a1a3a] opacity-30 animate-ping group-hover:opacity-50 transition-opacity"></span>
                                    <button 
                                        onClick={() => setShowVideo(true)}
                                        className="relative w-14 h-14 bg-[#1a1a3a] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
                                        aria-label="Ver video"
                                    >
                                        <Play className="w-6 h-6 fill-current ml-1" />
                                    </button>
                                </div>
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
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                                <img 
                                    src={home.hero.mainImage} 
                                    alt="Hero" 
                                    className="w-full h-auto object-cover mask-image-gradient"
                                />
                                <img 
                                    src={home.hero.mainImage2} 
                                    alt="Hero overlay" 
                                    className="absolute top-0 left-0 w-full h-full object-cover opacity-80 mix-blend-multiply mask-image-gradient"
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

                            <div className="flex justify-center items-center lg:justify-center">
                                <Button onClick={() => navigate('/que-hacemos')} className="!bg-[#1a1a3a] hover:!bg-brand-blue text-white px-8">
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
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                         {/* Text Column */}
                        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#1a1a3a] mb-6">
                                {home.testimonials.title}
                            </h2>
                            <p className="text-gray-600 mb-8">
                                {home.testimonials.description}
                            </p>
                            <div className="flex gap-4">
                                <Button 
                                    className="!bg-[#1a1a3a] hover:!bg-brand-blue"
                                    onClick={() => navigate('/impacto')}
                                >
                                    {home.testimonials.buttonText}
                                </Button>
                                <div className="flex gap-2">
                                    <button 
                                        onClick={prevSlide}
                                        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors"
                                        aria-label="Anterior testimonio"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button 
                                        onClick={nextSlide}
                                        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors"
                                        aria-label="Siguiente testimonio"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Carousel Column */}
                        <div 
                            className="w-full lg:w-2/3 relative"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <div className="overflow-hidden rounded-3xl">
                                <div 
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${currentIndex * (isDesktop ? 50 : 100)}%)` }}
                                >
                                    {home.testimonials.items.map((item, idx) => (
                                        <div 
                                            key={idx} 
                                            className="w-full lg:w-1/2 flex-shrink-0 px-3"
                                        >
                                            <div className="bg-white p-8 rounded-3xl h-full border border-gray-100 hover:shadow-xl transition-shadow relative">
                                                <div className="flex gap-1 mb-4">
                                                    {[1,2,3,4,5].map(star => (
                                                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                                    ))}
                                                </div>
                                                <p className="text-gray-700 mb-6 leading-relaxed text-sm italic">
                                                    "{item.text}"
                                                </p>
                                                <div className="flex items-center gap-4 mt-auto">
                                                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                                                        <p className="text-xs text-brand-salmon text-[#E98888] font-semibold">{item.role}</p>
                                                    </div>
                                                </div>
                                                <PawPrint className="absolute bottom-6 right-6 text-gray-50 w-12 h-12 -z-0" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Dots Indicator */}
                            <div className="flex justify-center gap-2 mt-6 lg:hidden">
                                {home.testimonials.items.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                            currentIndex === idx ? "bg-brand-blue w-6" : "bg-gray-300"
                                        }`}
                                        aria-label={`Ir al testimonio ${idx + 1}`}
                                    />
                                ))}
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
                                                isOpen ? 'max-h-64 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                        >
                                            <div className={`leading-relaxed overflow-y-auto max-h-52 pr-2 ${isOpen ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {item.answer}
                                            </div>
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
                                
                                <a
                                    href={`https://wa.me/${home.faq.supportCard.phone}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-lg transform translate-y-0 hover:-translate-y-1 transition-transform"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#25D366] p-3 rounded-xl text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.428a.75.75 0 0 0 .957.952l5.416-1.534A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 0 1-5.012-1.385l-.36-.214-3.733 1.057 1.032-3.648-.235-.376A9.756 9.756 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#25D366] font-bold uppercase tracking-wider">{home.faq.supportCard.cta}</p>
                                            <p className="font-bold text-gray-900">{home.faq.supportCard.linkText}</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-[#1a1a3a]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="text-left">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a3a] mb-4">
                                {home.blog.title}
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl">
                                {home.blog.subtitle}
                            </p>
                            <div className="h-1 w-20 bg-brand-green mt-4 rounded-full"></div>
                        </div>
                        
                        <Button 
                            variant="white" 
                            className="!bg-[#1a1a3a] hover:!bg-brand-blue text-white !px-8 !py-3 shadow-xl border-2 border-gray-100 hover:text-white shrink-0 hidden md:flex"
                            onClick={() => navigate('/blog')}
                        >
                            Visitar Blog <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>

                    {loadingPosts ? (
                        <div className="grid md:grid-cols-3 gap-8">
                           {[1, 2, 3].map(i => (
                               <div key={i} className="bg-gray-100 rounded-[2rem] h-96 animate-pulse"></div>
                           ))}
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {posts.map((post) => {
                                const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url 
                                    || "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800";
                                
                                // Get first category
                                const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || "General";
                                
                                // Strip HTML tags from excerpt
                                const plainExcerpt = post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 100) + '...';

                                return (
                                    <article 
                                        key={post.id} 
                                        className="bg-gray-50 rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                                    >
                                        <div className="h-64 overflow-hidden relative">
                                            <img 
                                                src={imageUrl} 
                                                alt={post.title.rendered} 
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-blue flex items-center gap-1 shadow-sm">
                                                <Tag className="w-3 h-3" />
                                                {category}
                                            </div>
                                        </div>
                                        <div className="p-8 flex flex-col flex-grow">
                                            <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                                                <Calendar className="w-3 h-3" />
                                                {formatDate(post.date)}
                                            </div>

                                            <h3 
                                                className="text-xl font-bold text-[#1a1a3a] mb-4 leading-tight font-heading group-hover:text-brand-blue transition-colors"
                                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                            />
                                            <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                                                {plainExcerpt}
                                            </p>
                                            <Button 
                                                variant="outline" 
                                                className="w-full justify-center !text-sm hover:bg-brand-blue hover:text-white"
                                                onClick={() => navigate(`/blog/${post.slug}`)}
                                            >
                                                Leer Artículo
                                            </Button>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    )}
                    
                    {/* Mobile Button */}
                    <div className="flex justify-center md:hidden">
                         <Button 
                            variant="white" 
                            className="!bg-[#1a1a3a] hover:!bg-brand-blue text-[#fff] !px-10 !py-4 shadow-xl border-2 border-gray-100 hover:border-brand-blue hover:text-white"
                            onClick={() => navigate('/blog')}
                        >
                            Visitar Blog
                        </Button>
                    </div>
                </div>
            </section>         

            {/* CTA Banner */}
            <section className="py-24 bg-white">
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