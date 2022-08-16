export const addHandler = (state, id) => {
  const stateObj = { ...state };
  const productsNew = [...stateObj.products];
  const cartItemsNew = [...stateObj.cartItems];
  const item = productsNew.find((item) => item.id === id);
  const isExist = cartItemsNew.findIndex((item) => item.id === id);

  if (isExist === -1) {
    let objIndex = productsNew.findIndex((item) => item.id === id);
    productsNew[objIndex].stockQuantity =
      productsNew[objIndex].stockQuantity - 1;
    return {
      ...stateObj,
      products: [...productsNew],
      cartItems: [...cartItemsNew, { ...item, quantity: 1 }],
    };
  } else {
    let objIndex = cartItemsNew.findIndex((item) => item.id === id);
    cartItemsNew[objIndex].quantity = cartItemsNew[objIndex]?.quantity + 1;
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
  let objIndex = [...stateObj.cartItems].findIndex((item) => item.id === id);
  let productIndex = [...stateObj.products].findIndex((item) => item.id === id);
  stateObj.cartItems[objIndex].quantity =
    stateObj.cartItems[objIndex].quantity + 1;
  stateObj.products[productIndex].stockQuantity =
    stateObj.products[productIndex].stockQuantity - 1;

  return {
    ...stateObj,
  };
};

export const decrementHandler = (state, id) => {
  const stateObj = { ...state };
  let objIndex = [...stateObj.cartItems].findIndex((item) => item.id === id);
  let productIndex = [...stateObj.products].findIndex((item) => item.id === id);
  stateObj.cartItems[objIndex].quantity =
    stateObj.cartItems[objIndex].quantity - 1;
  stateObj.products[productIndex].stockQuantity =
    stateObj.products[productIndex].stockQuantity + 1;

  if (stateObj.cartItems[objIndex].quantity < 1) {
    const modifiedCartItems = stateObj?.cartItems?.filter(
      (item) => item?.id !== id
    );
    return {
      ...stateObj,
      cartItems: [...modifiedCartItems],
    };
  }

  return {
    ...stateObj,
  };
};
