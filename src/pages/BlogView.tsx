import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Button, PageHeader } from '../components';
import { SITE_DATA } from '../../data';
import { wpService, WPPost } from '../services/wordpress';

export const BlogView = () => {
    const navigate = useNavigate();
    const { home } = SITE_DATA;
    const [posts, setPosts] = useState<WPPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await wpService.getPosts(100);
            setPosts(data);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="pb-20 bg-white">
            <PageHeader 
                title="Noticias y Blog" 
                breadcrumb="BLOG"
                bgImage="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1920"
            />
            
            <div className="pt-20 container mx-auto px-6">
                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-white rounded-3xl h-[400px] animate-pulse shadow-sm"></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => {
                            const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url 
                                || "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800";
                            
                            // Get first category
                            const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || "General";
                            
                            // Strip HTML tags from excerpt
                            const plainExcerpt = post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 120) + '...';

                            return (
                                <article 
                                    key={post.id} 
                                    className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                                >
                                    {/* Image Wrapper */}
                                    <div className="h-56 overflow-hidden relative">
                                        <img 
                                            src={imageUrl} 
                                            alt={post.title.rendered} 
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-blue flex items-center gap-1 shadow-sm">
                                            <Tag className="w-3 h-3" />
                                            {category}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                                            <Calendar className="w-3 h-3" />
                                            {formatDate(post.date)}
                                        </div>

                                        <h3 
                                            className="text-xl font-bold text-[#1a1a3a] mb-3 leading-tight font-heading group-hover:text-brand-blue transition-colors"
                                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                        />
                                        
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                            {plainExcerpt}
                                        </p>

                                        <Button 
                                            variant="outline" 
                                            className="w-full justify-center !text-sm hover:bg-brand-blue hover:text-white"
                                            // TODO: Add link to single post view if needed, for now maybe just anchor or modal
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
            </div>
        </div>
    );
};
