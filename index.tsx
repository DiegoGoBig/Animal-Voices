import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import { Page } from './data';
import { Navbar, Footer, Button } from './components';

// Import Views
import { HomeView } from './HomeView';
import { WhatWeDoView } from './WhatWeDoView';
import { ImpactView } from './ImpactView';
import { TransparencyView } from './TransparencyView';
import { DonateView } from './DonateView';
import { ContactView } from './ContactView';

// --- Main App ---

const App = () => {
    const [page, setPage] = useState<Page>('home');

    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    return (
        <div className="min-h-screen font-sans text-gray-800 bg-white">
            <Navbar activePage={page} setPage={setPage} />
            
            <main>
                {page === 'home' && <HomeView setPage={setPage} />}
                {page === 'what-we-do' && <WhatWeDoView setPage={setPage} />}
                {page === 'impact' && <ImpactView setPage={setPage} />}
                {page === 'transparency' && <TransparencyView />}
                {page === 'donate' && <DonateView />}
                {page === 'contact' && <ContactView />}
            </main>

            <Footer setPage={setPage} />
            
            {/* Sticky Mobile Donate Button */}
            {page !== 'donate' && (
                <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200 md:hidden z-40">
                    <Button variant="donate" onClick={() => setPage('donate')} className="w-full justify-center shadow-none">
                        Donar Ahora
                    </Button>
                </div>
            )}
        </div>
    );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);