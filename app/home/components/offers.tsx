'use client';

import {
  MapPin,
  Bed,
  Bath,
  Square,
  Heart
} from 'lucide-react';


const Oferts = () => {

  const listings = [
    {
      id: 1,
      title: "Nowoczesny Apartament w Centrum",
      location: "Warszawa, Śródmieście",
      price: "4 500 zł",
      beds: 2,
      baths: 1,
      size: "54 m²",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Przytulne Studio blisko Parku",
      location: "Kraków, Krowodrza",
      price: "2 800 zł",
      beds: 1,
      baths: 1,
      size: "32 m²",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Luksusowy Loft z Widokiem",
      location: "Wrocław, Fabryczna",
      price: "5 200 zł",
      beds: 3,
      baths: 2,
      size: "85 m²",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (

    <main id="offers" className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Najnowsze Oferty</h2>
          <p className="text-gray-500 mt-2">Odkryj najlepiej oceniane mieszkania w tym tygodniu</p>
        </div>
        <button className="hidden md:block text-blue-600 font-semibold hover:underline">
          Zobacz wszystkie →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((item) => (
          <div key={item.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 transition-colors">
                <Heart size={20} />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
                  {item.price} / msc
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <MapPin size={16} className="mr-1" />
                {item.location}
              </div>
              <div className="flex justify-between items-center py-4 border-t border-gray-50">
                <div className="flex items-center gap-1.5 text-gray-600">
                  <Bed size={18} className="text-blue-500" />
                  <span className="text-sm font-medium">{item.beds} pokoje</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-600">
                  <Bath size={18} className="text-blue-500" />
                  <span className="text-sm font-medium">{item.baths} łaz.</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-600">
                  <Square size={16} className="text-blue-500" />
                  <span className="text-sm font-medium">{item.size}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};


export default Oferts;