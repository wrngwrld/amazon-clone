import React from "react";
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

function Product2() {
  return (
    <Container>
      <Title>Razer Seiren X</Title>
      <Price>$89</Price>
      <Rating>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarHalfIcon />
        <StarOutlineIcon />
      </Rating>
      <Image src="https://images-na.ssl-images-amazon.com/images/I/51IIgpigr7L._AC_SL1200_.jpg" />
      <ActionSection>
        <AddToCartButton>Add to Card</AddToCartButton>
      </ActionSection>
    </Container>
  );
}

export default Product2;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height: 400px;
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
`;
