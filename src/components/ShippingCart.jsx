import { useSelector } from "react-redux";

export function ShippingCart() {
  const cartItems = useSelector((state) => state.cartItems);
  let totalAmount =
    cartItems?.length > 0
      ? cartItems?.reduce(
          (total, value) => total + value?.quantity * value?.price,
          0
        )
      : 0;
  return (
    <>
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Price</p>
            <p className="text-5xl">Tk.{totalAmount}</p>
          </div>
        </div>
      </div>
    </>
  );
}
