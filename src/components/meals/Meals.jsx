import React from "react";
import styled from "styled-components";
import MealItem from "./meal-item/MealItem";

const DUMMY_MEALS = [
  {
    id:1,
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },

  {
    id: 2,
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.0,
  },

  {
    id: 3,
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },

  {
    id: 4,
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
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
