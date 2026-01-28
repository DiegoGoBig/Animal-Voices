import React, { useEffect } from 'react';
import './src/index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import { Navbar, Footer, Button } from './src/components';

// Import Views
import { HomeView } from './src/pages/HomeView';
import { WhatWeDoView } from './src/pages/WhatWeDoView';
import { ImpactView } from './src/pages/ImpactView';
import { TransparencyView } from './src/pages/TransparencyView';
import { DonateView } from './src/pages/DonateView';
import { ContactView } from './src/pages/ContactView';
import { DynamicPageView } from './src/pages/DynamicPageView';
import { BlogView } from './src/pages/BlogView';
import { BlogPostView } from './src/pages/BlogPostView';

// Scroll to top component
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen font-sans text-gray-800 bg-white">
            <ScrollToTop />
            <Navbar />
            
            <main>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/que-hacemos" element={<WhatWeDoView />} />
                    <Route path="/impacto" element={<ImpactView />} />
                    <Route path="/transparencia" element={<TransparencyView />} />
                    <Route path="/donar" element={<DonateView />} />
                    <Route path="/contacto" element={<ContactView />} />
                    <Route path="/blog" element={<BlogView />} />
                    <Route path="/blog/:slug" element={<BlogPostView />} />
                    <Route path="/:slug" element={<DynamicPageView />} />
                </Routes>
            </main>

            <Footer />
            
            {/* Sticky Mobile Donate Button */}
            {location.pathname !== '/donar' && (
                <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200 md:hidden z-40">
                    <Button variant="donate" onClick={() => navigate('/donar')} className="w-full justify-center shadow-none">
                        Donar Ahora
                    </Button>
                </div>
            )}
        </div>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);