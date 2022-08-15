import { CartItemButton } from "./CartItemButton";

export function CartItem({ item }) {
  return (
    <>
      <div className="flex justify-between border-b-2 mb-2">
        <div className="text-lg py-2">
          <p>{item?.name}</p>
        </div>
        <div className="text-lg py-2">
          <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
            <CartItemButton d="M18 12H6" id={item?.id} />
            <p>{item?.quantity}</p>
            <CartItemButton
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              id={item?.id}
              isIncrement
            />
          </div>
        </div>
      </div>
    </>
  );
}
