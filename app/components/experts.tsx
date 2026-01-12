import Image from 'next/image';

export default function Experts() {
  return (
    <section className="bg-[#F8ECE2] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#3a2a1a] text-center mb-12 md:mb-16 uppercase tracking-wide">
          CONNECTING YOU WITH EXPERTS
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-3xl overflow-hidden">
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
            {/* Description */}
            <p className="font-inter text-sm md:text-base text-[#5a4a3a] leading-relaxed">
              Our certified skincare experts are dedicated to providing personalized treatments tailored to your unique skin type and concerns. With years of experience and a commitment to using only organic, natural ingredients, we ensure every treatment is safe, effective, and transformative. From acne solutions to anti-aging therapies, we guide you through every step of your skincare journey with professional expertise and genuine care.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}
