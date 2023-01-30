import React from "react";
import styled from "styled-components";

const Button = ({ children, variant = "contained", borderStyle = "rounder" }) => {
  return <StyledButton variant={variant} borderStyle={borderStyle} >{children} </StyledButton>;
};

export default Button;

const getBackgoundColor = (props) => {
 return props.variant === "contained" ? " #8a2b06" : "#fff"
}


const getBorder = (props) => {
  return props.variant === "contained" ? " none" :  "1px solid #8a2b06"
 }

 const getColor = (props) => {
  return props.variant === "contained" ? "#fff" :  " #8a2b06"
 }

 
const getRadius = (props) => {
  return props.borderStyle === "rounded" ? "20px" :  "6px"
 }

 
const StyledButton = styled.button`
  background: ${getBackgoundColor};
  border-radius: ${getRadius};
  padding: 10px 32px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: ${getColor};
  border: ${getBorder};
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  :hover {
    background: #7e2a0a;
    color: #fff
  }
  :active {
    background: #993108;
  }
`;
