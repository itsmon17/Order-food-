import React from "react";
import styled from "styled-components";
import Button from "../../../UI/Button";

import MealItemForm from "./MealItemForm";

const MealItem = ({ meal }) => {
  return (
    <Container>
      <StyledItemInfo>
        <StyledTitle>{meal.title}</StyledTitle>
        <p>{meal.description}</p>
        <StyledPrice>${meal.price}</StyledPrice>
      </StyledItemInfo>
      <MealItemForm id={meal.id} />
      
        
     
    </Container>
  );
};

export default MealItem;

const Container = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
  }
`;

const StyledItemInfo = styled.div`
  margin-bottom: 20px;
  p {
    font-family: "Poppins";
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: black;
  }

  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    margin-top: 4px;
    color: #ad5502;
  }
`;

const StyledTitle = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const StyledPrice = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ad5502;
`;


