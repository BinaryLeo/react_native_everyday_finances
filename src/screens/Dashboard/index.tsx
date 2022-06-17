import React from "react";
import { Text } from "react-native";
import { 
  Container,
   Header,
   UserInfo,
   Photo,
   User,
   UserGreeting,
   UserName,
   UserWrapper,

   } from "./styles";

interface Props {
  onLayout: () => void;
}
export function Dashboard({ onLayout }: Props) {
  return (
    <Container onLayout={onLayout}>
      <Header>
        <UserWrapper>
        <UserInfo>
          <Photo 
          source={{uri:'https://github.com/binaryleo.png'}} />
          <User>
            <UserGreeting>Olá,</UserGreeting>
            <UserName>João</UserName>
          </User>
        </UserInfo>
        </UserWrapper>
      </Header>
    </Container>
  );
}
