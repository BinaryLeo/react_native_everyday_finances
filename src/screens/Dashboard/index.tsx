import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
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
  HighlightCards,
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
            <Photo source={{ uri: "https://github.com/binaryleo.png" }} />
            <User>
              <UserGreeting>Hi,</UserGreeting>
              <UserName>John</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Incomes"
          amount="$ 17.400,00"
          lastTransaction="Last income on April 13th"
        />
        <HighlightCard
          type="down"
          title="Outcomes"
          amount="$ 1.259,00"
          lastTransaction="Last Outcomes on April 3rd"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="$ 16.141,00"
          lastTransaction="April 01 to 16"
        />
      </HighlightCards>
    </Container>
  );
}
