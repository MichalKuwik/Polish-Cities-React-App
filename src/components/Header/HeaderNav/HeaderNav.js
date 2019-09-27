import React from 'react';
import appImg from '../../../assets/img/data.png'
import descrImg from '../../../assets/img/light.png';
import {NavWrapper,NavLinkStyled,ImageSvg} from './HeaderNavStyled';

const HeaderNav = () => (
  <NavWrapper>
    <NavLinkStyled
      to="/"
      exact
      >
        <ImageSvg 
          src={appImg} 
          alt=''
          />
       
    </NavLinkStyled>
  
    <NavLinkStyled
      to="/about"
      >
      <ImageSvg 
          src={descrImg} 
          alt=''
         />
    </NavLinkStyled>
  </NavWrapper>
)

export default HeaderNav;