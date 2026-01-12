'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
  };

  return (
    <section className="bg-[#F1DECD] min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#3a2a1a] leading-tight">
              HOME BASED
              <br />
              ORGANIC SKIN CARE
            </h1>
            
            <p className="font-inter text-base md:text-lg text-[#5a4a3a] max-w-md">
              Bringing you a range of high-quality skin care made from 100% organic
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm text-[#5a4a3a] placeholder-[#9a8a7a] focus:outline-none focus:ring-2 focus:ring-[#d4a89a] border border-[#e0c9b5]"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-[#d4a89a] text-white font-medium hover:bg-[#c49888] transition-colors shadow-md"
              >
                Get Noticed
              </button>
            </form>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/skincare.png"
              alt="Woman with beautiful skin"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
