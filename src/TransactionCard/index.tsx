import React from 'react';
import { Container,
Title,
Amount,
Icon,
Category,
CategoryName,
Footer,
Date }    from './style';

export function TransactionCard(){
    return(
        <Container>
        <Title>Website development</Title>
        <Amount> $12.000</Amount>
        <Footer>
            <Category>
                <Icon name="dollar-sign"/>
                <CategoryName>Work</CategoryName>
            </Category>
            <Date>july 17, 2022</Date>
        </Footer>
        </Container>
    )
}