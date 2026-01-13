"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Products() {
    const products = [
        {
            id: 1,
            title:'Age reversing serum',
            price: '$45',
            image: '/product-sec-1.jpg',

        },
        {
            id: 2,
            title:'Organic face wash',
            price: '$30',
            image: '/product-sec-2.jpg',

        },
        {
            id: 3,
            title:'Natural moisturizer',
            price: '$35',
            image: '/product-sec-3.jpg',
        },
        {
            id: 4,
            title:'Herbal night cream',
            price: '$50',
            image: '/product-sec-4.jpg',
        },
        {
            id: 5,
            title:'The ordinary serum',
            price: '$35',
            image: '/product-sec-5.jpg',

        },
        {
            id: 6,
            title:'Ritual face wash',
            price: '$23',
            image: '/product-sec-6.jpg',

        },
        {
            id: 7,
            title:'Curology moisturizer',
            price: '$25',
            image: '/product-sec-7.jpg',
        },
        {
            id: 8,
            title:'Golden night cream',
            price: '$100',
            image: '/product-sec-8.jpg',
        },
    ];

    return (
        <section id="products" className="bg-[#5D4B41] py-10 md:py-14">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#ffffff] text-center mb-8 md:mb-12 tracking-wide"
                >
                    Top Selling Products
                </motion.h2>

                {/* Products Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
                        >
                            {/* Product Image */}
                            <div className="relative w-full aspect-square overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            
                            {/* Product Info */}
                            <div className="p-3 sm:p-4 md:p-5">
                                <h3 className="font-playfair text-sm sm:text-base md:text-lg font-semibold text-[#3a2a1a] mb-2 line-clamp-2">
                                    {product.title}
                                </h3>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-base sm:text-lg md:text-xl font-bold text-[#8B6F47]">
                                        {product.price}
                                    </span>
                                    <button className="bg-[#8B6F47] hover:bg-[#6d5635] text-white px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 whitespace-nowrap">
                                        Add
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                </div>
        </section>
    )
}