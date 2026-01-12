import Image from 'next/image';

export default function Experts() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#3a2a1a] text-center mb-12 md:mb-16 uppercase tracking-wide">
          CONNECTING YOU WITH EXPERTS
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-[300px] h-[350px] md:w-[350px] md:h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="/expert.jpg"
                alt="Skin care expert"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-5 md:space-y-6">
            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-[#f5e6d3] flex items-center justify-center">
              <svg className="w-6 h-6 text-[#d4a89a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h-2m0 0H8m4 0v2m0-2v-2m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#3a2a1a]">
              Only pay if your condition improves after treatment
            </h3>

            {/* Description */}
            <p className="font-inter text-sm md:text-base text-[#5a4a3a] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            {/* Button */}
            <button className="px-8 py-2.5 rounded-full bg-[#d4a89a] text-white text-sm font-medium hover:bg-[#c49888] transition-colors">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
