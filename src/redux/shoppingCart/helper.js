export const addHandler = (state, id) => {
  const stateObj = { ...state };
  const productsNew = [...stateObj.products];
  const cartItemsNew = [...stateObj.cartItems];
  const item = productsNew.find((item) => item.id === id);
  const isExist = cartItemsNew.findIndex((item) => item.id === id);

  if (isExist === -1) {
    let productIndex = productsNew.findIndex((item) => item.id === id);
    productsNew[productIndex].stockQuantity =
      productsNew[productIndex].stockQuantity - 1;
    return {
      ...stateObj,
      products: [...productsNew],
      cartItems: [{ ...item, quantity: 1 }, ...cartItemsNew],
    };
  } else {
    let cartItemIndex = cartItemsNew.findIndex((item) => item.id === id);
    cartItemsNew[cartItemIndex].quantity = cartItemsNew[cartItemIndex]?.quantity + 1;
    let productIndex = productsNew.findIndex((item) => item.id === id);
    productsNew[productIndex].stockQuantity =
      productsNew[productIndex].stockQuantity - 1;
    return {
      ...stateObj,
      products: [...productsNew],
      cartItems: [...cartItemsNew],
    };
  }
};

export const incrementHandler = (state, id) => {
  const stateObj = { ...state };
  const productsNew = [...stateObj.products];
  const cartItemsNew = [...stateObj.cartItems];
  let cartItemIndex = cartItemsNew.findIndex((item) => item.id === id);
  let productIndex = productsNew.findIndex((item) => item.id === id);
  cartItemsNew[cartItemIndex].quantity = cartItemsNew[cartItemIndex].quantity + 1;
  productsNew[productIndex].stockQuantity =
    productsNew[productIndex].stockQuantity - 1;

  return {
    ...stateObj,
    products: [...productsNew],
    cartItems: [...cartItemsNew],
  };
};

export const decrementHandler = (state, id) => {
  const stateObj = { ...state };
  const productsNew = [...stateObj.products];
  const cartItemsNew = [...stateObj.cartItems];
  let cartItemIndex = cartItemsNew.findIndex((item) => item.id === id);
  let productIndex = productsNew.findIndex((item) => item.id === id);
  cartItemsNew[cartItemIndex].quantity = cartItemsNew[cartItemIndex].quantity - 1;
  productsNew[productIndex].stockQuantity =
    productsNew[productIndex].stockQuantity + 1;

  if (cartItemsNew[cartItemIndex].quantity < 1) {
    const modifiedCartItems = cartItemsNew.filter((item) => item?.id !== id);
    return {
      ...stateObj,
      products: [...productsNew],
      cartItems: [...modifiedCartItems],
    };
  }

  return {
    ...stateObj,
    products: [...productsNew],
    cartItems: [...cartItemsNew],
  };
};
