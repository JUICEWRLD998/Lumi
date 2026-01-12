import Image from 'next/image';

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
        }
    ];

    return (
        <section className="bg-[#5D4B41] py-10 md:py-14">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Section Title */}
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#ffffff] text-center mb-8 md:mb-12 tracking-wide">
                    Top Selling Products
                </h2>

                {/* Products Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
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
                        </div>
                    ))}
                </div>

                {/* View All Products Button */}
                <div className="flex justify-center mt-8 md:mt-12">
                    <button className="border-2 border-[#8B6F47] text-[#ffffff] hover:bg-[#8B6F47] hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-colors duration-300">
                        ALL PRODUCTS
                    </button>
                </div>
            </div>
        </section>
    )
}