import React from "react";
import { Container, Title } from "./styles";

interface Props{
  onLayout: () => void;
}
export function Dashboard({ onLayout }: Props) {
  return (
    <Container onLayout={onLayout}>
      <Title>Dashboard</Title>
    </Container>
  );
}
