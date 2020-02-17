import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  width: 80%;

  @media only screen and (min-width: 600px) {
    width: 60%;
  }  
  
  @media only screen and (min-width: 900px) {
    width: 40%;
  }
`

const List = styled.ul`

`

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  padding: 5px 0;
  border-bottom: 1px solid #A8201A;
`

const Span = styled.span`
  color: #A8201A;
  font-weight: bold;
`

const Main = (props) => {
  return (
    <MainWrapper>
      <List>
        <ListItem>City: <Span>{props.data.location}</Span></ListItem>
        <ListItem>Current temperature: <Span>{props.data.temp} °C</Span></ListItem>
        <ListItem>Today's high: <Span>{props.data.high} °C</Span></ListItem>
        <ListItem>Today's low: <Span>{props.data.low} °C</Span></ListItem>
        <ListItem>Humidity: <Span>{props.data.humidity}%</Span></ListItem>
        <ListItem>Wind: <Span>{props.data.wind} m/s</Span></ListItem>
      </List>
    </MainWrapper>
  )
}

export default Main;