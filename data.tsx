import React from 'react';
import { 
    Heart, Activity, Users, ShieldCheck, 
    Phone, Mail, MapPin, Facebook, Instagram, Twitter,
    BookOpen
} from 'lucide-react';

// --- Types ---
export type Page = 'home' | 'what-we-do' | 'impact' | 'transparency' | 'donate' | 'contact' | 'blog';

// --- Global Site Data ---

export const SITE_DATA = {
    general: {
        name: "Animal",
        nameHighlight: "Voices",
        phone: "+573187025480",
        email: "direccion@avoices.org",
        volunteersEmail: "voluntarios@animalvoices.org",
        address: "Bogota, Colombia",
        city: "Bogotá, Colombia",
        officeLocation: "Edificio Green",
        schedule: "Lunes a Viernes, 8am - 5pm",
        socials: {
            facebook: "https://www.facebook.com/share/182DamQ4jm/?mibextid=wwXIfr",
            tiktok: "https://www.tiktok.com/@fundacionanimalvoices",
            instagram: "https://www.instagram.com/fundacionanimalvoices?igsh=N3Jub3k1djhlNjls&utm_source=qr",
            linkedin: "https://www.linkedin.com/company/fundaci%C3%B3n-animal-voices/",
            youtube: " https://www.youtube.com/@Fundaci%C3%B3nAnimalVoices"
        }
    },
    navigation: [
        { id: 'home', label: 'Inicio' },
        { id: 'que-hacemos', label: '¿Qué hacemos?' },
        { id: 'impacto', label: 'Impacto' },
        { id: 'transparencia', label: 'Transparencia' },
        { id: 'blog', label: 'Blog' },
        // { id: 'contact', label: 'Contacto' },
    ] as { id: Page; label: string }[],
    
    home: {
        hero: {
            title: "Ayudando peluditos,",
            titleHighlight: "Construyendo",
            titleSuffix: "Comunidad",
            description: "Con cada aporte, el bienestar se vuelve acción: alimento, consultas médico-veterinarias y esterilizaciones que previenen el abandono. Únete a nuestra misión de transformar vidas hoy mismo.",
            bgImage: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=2000",
            mainImage: "http://cms.gobigagency.co/animalvoices/wp-content/uploads/sites/2/2026/02/IMG-20191113-WA0013.jpg",
            mainImage2: "http://cms.gobigagency.co/animalvoices/wp-content/uploads/sites/2/2026/02/MPS2539-copia-scaled.jpg",
            videoUrl: "https://www.youtube.com/embed/S-6u-oA2T6M?autoplay=1",
            socialProof: {
                count: "3.5K+",
                label: "Voluntarios Unidos",
                rating: 4.9,
                avatars: [1, 2, 3]
            }
        },
        commitment: {
            title: "Nuestro compromiso con los que no tienen voz",
            description: " Recorremos Colombia previniendo el sufrimiento desde la raíz y dignificando la vida de perros y gatos vulnerables.",
            rating: 4.9,
            image: "http://cms.gobigagency.co/animalvoices/wp-content/uploads/sites/2/2026/02/IMG_20200411_082510-scaled.jpg",
            cards: [
                {
                    title: "Visión",
                    text: "Construir una sociedad más humana con los que no tienen voz",
                },
                {
                    title: "Misión",
                    text: "Activamos el poder de las personas a través de la educación y la acción, para que comprendan que todos podemos salvar vidas.",
                }
            ]
        },
        featureSection: {
            title: "Más que una fundación somos un movimiento de acción",
            description: "Actuamos directamente en los territorios más vulnerables, llevando soluciones reales que mejoran la vida de los perros y gatos, y de las comunidades que los cuidan, demostrando que la transformación social empieza con acciones cotidianas.",
            features: [
                "Programas educativos de impacto social.",
                "Jornadas de esterilización en territorio.",
                "Atención veterinaria integral.",
                "Brigadas de alimento"
            ],
            buttonText: "Conoce Más",
            image1: "http://cms.gobigagency.co/animalvoices/wp-content/uploads/sites/2/2026/02/IMG_1870-scaled.jpg",
            image2: "http://cms.gobigagency.co/animalvoices/wp-content/uploads/sites/2/2026/02/Gemini_Generated_Image_2xi4wd2xi4wd2xi4.png"
        },
        testimonials: {
            title: "Voces de nuestra manada",
            description: "Nuestra labor crece gracias a quienes deciden actuar. Conoce por qué personas y marcas líderes confían en Animal Voices para construir un mundo más humano para todos.",
            buttonText: "Ver Más Historias",
            items: [
                {
                    name: "Alexander Castiblanco",
                    role: "Familia de Acogida",
                    image: "https://randomuser.me/api/portraits/men/45.jpg",
                    text: "Ver cómo transforman vidas con dedicación es inspirador. La diferencia que hacen en la comunidad es palpable y real. Un orgullo apoyarlos.",
                    rating: 5
                },
                {
                    name: "Fabian",
                    role: "Voluntario Operativo",
                    image: "https://randomuser.me/api/portraits/men/32.jpg",
                    text: "En cada rescate ponemos el alma. No hay mayor satisfacción que ver a un animalito sanar y encontrar un hogar amoroso.",
                    rating: 5
                },
                {
                    name: "Sandra Moreno",
                    role: "Donante",
                    image: "https://randomuser.me/api/portraits/women/65.jpg",
                    text: "Dono con confianza porque veo la transparencia y el amor en cada acción. Animal Voices ha devuelto la esperanza a cientos de peluditos.",
                    rating: 5
                },
                {
                    name: "Liliana Sandoval",
                    role: "Aliada Estratégica",
                    image: "https://randomuser.me/api/portraits/women/24.jpg",
                    text: "La gestión y responsabilidad que manejan es admirable. Juntos hemos logrado campañas de esterilización que cambian el futuro.",
                    rating: 5
                },
                {
                    name: "Ray Yepes",
                    role: "Colaborador",
                    image: "https://randomuser.me/api/portraits/men/86.jpg",
                    text: "Su labor va más allá del rescate; educan y crean conciencia. Es un honor sumar mi granito de arena a esta causa tan noble.",
                    rating: 5
                },
                {
                    name: "Mauricio Maestre",
                    role: "Padrino",
                    image: "https://randomuser.me/api/portraits/men/11.jpg",
                    text: "Apadrinar un caso difícil y ver su recuperación me llenó el corazón. Animal Voices hace magia con recursos limitados pero amor infinito.",
                    rating: 5
                },
                {
                    name: "Carlos",
                    role: "Adoptante",
                    image: "https://randomuser.me/api/portraits/men/53.jpg",
                    text: "Gracias a Animal Voices completamos nuestra familia. El proceso fue amoroso y nos guiaron en cada paso de la adaptación.",
                    rating: 5
                },
                {
                    name: "Angie Estupiñan Latam",
                    role: "Directora Regional",
                    image: "https://randomuser.me/api/portraits/women/42.jpg",
                    text: "Desde LATAM vemos en Animal Voices un modelo a seguir. Su impacto social y compromiso son un referente en la protección animal.",
                    rating: 5
                },
                {
                    name: "Camila Lugari",
                    role: "Veterinaria Aliada",
                    image: "https://randomuser.me/api/portraits/women/33.jpg",
                    text: "Como profesional, confirmo que siguen los más altos estándares de bienestar. La salud de los animales es siempre su prioridad número uno.",
                    rating: 5
                },
                {
                    name: "Viviana Tamayo (Gabrica)",
                    role: "Gerente Gabrica",
                    image: "https://randomuser.me/api/portraits/women/68.jpg",
                    text: "En Gabrica compartimos la pasión por las mascotas, y encontrar un aliado como Animal Voices nos impulsa a seguir trabajando por ellos.",
                    rating: 5
                }
            ]
        },
        faq: {
            title: "Preguntas Frecuentes",
            subtitle: "Resolvemos tus dudas sobre nuestra labor, donaciones, brigadas y cómo sumarte al bienestar animal.",
            items: [
                {
                    question: "¿Por qué no son refugio ni realizan adopciones?",
                    answer: (
                        <>
                            Somos una mano amiga para rescatistas, refugios y fundaciones que ya realizan una labor admirable salvando animales. Nuestro trabajo busca apoyarlos desde la prevención, ayudando a reducir la sobrepoblación que hoy los tiene desbordados y con recursos limitados.
                            <br /><br />
                            <strong className="block mb-2 font-bold">Concentramos nuestros esfuerzos en:</strong>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Brigadas de esterilización gratuita</li>
                                <li>Alimentación para perros y gatos sin hogar</li>
                                <li>Atención médico-veterinaria preventiva y de urgencia</li>
                                <li>Educación y sensibilización comunitaria</li>
                            </ul>
                            <br />
                            Este modelo nos permite llegar a muchos más animales, recorrer distintas regiones del país y generar un impacto sostenible y a largo plazo, al tiempo que contribuimos a que refugios y rescatistas no estén cada vez más saturados.
                        </>
                    )
                },
                {
                    question: "¿Emiten certificados de donación?",
                    answer: (
                        <>
                            Sí. Entregamos un certificado de donación que puede ser utilizado para efectos tributarios en Colombia, tanto por personas naturales como por empresas.
                            <br /><br />
                            De acuerdo con la legislación colombiana vigente, las donaciones realizadas a entidades sin ánimo de lucro calificadas permiten acceder a un descuento tributario del 25% del valor donado, aplicable directamente al impuesto de renta.
                            <br /><br />
                            Donar es un acto de confianza, y nuestra responsabilidad es honrarlo con claridad, impacto real y respaldo legal. Por eso, ponemos a disposición nuestros informes de gestión anuales, los cuales son entregados cada año a la Alcaldía Mayor de Bogotá, entidad que supervisa nuestra labor como fundación legalmente constituida en Colombia.
                        </>
                    )
                },
                {
                    question: "¿Las empresas o marcas pueden aliarse con la fundación?",
                    answer: (
                        <>
                            Sí. El impacto se expande cuando aunamos esfuerzos. Desde hace más de una década, sumamos manos con empresas y marcas que creen en el impacto social con propósito y desean generar un aporte real al bienestar animal y a las comunidades más vulnerables.
                            <br /><br />
                            Creamos alianzas a la medida, diseñadas según las necesidades y objetivos de cada empresa o marca. Estas pueden incluir:
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                                <li>Patrocinio de brigadas de esterilización, alimentación y atención médico-veterinaria</li>
                                <li>Apoyo a programas de educación y sensibilización comunitaria</li>
                                <li>Vinculación a proyectos de impacto social y ambiental</li>
                                <li>Patrocinio de proyectos de radio y televisión</li>
                            </ul>
                            <br />
                            Todas nuestras alianzas ofrecen visibilidad responsable de marca, asociada a causas reales, medibles y coherentes con los valores de cada aliado. Además, hacen parte de las estrategias de RSE y cuentan con respaldo legal y certificación de donación.
                        </>
                    )
                },
                {
                    question: "¿Cómo puedo apoyar si no puedo donar dinero?",
                    answer: (
                        <>
                            Hay muchas formas de sumar y todas son valiosas. Apoyar no siempre significa donar dinero, también significa poner al servicio lo que tienes, lo que sabes y a quién conoces.
                            <br /><br />
                            <strong className="block mb-2 font-bold">Puedes ayudarnos a través de:</strong>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Brigadas en comunidad:</strong> organiza una brigada con amigos, familiares o tu equipo de trabajo, donde cada persona aporte en especie (alimento) y juntos participemos en una jornada de ayuda.</li>
                                <li><strong>Difusión:</strong> compartir nuestro contenido amplifica el mensaje y nos permite llegar a más personas y territorios.</li>
                                <li><strong>Donaciones en especie:</strong> alimento, insumos veterinarios, medicamentos o elementos para nuestras brigadas.</li>
                                <li><strong>Conexión con aliados:</strong> preséntanos a personas, empresas o marcas que quieran vincularse.</li>
                                <li><strong>Donación de conocimiento:</strong> si eres contador, abogado, comunicador, diseñador u otro profesional, puedes donar tu experiencia.</li>
                            </ul>
                            <br />
                            Cada aporte cuenta. Cuando las personas se unen, el impacto se multiplica y llega mucho más lejos.
                        </>
                    )
                },
                {
                    question: "¿Cómo seleccionan las comunidades donde realizan brigadas?",
                    answer: (
                        <>
                            Es una de las labores más difíciles. En Colombia, la necesidad es enorme y las listas de espera son largas, por lo que la selección se hace con criterios claros y responsables.
                            <br /><br />
                            Las solicitudes suelen llegar a través de rescatistas, líderes comunitarios o fundaciones locales, quienes presentan un censo poblacional que evidencie la situación real del territorio. Nuestra prioridad es llevar brigadas de esterilización, porque creemos que la prevención es la herramienta más poderosa para transformar realidades.
                            <br /><br />
                            No buscamos ser asistencialistas. Nuestro enfoque es generar impacto en toda la comunidad, en coherencia con nuestra visión. Para que una brigada sea posible, es clave que la comunidad esté comprometida y organizada, que valore el esfuerzo que implica gestionar recursos y que participe activamente.
                            <br /><br />
                            Creemos en el trabajo conjunto. Las brigadas no se "entregan", se construyen entre todos, porque solo así el impacto es real, sostenible y duradero.
                        </>
                    )
                }
            ],
            supportCard: {
                title: "¿No encontraste lo que buscabas?",
                text: "Estamos aquí para ayudarte con cualquier duda específica.",
                phone: "573001234567",
                cta: "Escríbenos Ahora",
                linkText: "Chatea por WhatsApp",
                image: "http://cms.gobigagency.co/animalvoices/wp-content/uploads/sites/2/2026/02/IMG-20191113-WA0013.jpg"
            }
        },
        blog: {
            title: "Mira Nuestros Últimos Artículos",
            subtitle: "Mantente informado sobre nuestras actividades recientes.",
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
            { label: 'Toneladas de Alimento', value: '34T+', icon: <Heart className="w-6 h-6 text-brand-green" /> },
            { label: 'Atención Veterinaria', value: '12.808+', icon: <Activity className="w-6 h-6 text-brand-blue" /> }, 
            { label: 'Esterilizaciones', value: '7.901+', icon: <Users className="w-6 h-6 text-brand-accent" /> },
            { label: 'Educación', value: '1M+', icon: <ShieldCheck className="w-6 h-6 text-purple-600" /> },
        ],
        cta: {
            title: "¿Listo para hacer la diferencia?",
            text: "Tu donación asegura alimento continuo, atención médica que salva vidas y un impacto educativo sostenible.",
            buttonText: "Donar Ahora"
        }
    },

    whatWeDo: {
        title: "¿Qué hacemos?",
        subtitle: "Abordamos el bienestar animal desde cuatro frentes estratégicos para generar un impacto sostenible.",
        programs: [
            {
                title: "Programas educativos de impacto social",
                desc: "nspiramos a personas para convertirse en agentes de cambio, demostrando que ayudar no depende del dinero ni de tener una fundación.",
                image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&q=80&w=800",
                video: "https://youtu.be/I-jW6vhHbmc"
            },
            {
                title: "Jornada de esterilización en territorio",
                desc: "Implementamos esterilizaciones éticas y responsables como una solución efectiva para el control poblacional, la prevención del abandono y el maltrato animal.",
                image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800",
                video: "https://youtu.be/82wqYZIi1k0"
            },
            {
                title: "Atención veterinaria integral",
                desc: "Brindamos consultas médico-veterinarias, atención preventiva y acompañamiento profesional a perros y gatos en situación de vulnerabilidad.",
                image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
                video: "https://youtu.be/V0fKXupDx2M"
            },
            {
                title: "Brigadas de alimento",
                desc: "Llevamos alimento a perros y gatos sin hogar, brindando apoyo inmediato en territorios donde la necesidad es urgente.",
                image: "https://images.unsplash.com/photo-1544378730-8b5104b139de?auto=format&fit=crop&q=80&w=800",
                video: "https://youtu.be/gSOrFzBp0Ck"
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
            tag: "Un final feliz para Pony",
            title: "Donde la Amistad Comienza, una Huella a la Vez",
            description: "La historia de Pony te dejará sin palabras. Como él, hay miles de peluditos en Colombia que son abandonados todos los días...",
            description2: "¡Dona ahora!",
            images: [
                 "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800", // Couple
                 "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800", // Dog in shelter
                 "https://images.unsplash.com/photo-1597352358327-0402b545d169?auto=format&fit=crop&q=80&w=800" // Dog eating
            ],
            videoUrl: "https://youtu.be/iHvwBL3uflk"
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
            { icon: <Heart className="w-4 h-4" />, text: "Garantizas alimento continuo para perros y gatos en situación de vulnerabilidad." },
            { icon: <Activity className="w-4 h-4" />, text: "Permites la planificación de atención médica y cirugías que salvan vidas." },
            { icon: <ShieldCheck className="w-4 h-4" />, text: "Haces posible que nuestro impacto educativo y social sea sostenible en el tiempo." }
        ],
        image: "https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&q=80&w=800",
        otherWays: ["Transferencia Bancaria", "Donaciones en Especie"]
    },

    contact: {
        title: "Contáctanos",
        subtitle: "¿Tienes preguntas o quieres ser voluntario? Escríbenos.",
        formSubjects: ["Quiero ser voluntario", "Información sobre donaciones", "Reportar un caso", "Otro"]
    }
};
