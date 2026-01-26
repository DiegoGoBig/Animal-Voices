import React, { useState, useEffect } from 'react';
import { 
    Heart, Menu, X, Phone, Mail, MapPin, 
    Facebook, Instagram, Twitter, ShieldCheck
} from 'lucide-react';
import { Page, SITE_DATA } from './data';

// --- Button Component ---
export const Button = ({ children, variant = 'primary', className = '', onClick }: any) => {
    const baseStyle = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2";
    const variants = {
        primary: "bg-brand-blue text-white hover:bg-brand-darkBlue shadow-lg hover:shadow-brand-blue/30",
        donate: "bg-brand-green text-white hover:bg-green-700 shadow-lg hover:shadow-brand-green/30 text-lg",
        outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/5",
        ghost: "text-gray-600 hover:text-brand-blue hover:bg-gray-100",
        white: "bg-white text-brand-blue hover:bg-gray-100 shadow-lg",
        salmon: "bg-[#E98888] text-white hover:bg-[#D67777] shadow-lg shadow-[#E98888]/30" 
    };
    return (
        <button className={`${baseStyle} ${variants[variant as keyof typeof variants] || variants.primary} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

// --- Section Heading Component ---
export const SectionHeading = ({ title, subtitle, centered = true }: any) => (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        <div className={`h-1 w-20 bg-brand-green mt-4 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
    </div>
);

// --- Navbar Component ---
export const Navbar = ({ activePage, setPage }: { activePage: Page, setPage: (p: Page) => void }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { general, navigation } = SITE_DATA;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed w-full z-50">
            {/* Top Bar Info - Visible on Desktop */}
            <div className={`bg-gray-100 text-gray-600 text-sm py-2 px-6 hidden lg:flex justify-between items-center transition-all ${scrolled ? 'h-0 overflow-hidden py-0' : 'h-auto'}`}>
                <div className="flex gap-6">
                    <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> {general.phone}</span>
                    <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> {general.email}</span>
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {general.city}</span>
                </div>
                <div className="flex gap-3">
                    <a href={general.socials.facebook} className="bg-brand-blue text-white p-1 rounded-full hover:opacity-80"><Facebook className="w-4 h-4" /></a>
                    <a href={general.socials.twitter} className="bg-brand-blue text-white p-1 rounded-full hover:opacity-80"><Twitter className="w-4 h-4" /></a>
                    <a href={general.socials.instagram} className="bg-brand-blue text-white p-1 rounded-full hover:opacity-80"><Instagram className="w-4 h-4" /></a>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/80 backdrop-blur-md py-4'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
                        <div className="bg-brand-blue p-2 rounded-lg">
                            <Heart className="text-white w-6 h-6 fill-current" />
                        </div>
                        <span className="text-2xl font-heading font-bold text-gray-900">
                            {general.name}<span className="text-brand-green">{general.nameHighlight}</span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navigation.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => setPage(link.id)}
                                className={`font-medium transition-colors ${
                                    activePage === link.id 
                                        ? 'text-brand-green font-bold' 
                                        : 'text-gray-600 hover:text-brand-blue'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <Button variant="outline" onClick={() => setPage('contact')} className="!py-2 !px-6 text-sm border-gray-300 text-gray-700 hover:border-brand-blue hover:text-white hover:bg-brand-blue rounded-full">
                            Contáctanos
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="lg:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 lg:hidden flex flex-col p-6 gap-4">
                        {navigation.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => { setPage(link.id); setIsMenuOpen(false); }}
                                className={`text-left text-lg font-medium ${activePage === link.id ? 'text-brand-green' : 'text-gray-700'}`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <Button variant="donate" onClick={() => { setPage('donate'); setIsMenuOpen(false); }} className="w-full justify-center">
                            Donar Ahora
                        </Button>
                    </div>
                )}
            </nav>
        </header>
    );
};

// --- Footer Component ---
export const Footer = ({ setPage }: { setPage: (p: Page) => void }) => {
    const { general } = SITE_DATA;
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Heart className="text-brand-green w-6 h-6 fill-current" />
                            <span className="text-2xl font-heading font-bold">{general.name}{general.nameHighlight}</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Transformamos vidas a través de la compasión, la acción veterinaria y la educación.
                        </p>
                        <div className="flex gap-4">
                            <a href={general.socials.facebook} className="bg-gray-800 p-2 rounded-full hover:bg-brand-blue transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href={general.socials.instagram} className="bg-gray-800 p-2 rounded-full hover:bg-brand-blue transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href={general.socials.twitter} className="bg-gray-800 p-2 rounded-full hover:bg-brand-blue transition-colors"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-6">Enlaces Rápidos</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><button onClick={() => setPage('what-we-do')} className="hover:text-brand-green transition-colors">Qué Hacemos</button></li>
                            <li><button onClick={() => setPage('impact')} className="hover:text-brand-green transition-colors">Impacto</button></li>
                            <li><button onClick={() => setPage('transparency')} className="hover:text-brand-green transition-colors">Transparencia</button></li>
                            <li><button onClick={() => setPage('contact')} className="hover:text-brand-green transition-colors">Contacto</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contacto</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-brand-green shrink-0" />
                                <span>{general.address}<br/>{general.city}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-brand-green shrink-0" />
                                <span>{general.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-brand-green shrink-0" />
                                <span>{general.email}</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-6">Transparencia</h3>
                        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                            <div className="flex items-center gap-3 mb-2">
                                <ShieldCheck className="text-brand-green w-8 h-8" />
                                <span className="font-bold">ONG Verificada</span>
                            </div>
                            <p className="text-xs text-gray-400">
                                Cumplimos con todos los estándares legales y fiscales. Tus donaciones son 100% seguras.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; 2024 {general.name} {general.nameHighlight}. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
