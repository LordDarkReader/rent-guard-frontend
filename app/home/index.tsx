'use client';

import Navbar from './components/navbar';
import Hero from "@/app/home/components/hero";
import Footer from './components/footer';
import Offers from './components/offers';
import AuthButton from "@/app/home/components/authButton";


export const HomeView = () => {


  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navigation Bar */}
      <Navbar />
      {/*<AuthButton />*/}
      {/* Hero Section */}
      <Hero />

      {/* Featured Listings */}
      <Offers />

      {/* Simple Footer */}
      <Footer />
    </div>
  );
}