import React from "react";
import styled from "styled-components";
import CartItems from "./CartItems.js";
import CartTotal from "./CartTotal.js";

function Cart({ cartItems }) {
  const getTotalPrice = () => {
    let total = 0;

    cartItems.forEach((item) => {
      total += item.product.price * item.product.quantity;
    });

    return total;
  };

  const getCount = () => {
    let count = 0;

    cartItems.forEach((item) => {
      count += item.product.quantity;
    });

    return count;
  };

  return (
    <Container>
      <CartItems cartItems={cartItems} />
      <CartTotal count={getCount()} totalPrice={getTotalPrice()} />
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  display: flex;
  align-items: flex-start;

  padding: 14px 18px 0 18px;
`;
