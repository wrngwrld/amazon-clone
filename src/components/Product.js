import React from "react";
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import { db } from "../firebase";

function Product({ title, price, rating, image, id }) {
  const addToCart = () => {
    const cartItem = db.collection("cartitems").doc(id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("cartitems").doc(id).set({
          name: title,
          image: image,
          price: price,
          quantity: 1,
        });
      }
    });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Price>${price}</Price>
      <Rating>
        {/* <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarHalfIcon /> */}
        {Array(rating)
          .fill()
          .map((rating) => (
            <StarIcon />
          ))}
      </Rating>
      <Image src={image} />
      <ActionSection>
        <AddToCartButton onClick={addToCart}>Add to Card</AddToCartButton>
      </ActionSection>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height: 400px;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.14);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.14);
`;

const Title = styled.span``;

const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;

const Rating = styled.div`
  color: #ffa41c;
`;

const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;

const ActionSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
`;

const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 1px solid #a88734;
  border-radius: 2px;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.14);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.14);
  cursor: pointer;
`;
