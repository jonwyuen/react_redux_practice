export const calcCartTotal = (cart, discount = 0) => {
  return (
    Math.round(
      cart.reduce((acc, next) => (acc += next.price * next.quantity), 0) *
        (1 - discount) *
        100
    ) / 100
  );
};

export const calcTotalQuantity = cart => {
  return +cart.reduce((acc, next) => (acc += next.quantity), 0);
};
