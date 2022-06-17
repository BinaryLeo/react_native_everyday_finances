import React from "react";
import { Text } from "react-native";
import { Container, Header } from "./styles";

interface Props {
  onLayout: () => void;
}
export function Dashboard({ onLayout }: Props) {
  return (
    <Container onLayout={onLayout}>
      <Header></Header>
    </Container>
  );
}
