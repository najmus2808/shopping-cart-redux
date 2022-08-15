import { useSelector } from "react-redux";
import { AddToCart } from "./AddToCart";
import { Product } from "./Product";
import { ShippingCart } from "./ShippingCart";

export default function Layout() {
  const products = useSelector((state) => state.products);
  const state = useSelector((state) => state);
  console.log(products);
  console.log(state);
  return (
    <>
      <div className="bg-gray-50 h-full md:h-screen">
        <div className="grid place-items-center">
          <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
            Shopping Cart
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            {products.length > 0 &&
              products.map((product) => (
                <Product key={product?.id} product={product} />
              ))}
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <AddToCart />
            <ShippingCart />
          </div>
        </div>
      </div>
    </>
  );
}
