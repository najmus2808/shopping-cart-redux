export const addHandler = (state, id) => {
  const stateObj = { ...state };
  const item = stateObj.products.find((item) => item.id === id);
  const isExist = stateObj.cartItems.findIndex((item) => item.id === id);
  let objIndex = [...stateObj.products].findIndex((item) => item.id === id);
  stateObj.products[objIndex].stockQuantity =
    stateObj.products[objIndex].stockQuantity - 1;

  if (isExist === -1) {
    return {
      ...stateObj,
      cartItems: [...stateObj.cartItems, { ...item, quantity: 1 }],
    };
  } else {
    let objIndex = [...stateObj.cartItems].findIndex((item) => item.id === id);
    stateObj.cartItems[objIndex].quantity =
      stateObj.cartItems[objIndex]?.quantity + 1;
    return {
      ...stateObj,
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
