import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between py-2">
          <p className="text-gray-400">Subtotal</p>
          <p className="text-gray-200">
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <div className="h-px bg-white/5"></div>
        <div className="flex justify-between py-2">
          <p className="text-gray-400">Shipping Fee</p>
          <p className="text-gray-200">
            {currency} {delivery_fee}.00
          </p>
        </div>
        <div className="h-px bg-gray-700"></div>
        <div className="flex justify-between py-3">
          <b className="text-gray-100">Total</b>
          <b className="text-gray-100 text-lg">
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
