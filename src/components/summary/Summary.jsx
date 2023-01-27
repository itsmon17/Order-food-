import React from 'react'
import styled from 'styled-components'
import BaskgroundImg from "../../assets/images/summary-baskground.jpg"
import SummaryInfoCard from './SummaryInfoCard'

const Summary = () => {
  return (  <Container>
   <StyledImg src={BaskgroundImg} alt="summary" />
   <SummaryInfoCard/>
    </Container>
   
  )
}

export default Summary

const Container = styled.div`
    height: 527px;
`

const StyledImg = styled.img`
    height: 432px;
    width: 100%;

`