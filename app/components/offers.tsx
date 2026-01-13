"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Offers() {
  const offers = [
    {
      id: 1,
      title: 'ORGANIC SOLUTION',
      subtitle: 'Get the skincare',
      image: '/product-1.jpg',
    },
    {
      id: 2,
      title: 'TREATMENT',
      subtitle: 'Suit their body',
      image: '/product-2.jpg',
    },
    {
      id: 3,
      title: 'EXCELLENT OFFERS',
      subtitle: 'Get that deals',
      image: '/product-3.jpg',
    },
  ];

  return (
    <section id="offers" className="bg-[#5D4B41] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16 tracking-wider"
        >
          WHAT WE OFFER
        </motion.h2>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {offers.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              {/* Circular Image */}
              <div className="relative w-[200px] h-[200px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden border-4 border-[#d4a89a] mb-6">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Title */}
              <h3 className="font-playfair text-lg md:text-xl font-bold text-white mb-2 tracking-wide">
                {offer.title}
              </h3>

              {/* Subtitle */}
              <p className="font-inter text-sm md:text-base text-[#d4a89a]">
                {offer.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}