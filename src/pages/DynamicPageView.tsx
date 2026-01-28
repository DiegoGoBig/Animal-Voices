import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { wpService, WPPage } from '../services/wordpress';
import { SectionHeading } from '../components';

export const DynamicPageView = () => {
    const { slug } = useParams<{ slug: string }>();
    const [page, setPage] = useState<WPPage | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPage = async () => {
            if (!slug) return;
            setLoading(true);
            const data = await wpService.getPageBySlug(slug);
            setPage(data);
            setLoading(false);
        };
        fetchPage();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen pt-32 pb-20 container mx-auto px-6">
                <div className="animate-pulse space-y-6">
                    <div className="h-10 bg-gray-200 rounded-lg w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
            </div>
        );
    }

    if (!page) {
        return (
            <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Página no encontrada</h1>
                <p className="text-gray-600">Lo sentimos, no pudimos encontrar el contenido que buscas.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 bg-white">
            <div className="container mx-auto px-6">
                <SectionHeading 
                    title={page.title.rendered} 
                    subtitle=""
                />
                
                <div 
                    className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-brand-blue prose-img:rounded-3xl"
                    dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                />
            </div>
        </div>
    );
};
