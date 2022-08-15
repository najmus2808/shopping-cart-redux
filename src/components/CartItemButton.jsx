import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/shoppingCart/actions";

export function CartItemButton({ d, id, isIncrement }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.products);
  const incrementHandler = (id) => {
    dispatch(increment(id));
  };

  const decrementHandler = (id) => {
    dispatch(decrement(id));
  };
  const existingItem = [...products].find((item) => item.id === id);
  return (
    <>
      <button
        disabled={isIncrement && existingItem?.stockQuantity < 1}
        onClick={() =>
          isIncrement ? incrementHandler(id) : decrementHandler(id)
        }
        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={d}
          />
        </svg>
      </button>
    </>
  );
}
