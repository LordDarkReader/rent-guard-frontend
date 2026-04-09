'use client';

import { useState } from "react";
import { MapPin, Search, Send } from "lucide-react";

const SearchBar = () => {
    const [city, setCity] = useState("Wszystkie miasta");

    // Funkcja dla endpointu POST
    const handlePost = async () => {
        try {
            const response = await fetch('http://localhost:8080/test', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.accessToken}`,
                },
                body: JSON.stringify({ city: city }),
            });
            const data = await response.json();
            console.log("Odpowiedź POST:", data);
        } catch (error) {
            console.error("Błąd POST:", error);
        }
    };

    // Funkcja dla endpointu GET
    const handleGet = async () => {
        try {
            const response = await fetch('http://localhost:8080/test2',{
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.accessToken}`,
                },
            });
            const data = await response.json();
            console.log("Odpowiedź GET:", data);
        } catch (error) {
            console.error("Błąd GET:", error);
        }
    };

    return (
        <div className="bg-white p-2 md:p-4 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 w-full px-4 py-2 md:py-0 border-b md:border-b-0 md:border-r border-gray-100">
                <MapPin className="text-gray-400" size={20} />
                <select 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full outline-none text-gray-700 bg-transparent cursor-pointer"
                >
                    <option value="Wszystkie miasta">Wszystkie miasta</option>
                    <option value="Warszawa">Warszawa</option>
                    <option value="Kraków">Kraków</option>
                    <option value="Wrocław">Wrocław</option>
                </select>
            </div>

            <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                {/* Przycisk POST */}
                <button 
                    onClick={handlePost}
                    className="flex items-center justify-center gap-2 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl md:rounded-full font-bold transition-all whitespace-nowrap"
                >
                    <Search size={18} />
                    Szukaj ofert
                </button>

                {/* Dodatkowy przycisk GET */}
                <button 
                    onClick={handleGet}
                    className="flex items-center justify-center gap-2 w-full md:w-auto bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-4 rounded-xl md:rounded-full font-semibold transition-all whitespace-nowrap"
                >
                    <Send size={18} />
                    Pobierz dane (GET)
                </button>
            </div>
        </div>
    );
}

export default SearchBar;