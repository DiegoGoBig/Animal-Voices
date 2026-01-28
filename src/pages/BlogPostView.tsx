import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { wpService, WPPost } from '../services/wordpress';
import { Button, PageHeader } from '../components';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';

export const BlogPostView = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [post, setPost] = useState<WPPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) return;
            setLoading(true);
            const data = await wpService.getPostBySlug(slug);
            setPost(data);
            setLoading(false);
        };
        fetchPost();
    }, [slug]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen pt-32 pb-20 container mx-auto px-6">
                <div className="animate-pulse max-w-4xl mx-auto space-y-6">
                    <div className="h-64 bg-gray-200 rounded-3xl w-full mb-8"></div>
                    <div className="h-10 bg-gray-200 rounded-lg w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Artículo no encontrado</h1>
                <Button onClick={() => navigate('/blog')}>Volver al Blog</Button>
            </div>
        );
    }

    const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    // Remove HTML tags from title for the header prop
    const cleanTitle = post.title.rendered.replace(/<[^>]+>/g, '');
    const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || "BLOG";

    return (
        <article className="min-h-screen pb-20 bg-white">
            <PageHeader 
                title={cleanTitle}
                breadcrumb={category.toUpperCase()}
                bgImage={imageUrl}
            />

            <div className="container mx-auto px-6 max-w-4xl pt-12">
                <Button 
                    variant="outline" 
                    onClick={() => navigate('/blog')} 
                    className="mb-8 !border-none !px-0 text-gray-500 hover:text-brand-blue flex items-center gap-2"
                >
                    <ArrowLeft className="w-4 h-4" /> Volver al Blog
                </Button>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-8">
                    <span className="bg-blue-50 text-brand-blue px-3 py-1 rounded-full font-bold flex items-center gap-1">
                        <Tag className="w-3 h-3" /> {category}
                    </span>
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {formatDate(post.date)}
                    </span>
                </div>

                <div 
                    className="prose prose-lg mx-auto prose-headings:font-heading prose-headings:font-bold prose-a:text-brand-blue prose-img:rounded-3xl prose-p:text-gray-600 prose-p:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
            </div>
        </article>
    );
};
