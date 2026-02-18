import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] flex items-center my-4">
      {/* Background image — object-[50%_25%] keeps face-to-knees visible on wide screens */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "50% 30%" }}
        src={assets.hero_img}
        alt=""
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-[#050507]/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 px-8 sm:px-14 py-16 max-w-xl">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 bg-gray-900/80 border border-gray-800 px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-xs font-medium text-gray-300 tracking-wider uppercase">
            New Season 2025
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
          Discover Your <br />
          Signature Style
        </h1>

        <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-md leading-relaxed">
          Explore curated collections that define modern elegance. Premium
          quality, timeless design.
        </p>

        <a
          href="/collection"
          className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold text-sm px-8 py-4 rounded-full shadow-lg"
        >
          EXPLORE NOW
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>

        {/* Stats */}
        <div className="flex gap-8 mt-10">
          <div>
            <p className="text-2xl font-bold text-white">200+</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              Brands
            </p>
          </div>
          <div className="w-px bg-gray-800"></div>
          <div>
            <p className="text-2xl font-bold text-white">10K+</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              Products
            </p>
          </div>
          <div className="w-px bg-gray-800"></div>
          <div>
            <p className="text-2xl font-bold text-white">50K+</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              Customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
