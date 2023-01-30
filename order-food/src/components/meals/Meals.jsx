import React from "react";
import styled from "styled-components";
import MealItem from "./meal-item/MealItem";

const DUMMY_MEALS = [
 
];

const Meals = () => {
  return (
    // <Card>
      <Card>
        {DUMMY_MEALS.map((meal) => {
          return <MealItem meal={meal} key={meal.id}/>
           
          
        })}
      </Card>
    // </Card>
  );
};

export default Meals;

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  min-width: 64.9375rem;
  margin: 68px auto;
  top: 50rem;
  width: 1039px;
  padding: 40px;

`;
