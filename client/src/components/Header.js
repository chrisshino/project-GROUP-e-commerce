import React from 'react'
import styled from 'styled-components';

import { FiMenu, FiShoppingCart } from 'react-icons/fi';

import Logo from './Logo';

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const HeaderBtn = styled.button`
  background: none;
  border: none;

  &:active {
    transform: scale(1.1);
  }
`;

const cartStyle = {
  fontSize: '35px',
  marginRight: '5px', 
  color: '#13A4E7'
};

const menuStyle = {
  fontSize: '35px', 
  color: '#13A4E7'
}

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <div>
        <HeaderBtn><FiShoppingCart style={cartStyle}/></HeaderBtn>
        <HeaderBtn><FiMenu style={menuStyle}/></HeaderBtn>
      </div>
    </Wrapper>
  );
}

export default Header
