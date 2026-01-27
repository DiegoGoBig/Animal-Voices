import React from 'react';
import { 
    Heart, Activity, Users, ShieldCheck, 
    Phone, Mail, MapPin, Facebook, Instagram, Twitter,
    BookOpen
} from 'lucide-react';

// --- Types ---
export type Page = 'home' | 'what-we-do' | 'impact' | 'transparency' | 'donate' | 'contact';

// --- Global Site Data ---

export const SITE_DATA = {
    general: {
        name: "Animal",
        nameHighlight: "Voices",
        phone: "(+57) 300 123 4567",
        email: "hola@animalvoices.org",
        volunteersEmail: "voluntarios@animalvoices.org",
        address: "Calle 123 #45-67",
        city: "Bogotá, Colombia",
        officeLocation: "Edificio Green",
        schedule: "Lunes a Viernes, 8am - 5pm",
        socials: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    },
    navigation: [
        { id: 'home', label: 'Inicio' },
        { id: 'que-hacemos', label: 'Qué Hacemos' },
        { id: 'impacto', label: 'Impacto' },
        { id: 'transparencia', label: 'Transparencia' },
        // { id: 'contact', label: 'Contacto' },
    ] as { id: Page; label: string }[],
    
    home: {
        hero: {
            title: "Helping Animals,",
            titleHighlight: "Building",
            titleSuffix: "Community",
            description: "Cada aporte nos permite rescatar, rehabilitar y dar un hogar a animales vulnerables. Únete a nuestra misión de transformar vidas hoy mismo.",
            bgImage: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=2000",
            mainImage: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=1000&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/S-6u-oA2T6M?autoplay=1",
            socialProof: {
                count: "3.5K+",
                label: "Voluntarios Unidos",
                rating: 4.9,
                avatars: [1, 2, 3]
            }
        },
        commitment: {
            title: "Nuestro Compromiso con el Bienestar Animal",
            description: "Nos dedicamos a crear un entorno seguro y amoroso para cada animal rescatado, asegurando su recuperación física y emocional antes de encontrar su hogar definitivo.",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=800",
            cards: [
                {
                    title: "Visión",
                    text: "Un mundo donde cada animal sea tratado con respeto y compasión.",
                },
                {
                    title: "Misión",
                    text: "Rescatar, rehabilitar y reubicar animales en situación de riesgo.",
                }
            ]
        },
        featureSection: {
            title: "Somos el Mejor Refugio de la Ciudad",
            description: "Nuestro compromiso va más allá del rescate. Brindamos atención médica integral, rehabilitación conductual y amor incondicional a cada animal que cruza nuestras puertas.",
            features: [
                "Atención veterinaria integral y especializada.",
                "Programas de rehabilitación física y emocional.",
                "Adopciones responsables con seguimiento continuo."
            ],
            buttonText: "Conoce Más",
            image1: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&q=80&w=800",
            image2: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800"
        },
        testimonials: {
            title: "Lo que dicen de Animal Voices",
            description: "Historias reales de quienes han abierto su corazón y su hogar.",
            buttonText: "Ver Más Historias",
            items: [
                {
                    name: "Andrea Ruiz",
                    role: "Adoptante",
                    image: "https://randomuser.me/api/portraits/women/44.jpg",
                    text: "Adoptar a Luna fue la mejor decisión. El equipo me acompañó en todo el proceso de adaptación.",
                    rating: 5
                },
                {
                    name: "Carlos Méndez",
                    role: "Voluntario",
                    image: "https://randomuser.me/api/portraits/men/32.jpg",
                    text: "Ser parte de esta familia me ha cambiado la vida. Ver la recuperación de los animales es impagable.",
                    rating: 5
                }
            ]
        },
        faq: {
            title: "Preguntas Frecuentes",
            subtitle: "Resolvemos tus dudas sobre adopción, donaciones y voluntariado.",
            items: [
                {
                    question: "¿Cómo puedo adoptar una mascota?",
                    answer: "El proceso inicia llenando el formulario en línea. Luego agendamos una entrevista y una visita domiciliaria para asegurar el mejor hogar para nuestros peludos."
                },
                {
                    question: "¿Cómo puedo cambiar mi plan de donación?",
                    answer: "Puedes modificar, pausar o cancelar tu donación recurrente en cualquier momento contactando a nuestro equipo de soporte o desde tu perfil de donante."
                },
                {
                    question: "¿Reciben donaciones en especie?",
                    answer: "¡Sí! Recibimos alimento sellado, medicinas no vencidas, cobijas y juguetes en buen estado en nuestra sede principal."
                }
            ],
            supportCard: {
                title: "¿No encontraste lo que buscabas?",
                text: "Estamos aquí para ayudarte con cualquier duda específica.",
                phone: "+57 300 123 4567",
                cta: "Llámanos Ahora",
                linkText: "Iniciar Chat",
                image: "https://images.unsplash.com/photo-1551730459-92db2a308f6a?auto=format&fit=crop&q=80&w=800"
            }
        },
        blog: {
            title: "Mira Nuestros Últimos Artículos",
            subtitle: "Mantente informado sobre nuestras actividades, consejos de cuidado y rescates recientes.",
            articles: [
                {
                    title: "Detrás de Escena: La Vida Diaria de los Rescatistas",
                    excerpt: "Descubre el arduo trabajo y la dedicación que se requiere para mantener nuestro refugio funcionando día a día.",
                    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800",
                },
                {
                    title: "Ansiedad por Separación: Consejos para un Perro Calmado",
                    excerpt: "Aprende técnicas efectivas para ayudar a tu mascota a sentirse segura cuando tienes que salir de casa.",
                    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800",
                },
                {
                    title: "Historias de Voluntarios y los Animales que Aman",
                    excerpt: "Conoce a las personas increíbles que donan su tiempo para transformar la vida de nuestros peludos.",
                    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=800",
                }
            ]
        },
        mission: {
            title: "Nuestra Misión",
            text: (
                <>
                    En <span className="font-bold text-brand-blue">Animal Voices</span> protegemos a quienes no tienen voz. 
                    Trabajamos incansablemente para erradicar el maltrato animal a través de programas de salud, 
                    alimentación y educación, garantizando transparencia total en cada paso.
                </>
            ),
            cards: [
                { icon: <Heart className="w-8 h-8" />, title: "Rescatar" },
                { icon: <Activity className="w-8 h-8" />, title: "Rehabilitar" },
                { icon: <Users className="w-8 h-8" />, title: "Educar" },
            ]
        },
        impactStats: [
            { label: 'Rescates Exitosos', value: '500+', icon: <Heart className="w-6 h-6 text-brand-green" /> },
            { label: 'Esterilizaciones', value: '1.2K+', icon: <Activity className="w-6 h-6 text-brand-blue" /> }, 
            { label: 'Kilos de Alimento', value: '3T+', icon: <Users className="w-6 h-6 text-brand-accent" /> },
            { label: 'Voluntarios Activos', value: '150+', icon: <ShieldCheck className="w-6 h-6 text-purple-600" /> },
        ],
        cta: {
            title: "¿Listo para hacer la diferencia?",
            text: "Tu donación mensual asegura alimento y medicina para más de 300 animales.",
            buttonText: "Donar Ahora"
        }
    },

    whatWeDo: {
        title: "Qué Hacemos",
        subtitle: "Abordamos el bienestar animal desde cuatro frentes estratégicos para generar un impacto sostenible.",
        programs: [
            {
                title: "Salud Animal Integral",
                desc: "Clínica móvil y atención veterinaria para animales en situación de calle y familias de bajos recursos.",
                image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Esterilización Masiva",
                desc: "La única solución ética a la sobrepoblación. Realizamos jornadas mensuales en zonas vulnerables.",
                image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Banco de Alimentos",
                desc: "Recolectamos y distribuimos alimento balanceado a refugios aliados y comunitarios.",
                image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Educación Comunitaria",
                desc: "Talleres en escuelas y barrios para fomentar la tenencia responsable y la empatía.",
                image: "https://images.unsplash.com/photo-1544378730-8b5104b139de?auto=format&fit=crop&q=80&w=800"
            }
        ],
        volunteer: {
            title: "¿Quieres donar tu tiempo?",
            text: "Buscamos voluntarios apasionados para nuestras jornadas de salud y eventos de adopción.",
            buttonText: "Únete como Voluntario"
        }
    },

    impact: {
        title: "Nuestro Impacto",
        subtitle: "Detrás de cada cifra hay una vida salvada. Estos son los rostros de la esperanza.",
        featuredCampaign: {
            tag: "Campaña de Adopción",
            title: "Donde la Amistad Comienza, una Huella a la Vez",
            description: "Desde espacios cómodos hasta atención personalizada, nos esforzamos por satisfacer las necesidades únicas de cada huésped peludo.",
            description2: "Nuestro compromiso con la excelencia va más allá del cuidado básico para enriquecer experiencias que promueven el bienestar físico, mental y emocional.",
            images: [
                 "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800", // Couple
                 "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800", // Dog in shelter
                 "https://images.unsplash.com/photo-1597352358327-0402b545d169?auto=format&fit=crop&q=80&w=800" // Dog eating
            ],
            videoUrl: "https://www.youtube.com/embed/S-6u-oA2T6M?autoplay=1"
        },
        successStories: [
            {
                title: "El Milagro de Toby",
                excerpt: "Llegó con pocas probabilidades de sobrevivir, pero el amor de su nueva familia lo curó por completo.",
                image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=800",
            },
            {
                title: "Max y su Nueva Misión",
                excerpt: "De ser un perro reactivo a convertirse en un perro de terapia para niños con autismo.",
                image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&q=80&w=800",
            },
            {
                title: "Tres Gatitos, Un Destino",
                excerpt: "Encontrados en una caja bajo la lluvia, hoy estos hermanos viven juntos y felices en su hogar definitivo.",
                image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?auto=format&fit=crop&q=80&w=800",
            }
        ],
        storiesTitle: "Antes y Después",
        stories: [
            {
                name: "Pony",
                title: "De la calle a un hogar lleno de amor",
                desc: "Pony fue encontrado con desnutrición severa. Hoy es el rey de la casa.",
                imageBefore: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800",
                imageAfter: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800",
                badge: "Adoptado"
            },
            {
                name: "Luna",
                title: "Una segunda oportunidad",
                desc: "Tras sufrir un accidente, Luna recibió cirugía y rehabilitación completa.",
                imageBefore: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=800",
                imageAfter: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800",
                badge: "En Hogar de Paso"
            }
        ]
    },

    transparency: {
        title: "Transparencia",
        subtitle: "La confianza es nuestro activo más valioso. Rendimos cuentas claras sobre cada peso recibido.",
        funds: [
            { label: "Programas de Salud y Alimento", pct: "75%", color: "bg-brand-green" },
            { label: "Operaciones y Logística", pct: "15%", color: "bg-brand-blue" },
            { label: "Administración y Recaudación", pct: "10%", color: "bg-brand-accent" }
        ],
        efficiency: {
            title: "Compromiso de Eficiencia",
            text: "Por cada $100 donados, $75 van directamente a los animales. Mantenemos nuestros costos administrativos al mínimo gracias al apoyo de voluntarios y pro-bono partners."
        },
        reports: [
            { year: 2023, name: "Informe Anual de Gestión", size: "2.4 MB", icon: <BookOpen className="w-6 h-6" /> },
            { year: 2023, name: "Certificado de Donaciones", size: "1.1 MB", icon: <BookOpen className="w-6 h-6" /> },
            { year: 2022, name: "Reporte de Impacto Financiero", size: "3.5 MB", icon: <BookOpen className="w-6 h-6" /> },
        ]
    },

    donate: {
        title: "Haz parte del cambio",
        subtitle: "Tu aporte seguro y transparente salva vidas hoy.",
        reasons: [
            { icon: <Heart className="w-4 h-4" />, text: "Garantizas alimento continuo." },
            { icon: <Activity className="w-4 h-4" />, text: "Permites planificar cirugías complejas." },
            { icon: <ShieldCheck className="w-4 h-4" />, text: "Sostenibilidad a largo plazo." }
        ],
        image: "https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&q=80&w=800",
        otherWays: ["Transferencia Bancaria", "Donaciones en Especie", "Legados Solidarios"]
    },

    contact: {
        title: "Contáctanos",
        subtitle: "¿Tienes preguntas o quieres ser voluntario? Escríbenos.",
        formSubjects: ["Quiero ser voluntario", "Información sobre donaciones", "Reportar un caso", "Otro"]
    }
};
