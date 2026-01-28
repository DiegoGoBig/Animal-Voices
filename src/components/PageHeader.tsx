import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint } from 'lucide-react';

interface PageHeaderProps {
    title: string;
    breadcrumb: string;
    bgImage?: string;
}

export const PageHeader = ({ 
    title, 
    breadcrumb, 
    bgImage = "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=1920" 
}: PageHeaderProps) => {
    return (
        <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src={bgImage} 
                    alt={title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#004d60]/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 mt-16">
                <PawPrint className="w-12 h-12 text-[#ff9f66] mb-6 animate-bounce-slow" />
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 drop-shadow-lg">
                    {title}
                </h1>
                
                <div className="flex items-center gap-2 text-white/90 text-sm font-bold tracking-widest uppercase">
                    <Link to="/" className="hover:text-[#ff9f66] transition-colors">HOME</Link>
                    <span className="text-[#ff9f66] mx-2">&gt;</span>
                    <span>{breadcrumb}</span>
                </div>
            </div>
        </div>
    );
};
