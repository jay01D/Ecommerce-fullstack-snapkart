import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className="group cursor-pointer"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500/50 transition-colors">
        <div className="overflow-hidden relative">
          <img
            className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
            src={image[0]}
            alt=""
          />
        </div>
        <div className="p-3">
          <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors truncate">
            {name}
          </p>
          <p className="text-sm font-bold text-gray-100 mt-1">
            {currency}
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
