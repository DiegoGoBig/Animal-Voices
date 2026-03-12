import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, X, Heart, TrendingUp, Users, Calendar, Tag, Play, PawPrint, Volume2, SkipBack, SkipForward, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button, PageHeader } from '../components';
import { SITE_DATA } from '../../data';
import { wpService, WPPost } from '../services/wordpress';

export const ImpactView = () => {
    const navigate = useNavigate();
    const { impact, home } = SITE_DATA;
    
    // Carousel State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    // Handle resize
    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-play carousel
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (!isPaused && impact.testimonials) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => 
                    prev >= impact.testimonials.items.length - (isDesktop ? 2 : 1) ? 0 : prev + 1
                );
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isPaused, isDesktop, impact.testimonials?.items.length]);

    const nextSlide = () => {
        if (impact.testimonials) {
            setCurrentIndex((prev) => 
                prev >= impact.testimonials.items.length - (isDesktop ? 2 : 1) ? 0 : prev + 1
            );
        }
    };

    const prevSlide = () => {
        if (impact.testimonials) {
            setCurrentIndex((prev) => 
                prev === 0 ? impact.testimonials.items.length - (isDesktop ? 2 : 1) : prev - 1
            );
        }
    };

    // Video Player State
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    
    const [stories, setStories] = useState<WPPost[]>([]);
    const [loadingStories, setLoadingStories] = useState(true);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    useEffect(() => {
        const fetchStories = async () => {
            // Fetch posts with category ID 3 ("Historias")
            const data = await wpService.getPosts(3, 3);
            setStories(data);
            setLoadingStories(false);
        };
        fetchStories();
    }, []);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsPlaying(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(currentProgress);
        }
    };

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (videoRef.current) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const clickedValue = (x / rect.width) * 100;
            videoRef.current.currentTime = (clickedValue / 100) * videoRef.current.duration;
            setProgress(clickedValue);
        }
    };

    const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
        if (videoRef.current) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const newVolume = Math.max(0, Math.min(1, x / rect.width));
            videoRef.current.volume = newVolume;
            setVolume(newVolume);
        }
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        setProgress(0);
        // Optional: auto-play next
        // const nextIndex = (currentVideoIndex + 1) % impact.featuredCampaign.videoPlaylist.length;
        // setCurrentVideoIndex(nextIndex);
    };

    return (
        <div className="pb-20">
            <PageHeader 
                title={impact.title} 
                breadcrumb="IMPACTO"
                bgImage="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=1920"
            />
            
            <div className="pt-20 container mx-auto px-6">

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
                            {/* <Button onClick={() => navigate('/what-we-do')} className="!bg-[#1a1a3a] hover:!bg-brand-blue text-white px-8">
                                {home.featureSection.buttonText}
                            </Button> */}
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

                {/* Featured Story - Map & Video Player */}
                <div className="bg-[#FDFBF7] rounded-[3rem] p-8 lg:p-16 mb-24 overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        
                        {/* Map Image & Text Column */}
                        <div className="lg:col-span-6 relative">
                            <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-[#004d60] leading-tight mb-6">
                                {impact.featuredCampaign.title}
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4 text-lg font-medium">
                                {impact.featuredCampaign.description}
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                                {impact.featuredCampaign.description2}
                            </p>
                            
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform -rotate-1 hover:rotate-0 transition-all duration-500">
                                <img 
                                    src={impact.featuredCampaign.mapImage} 
                                    className="w-full h-auto object-contain bg-transparent" 
                                    alt="Mapa de Colombia" 
                                />
                            </div>
                        </div>

                        {/* Video Player & Playlist Column */}
                        <div className="lg:col-span-6">
                            <div className="bg-[#1a1a3a] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-full md:h-[500px]">
                                {/* Main Player Area */}
                                <div className="flex-grow relative bg-black flex flex-col justify-between">
                                    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                                        {impact.featuredCampaign.videoPlaylist[currentVideoIndex].url ? (
                                            <div className="w-full h-full relative">
                                                <img 
                                                    src={impact.featuredCampaign.videoPlaylist[currentVideoIndex].thumbnail}
                                                    className="w-full h-full object-cover"
                                                    alt={impact.featuredCampaign.videoPlaylist[currentVideoIndex].title}
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                                    <Play className="w-16 h-16 text-white/90 fill-current drop-shadow-2xl" />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white/50 text-center p-8">
                                                <div>
                                                    <PawPrint className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                                    <p className="text-sm font-medium">Contenido Próximamente</p>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* Overlay Controls (simplified to match image) */}
                                        <div className="absolute top-4 left-6 z-10">
                                            <span className="bg-brand-blue/80 backdrop-blur-md text-white px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase shadow-lg">
                                                {impact.featuredCampaign.videoPlaylist[currentVideoIndex].title}
                                            </span>
                                        </div>

                                        {/* Play/Pause Button Area (opens modal) */}
                                        <div className="absolute inset-0 flex items-center justify-center group cursor-pointer" onClick={() => setIsPlaying(true)}>
                                            {/* Button already rendered above for better visual feedback */}
                                        </div>
                                    </div>

                                    {/* Bottom controls removed as per user request */}
                                </div>

                                {/* Playlist Sidebar */}
                                <div className="w-full md:w-[220px] bg-[#0c0c2a] flex flex-col p-4 border-l border-white/5">
                                    <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 opacity-50 px-2">Lista de Reproducción</h4>
                                    <div className="flex-grow overflow-y-auto space-y-3 custom-scrollbar pr-1">
                                        {impact.featuredCampaign.videoPlaylist.map((video: any, idx: number) => (
                                            <div 
                                                key={video.id}
                                                onClick={() => setCurrentVideoIndex(idx)}
                                                className={`group flex items-center gap-3 p-2 rounded-xl cursor-pointer transition-all duration-300 ${
                                                    currentVideoIndex === idx 
                                                    ? 'bg-white/10 ring-1 ring-white/20' 
                                                    : 'hover:bg-white/5'
                                                }`}
                                            >
                                                <div className="relative w-16 h-10 rounded-lg overflow-hidden shrink-0 shadow-lg">
                                                    <img src={video.thumbnail} className="w-full h-full object-cover" alt={video.title} />
                                                    <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity ${currentVideoIndex === idx ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                                        <Play className="w-3 h-3 text-white fill-current" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col min-w-0">
                                                    <p className={`text-[10px] font-bold truncate ${currentVideoIndex === idx ? 'text-brand-blue' : 'text-gray-300'}`}>
                                                        {video.title}
                                                    </p>
                                                    <p className="text-[9px] text-gray-500 font-medium">
                                                        {video.duration}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <Button onClick={() => navigate('/donar')} className="!bg-[#004d60] hover:!bg-[#003d4d] !text-white !font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all px-10 py-4">
                                    ¡Dona Ahora y Ayúdanos!
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Success Stories (Blog Style) */}
                {/* <div className="mb-24">
                     <h3 className="text-3xl font-heading font-bold text-[#1a1a3a] mb-12 text-center">Historias de Éxito</h3>
                     
                     {loadingStories ? (
                         <div className="grid md:grid-cols-3 gap-8">
                             {[1, 2, 3].map(i => (
                                 <div key={i} className="bg-gray-100 rounded-[2rem] h-96 animate-pulse"></div>
                             ))}
                         </div>
                     ) : (
                        <div className="grid md:grid-cols-3 gap-8">
                            {stories.map((post) => {
                                const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url 
                                    || "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800";
                                
                                const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || "Historia";
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
                                                Leer Historia
                                            </Button>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                     )}
                </div>                 */}
                {/* Testimonials Section */}
                {impact.testimonials && (
                    <section className="py-20 bg-gray-50/50 rounded-[3rem] overflow-hidden mt-24">
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col lg:flex-row gap-12 items-center">
                                 {/* Text Column */}
                                <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#1a1a3a] mb-6">
                                        {impact.testimonials.title}
                                    </h2>
                                    <p className="text-gray-600 mb-8">
                                        {impact.testimonials.description}
                                    </p>
                                    <div className="flex gap-4">
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
                                            {impact.testimonials.items.map((item, idx) => (
                                                <div 
                                                    key={idx} 
                                                    className="w-full lg:w-1/2 flex-shrink-0 px-3"
                                                >
                                                    <div className="bg-white p-8 rounded-3xl h-full border border-gray-100 hover:shadow-xl transition-shadow relative flex flex-col">
                                                        <div className="flex gap-1 mb-4">
                                                            {[1,2,3,4,5].map(star => (
                                                                <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                                            ))}
                                                        </div>
                                                        <p className="text-gray-700 mb-6 leading-relaxed text-sm italic flex-grow">
                                                            "{item.text}"
                                                        </p>
                                                        <div className="flex items-center gap-4 mt-auto">
                                                            <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                                                            <div>
                                                                <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                                                                <p className="text-xs text-[#E98888] font-semibold">{item.role}</p>
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
                                        {impact.testimonials.items.map((_, idx) => (
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
                )}
            </div>

            {/* Video Modal */}
            {isPlaying && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in"
                    onClick={() => setIsPlaying(false)}
                >
                    <button 
                        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                        onClick={() => setIsPlaying(false)}
                    >
                        <X className="w-10 h-10" />
                    </button>
                    <div 
                        className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative"
                        onClick={e => e.stopPropagation()}
                    >
                        {impact.featuredCampaign.videoPlaylist[currentVideoIndex].url ? (
                             <video 
                                src={impact.featuredCampaign.videoPlaylist[currentVideoIndex].url}
                                className="w-full h-full"
                                controls
                                autoPlay
                             />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-white">
                                Contenido no disponible en este momento
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};