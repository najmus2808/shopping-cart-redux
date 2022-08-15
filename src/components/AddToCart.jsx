import { CartItem } from "./CartItem";
import { useSelector } from "react-redux";

export function AddToCart() {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <>
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {cartItems.length > 0 &&
          cartItems.map((item) => <CartItem key={item?.id} item={item} />)}
        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Item</p>
            <p className="text-5xl">
              {cartItems?.length > 0 &&
                cartItems?.reduce((total, value) => total + value?.quantity, 0)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
