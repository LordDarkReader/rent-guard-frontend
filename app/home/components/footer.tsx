'use client';

import { Home } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <Home className="text-blue-500" size={24} />
                    <span className="text-xl font-bold">RentGuard</span>
                </div>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Twój zaufany partner w poszukiwaniu idealnego miejsca do życia od 2010 roku.
                </p>
                <div className="flex justify-center space-x-6 text-sm text-gray-500">
                    <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
                    <a href="#" className="hover:text-white transition-colors">Regulamin</a>
                    <a href="#" className="hover:text-white transition-colors">Pomoc</a>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-xs">
                    © 2026 RentGuard Sp. z o.o. Wszystkie prawa zastrzeżone.
                </div>
            </div>
        </footer>
    );
};


export default Footer;