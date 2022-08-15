import { ProductButton } from "./ProductButton";

export function Product({ product }) {
  return (
    <>
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div className="flex justify-between px-4 items-center">
          <div className="text-lg font-semibold">
            <p>{`${product?.name} (${product?.stockQuantity})`}</p>
            <p className="text-gray-400 text-base">Tk {product?.price}</p>
          </div>
          <div className="text-lg font-semibold">
            <ProductButton
              id={product?.id}
              stockQuantity={product?.stockQuantity}
            />
          </div>
        </div>
      </div>
    </>
  );
}
