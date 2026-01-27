import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  ShieldCheck,
} from "lucide-react";
import { SITE_DATA } from "../../data";

export const Footer = () => {
  const { general } = SITE_DATA;
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Heart className="text-brand-green w-6 h-6 fill-current" />
              <span className="text-2xl font-heading font-bold">
                {general.name}
                {general.nameHighlight}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transformamos vidas a través de la compasión, la acción
              veterinaria y la educación.
            </p>
            <div className="flex gap-4">
              <a
                href={general.socials.facebook}
                className="bg-gray-800 p-2 rounded-full hover:bg-brand-blue transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={general.socials.instagram}
                className="bg-gray-800 p-2 rounded-full hover:bg-brand-blue transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={general.socials.twitter}
                className="bg-gray-800 p-2 rounded-full hover:bg-brand-blue transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  to="/what-we-do"
                  className="hover:text-brand-green transition-colors"
                >
                  Qué Hacemos
                </Link>
              </li>
              <li>
                <Link
                  to="/impact"
                  className="hover:text-brand-green transition-colors"
                >
                  Impacto
                </Link>
              </li>
              <li>
                <Link
                  to="/transparency"
                  className="hover:text-brand-green transition-colors"
                >
                  Transparencia
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand-green transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-green shrink-0" />
                <span>
                  {general.address}
                  <br />
                  {general.city}
                </span>
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
                Cumplimos con todos los estándares legales y fiscales. Tus
                donaciones son 100% seguras.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; 2024 {general.name} {general.nameHighlight}. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
