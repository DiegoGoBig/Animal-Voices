import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Heart,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
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
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> {general.phone}
          </span>
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
            href={general.socials.twitter}
            className="bg-brand-blue text-white p-1 rounded-full hover:opacity-80"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={general.socials.instagram}
            className="bg-brand-blue text-white p-1 rounded-full hover:opacity-80"
          >
            <Instagram className="w-4 h-4" />
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
