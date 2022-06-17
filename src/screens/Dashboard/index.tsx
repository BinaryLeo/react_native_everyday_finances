import React from "react";
import { 
  Container,
   Header,
   UserInfo,
   Photo,
   User,
   UserGreeting,
   UserName,
   UserWrapper,
   Icon,

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
        <Icon name="power"/>
        </UserWrapper>
       
      </Header>
    </Container>
  );
}
