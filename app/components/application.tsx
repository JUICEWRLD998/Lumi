'use client';

import { useState } from 'react';

export default function Application() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    return (
        <section className="bg-[#F8ECE2] py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Section Title */}
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#3a2a1a] text-center mb-12 md:mb-16 tracking-wide">
                    HOW IT WORKS
                </h2>

                {/* Video Container */}
                <div className="relative w-full max-w-4xl mx-auto">
                    {!isPlaying ? (
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={handlePlayClick}>
                            {/* Thumbnail Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#F8ECE2] to-[#E8D4C4] flex items-center justify-center">
                                <img
                                    src="/how-it-works.jpg"
                                    alt="How it works"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={handlePlayClick}
                                    className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                                >
                                    <svg
                                        className="w-6 h-6 md:w-8 md:h-8 text-[#8B6F47] ml-1 group-hover:text-[#6d5635] transition-colors"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/xZRsET_MUEg?si=tKNSr4AZbrBqpbfC&autoplay=1"
                                title="How It Works"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
