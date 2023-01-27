import React from "react";
import styled from "styled-components";
import BasketButton from "./BasketButton";

const Header = () => {
  return (
    <Container>
      <Logo>React Meals</Logo>
      <BasketButton></BasketButton>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  height: 101px;
  background-color: #8a2b06;
  display: flex;
  justify-content: space-around;
  /* padding-left: 120px;
  padding-right: 120px; */
  align-items: center;
  z-index: 1;
`;
const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`;
