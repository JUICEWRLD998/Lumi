"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Calendar } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  comments: number;
  description: string;
  image: string;
  category?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Skin Care advice from a surgeon",
    date: "Apr 25, 2023",
    comments: 5,
    description: "We believe that the beauty is aenset risusvitae semper ullamcorpe tellus felis sollicitus.",
    image: "/blog-1.jpg",
    category: "Skincare",
  },
  {
    id: "2",
    title: "Inner Beauty is the best beauty",
    date: "Apr 25, 2023",
    comments: 5,
    description: "We believe that the beauty is aenset risusvitae semper ullamcorpe tellus felis sollicitus.",
    image: "/blog-2.jpg",
    category: "Wellness",
  },
  {
    id: "3",
    title: "Skin Care advice from a surgeon",
    date: "Apr 25, 2023",
    comments: 5,
    description: "We believe that the beauty is aenset risusvitae semper ullamcorpe tellus felis sollicitus.",
    image: "/blog-3.jpg",
    category: "Tips",
  },
];

export default function Blog() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] tracking-tight">
            LATEST FROM BLOG
          </h2>
          <div className="w-16 h-1 bg-[#F1DECD] mx-auto mt-4"></div>
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
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
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
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments} Comments</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-[#5D4B41] transition-colors cursor-pointer">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Read More Link */}
                <button className="text-[#D4A574] font-semibold text-sm hover:text-[#5D4B41] transition-colors duration-300">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
