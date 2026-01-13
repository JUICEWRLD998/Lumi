"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Calendar } from "lucide-react";



const blogPosts = [
  {
    id: "1",
    title: "The Science Behind Hydration: How to Lock in Moisture",
    date: "Jan 10, 2026",
    comments: 12,
    description: "Discover the secrets to deeply hydrated skin. Learn about hyaluronic acid, ceramides, and the best practices for maintaining your skin's natural moisture barrier.",
    image: "/blog-post.jpg",
    category: "Skincare",
  },
  {
    id: "2",
    title: "Natural Ingredients vs. Synthetics: What Really Works",
    date: "Jan 8, 2026",
    comments: 8,
    description: "Explore the effectiveness of natural skincare ingredients and how they compare to scientifically formulated compounds. Get the truth about what actually benefits your skin.",
    image: "/blog-post-2.jpg",
    category: "Wellness",
  },
  {
    id: "3",
    title: "Anti-Aging Strategies: Starting Your Routine in Your 20s",
    date: "Jan 5, 2026",
    comments: 15,
    description: "Prevention is key to youthful skin. Learn which anti-aging ingredients to introduce early and how to build a skincare routine that will protect your skin for years to come.",
    image: "/blog-post-3.jpg",
    category: "Tips",
  },
];

export default function Blog() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8ECE2]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3a2a1a] relative inline-block pb-3">
            LATEST BLOG
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
            >
              <path
                d="M2 8C50 2 150 2 198 8"
                stroke="#5D4B41"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </h2>
          
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#3a2a1a] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center gap-4 mb-4 text-sm text-white">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-blue-700" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4 text-red-500" />
                    <span>{post.comments} Comments</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 transition-colors cursor-pointer">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-white text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
