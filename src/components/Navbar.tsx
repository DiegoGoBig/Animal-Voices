import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Heart,
  Menu,
  X,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,  
} from "lucide-react";

// Lucide doesn't export Tiktok, so we define it locally
const Tiktok = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);
import { SITE_DATA } from "../../data";
import { Button } from "./Button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { general, navigation } = SITE_DATA;
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPath = (id: string) => (id === 'home' ? '/' : `/${id}`);

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar Info - Visible on Desktop */}
      <div
        className={`bg-gray-100 text-gray-600 text-sm py-2 px-6 hidden lg:flex justify-between items-center transition-all ${scrolled ? "h-0 overflow-hidden py-0" : "h-auto"}`}
      >
        <div className="flex gap-6">
          <a 
            href={`https://wa.me/${general.phone.replace(/\D/g,'')}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-brand-green transition-colors"
            title="Contáctanos por WhatsApp"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-4 h-4 fill-current" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </a>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> {general.email}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> {general.city}
          </span>
        </div>
        <div className="flex gap-3">
          <a
            href={general.socials.facebook}
            className="bg-brand-blue text-white p-1 rounded-full hover:opacity-80"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href={general.socials.tiktok}
            className="bg-brand-blue text-white p-1 rounded-full hover:opacity-80"
          >
            <Tiktok className="w-4 h-4" />
          </a>
          <a
            href={general.socials.instagram}
            className="bg-brand-blue text-white p-1 rounded-full hover:opacity-80"
          >            
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={general.socials.linkedin}
            className="bg-brand-blue text-white p-1 rounded-full hover:opacity-80"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={general.socials.youtube}
            className="bg-brand-blue text-white p-1 rounded-full hover:opacity-80"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-white/80 backdrop-blur-md py-4"}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="bg-brand-blue p-2 rounded-lg">
              <Heart className="text-white w-6 h-6 fill-current" />
            </div>
            <span className="text-2xl font-heading font-bold text-gray-900">
              {general.name}
              <span className="text-brand-green">{general.nameHighlight}</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((link) => (
              <NavLink
                key={link.id}
                to={getPath(link.id)}
                className={({ isActive }) => `font-medium transition-colors ${
                  isActive
                    ? "text-brand-green font-bold"
                    : "text-gray-600 hover:text-brand-green"
                }`}
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              variant="outline"
              onClick={() => navigate("/contacto")}
              className="!py-2 !px-6 text-sm border-gray-300 text-gray-700 hover:border-brand-blue hover:text-white hover:bg-brand-blue rounded-full"
            >
              Contáctanos
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 lg:hidden flex flex-col p-6 gap-4">
            {navigation.map((link) => (
              <NavLink
                key={link.id}
                to={getPath(link.id)}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `text-left text-lg font-medium ${isActive ? "text-brand-green" : "text-gray-700"}`}
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              variant="donate"
              onClick={() => {
                navigate("/donate");
                setIsMenuOpen(false);
              }}
              className="w-full justify-center"
            >
              Donar Ahora
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
