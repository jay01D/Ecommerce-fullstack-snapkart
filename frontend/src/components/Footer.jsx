import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="mt-20">
      {/* Solid top border */}
      <div className="h-px bg-gray-800"></div>

      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 px-2 py-14 text-sm">
        <div>
          <div className="mb-5">
            <Logo className="text-2xl" />
          </div>
          <p className="w-full md:w-2/3 text-gray-500 leading-relaxed">
            Your trusted destination for quality products and an exceptional
            shopping experience. We bring you curated selections with the best
            deals and customer service.
          </p>
          {/* Social row */}
          <div className="flex gap-3 mt-6">
            <span className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-sm cursor-pointer hover:bg-gray-700 transition-colors">
              𝕏
            </span>
            <span className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-sm cursor-pointer hover:bg-gray-700 transition-colors">
              📸
            </span>
            <span className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-sm cursor-pointer hover:bg-gray-700 transition-colors">
              💼
            </span>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold mb-5 text-white uppercase tracking-wider">
            Company
          </p>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li className="hover:text-purple-400 cursor-pointer transition-colors">
              Home
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition-colors">
              About us
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition-colors">
              Delivery
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition-colors">
              Privacy policy
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold mb-5 text-white uppercase tracking-wider">
            Get in Touch
          </p>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li className="hover:text-purple-400 transition-colors">
              +1-212-456-7890
            </li>
            <li className="hover:text-purple-400 transition-colors">
              contact@snapcart.com
            </li>
          </ul>
        </div>
      </div>

      <div className="h-px bg-gray-800"></div>
      <p className="py-5 text-xs text-center text-gray-600">
        &copy; 2025 SnapCart. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
