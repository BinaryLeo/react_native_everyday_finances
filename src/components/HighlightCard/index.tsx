import React from "react";
import {
     Container,
     Header,
     Title,
     Icon,
     Footer,
     Amount,
     LastTransaction,
    
    } from "./styles";

export function HighlightCard() {
  return (
    <Container>
     <Header>
        <Title>Incomes</Title>
        <Icon name="arrow-up-circle"r/>
     </Header>
     <Footer>
        <Amount>$17.400,00</Amount>
        <LastTransaction>Last income on April 13th</LastTransaction>
     </Footer>
    </Container>
  );
}