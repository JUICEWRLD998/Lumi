import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-[#d4a89a]">
              <Image
                src="/skincare2.png"
                alt="Woman applying skincare product"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-5 md:space-y-6">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#3a2a1a]">
              ABOUT US
            </h2>
            
            <p className="font-inter text-sm md:text-base text-[#5a4a3a] leading-relaxed">
              Welcome to Lumi, Home-based organic skin care manufacturer, bringing you a range of high-quality skin care made from 100% organic ingredients. We believe in the power of nature to transform your skin, which is why all our products are lovingly crafted using only natural ingredients. With absolutely no added harmful chemical and parabens. We are committed to providing you with skincare that not only enhances your natural beauty, but also promotes overall well-being.
            </p>

            <button className="px-8 py-2.5 rounded-full bg-[#d4a89a] text-white text-sm font-medium hover:bg-[#c49888] transition-colors">
              View more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
