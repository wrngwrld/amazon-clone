import React from "react";
import styled from "styled-components";
import CartItems from "./CartItems.js";
import CartTotal from "./CartTotal.js";

function Cart() {
  return (
    <Container>
      <CartItems />
      <CartTotal />
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  display: flex;

  padding: 14px 18px 0 18px;
`;
