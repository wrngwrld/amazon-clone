import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem.js";

function CartItems() {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        <CartItem />
      </ItemsContainer>
    </Container>
  );
}

export default CartItems;

const Container = styled.div`
  height: 300px;
  flex: 0.8;
  padding: 20px;
  margin-right: 18px;
  background-color: white;
`;

const Title = styled.div``;

const ItemsContainer = styled.div``;
