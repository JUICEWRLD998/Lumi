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
    <section className="bg-[#F1DECD]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-5 md:space-y-6 order-2 md:order-1">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#3a2a1a] leading-tight">
              HOME BASED
              <br />
              ORGANIC SKIN CARE
            </h1>
            
            <p className="font-inter text-sm md:text-base text-[#5a4a3a] max-w-md leading-relaxed">
              Bringing you a range of high-quality skin care made from 100% organic
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md pt-2">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-2.5 rounded-full bg-white text-[#5a4a3a] placeholder-[#9a8a7a] text-sm focus:outline-none focus:ring-2 focus:ring-[#d4a89a]"
                required
              />
              <button
                type="submit"
                className="px-7 py-2.5 rounded-full bg-[#5a4a3a] text-white text-sm font-medium hover:bg-[#8a6a4a] transition-colors"
              >
                Get Noticed
              </button>
            </form>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] md:h-[450px] lg:h-[500px] w-full order-1 md:order-2">
            <Image
              src="/skincare.png"
              alt="Woman with beautiful skin"
              fill
              className="object-cover object-center rounded-[40%] md:rounded-none md:object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
