import React from 'react';
import cityImg from '../../assets/img/cities.png';
import HeaderNav from './HeaderNav/HeaderNav';
import {HeaderWrapper,ImageHeader,Title,Span} from './HeaderStyled';

export const Header = () => {
  return(
    <HeaderWrapper>
      <ImageHeader src={cityImg} alt='' />
      <Title><Span>Polskie</Span> Miasta</Title>
      <HeaderNav />
    </HeaderWrapper>
  )
}

