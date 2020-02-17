import React from 'react';
import styled from 'styled-components';

const TopNav = styled.header`
  display: flex;
  justify-content: center;
  background-color: #143642;
  padding: 20px;
  width: 100%;
`

const H1 = styled.h1`
  font-size: 2.2rem;
    color: #DAD2D8;
`

const Header = () => {
  return (
    <TopNav>
      <H1>Weather Checker!</H1>
    </TopNav>
  )
}

export default Header;