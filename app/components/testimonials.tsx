"use client";

import { motion } from "framer-motion";

// Review data
const reviews = [
  {
    quote:
      "The results are absolutely incredible. Every application feels like a celebration of glowing, radiant skin.",
    author: "Sarah Chen",
    role: "Skincare Enthusiast",
    avatar: "/testimonials-1.jpg",
    rating: 5,
  },
  {
    quote:
      "This moisturizer has become my go-to product. The hydration is phenomenal and my skin feels refreshed every single day.",
    author: "Marcus Chloe",
    role: "Beauty Expert",
    avatar: "/testimonials-2.jpg",
    rating: 4,
  },
  {
    quote:
      "I've tried every skincare brand in the area, and this one is hands down the best. Worth every purchase.",
    author: "Emily Rodriguez",
    role: "Dermatology Student",
    avatar: "/testimonials-3.jpg",
    rating: 5,
  },
  {
    quote:
      "From the cleanser to the serum, everything in this collection is crafted with care and bursting with natural ingredients.",
    author: "David Angela",
    role: "Wellness Consultant",
    avatar: "/testimonials-4.jpg",
    rating: 5,
  }
  
];

export default function Testimonials() {
  return (
    <section id="#testimonials" className="py-20 bg-[#5D4B41] overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffffff] relative inline-block">
            Testimonials
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
            >
              <path
                d="M2 8C50 2 150 2 198 8"
                stroke="#F1DECD"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            What Our Customers Say
          </h3>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-white text-lg sm:text-xl text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join thousands of satisfied customers who love our products!
        </motion.p>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-[#F1DECD] border border-white/20 transition-all duration-300"
            >
              {/* Stars */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.2 }}
                className="flex gap-1 mb-4"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 + 0.3 + i * 0.05 }}
                    className={`text-lg ${i < review.rating ? "text-yellow-400" : "text-white/30"}`}
                  >
                    ★
                  </motion.span>
                ))}
              </motion.div>

              {/* Quote */}
              <p className="text-brown text-base sm:text-lg leading-relaxed mb-6 italic">
                &ldquo;{review.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="w-12 h-12 rounded-full overflow-hidden border-2 border-brown"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <p className="font-bold text-brown">{review.author}</p>
                  <p className="text-sm text-brown/70">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
