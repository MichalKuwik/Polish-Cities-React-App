import styled,{keyframes} from 'styled-components';
import {NavLink} from 'react-router-dom';

const anim_nav = keyframes`
  0%{
    transform: scale(1.3)
  }
  100%{
    transform: scale(1)
  }
`

export const NavWrapper = styled.nav`
display: flex;
justify-content: center;
align-items: center;
width:90vw;
`
export const NavLinkStyled = styled(NavLink)`
  color:#fff;
  text-decoration: none;
  font-weight: 300;
  font-size:1.3rem;
  background: rgba(255, 255, 255, 0.3);
  padding:5px 5px;
  border-radius: 5px;
  margin: 0 1rem;

  &.active {
    border:1px solid black;
    box-shadow: 0px 0px 8px 5px rgba(0,0,0,0.75);
    animation: ${anim_nav} 1s ease 0.2s both;
  }
`
export const ImageSvg = styled.img`
  width:40px;
  height: 40px;
  margin:0 10px;
`