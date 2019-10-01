import React from 'react';
import styles from './Button.module.scss';
import styled,{keyframes} from 'styled-components';

const anim_item = keyframes`
0%{
  opacity:0;
  transform: translateX(20px)
}
100%{
  opacity: 1;
  transform: translateX(0);
}
`

export const ResetBtn = styled.button`
margin-left:1rem;
padding:5px 10px;
font-size:1.5rem;
border:1px solid #fff;
background: none;
color:#fff;
position: absolute;
right:20%;
bottom:0;
animation: ${anim_item} 0.5s ease-in-out .2s both;
font-family: 'Montserrat';
font-weight: 300;
position: relative;
top:70%;
left: 50%;

&:before{
  position: absolute;
  content:'';
  width:100%;
  height: 100%;
  border:1px solid #fff;
  left:1%;
  top:1%;
}

@media screen and (max-width:767px){
    left:0%;
    margin:0;
    width:80%;
}
@media screen and (min-width:768px){
    left:60%;
}
@media screen and (min-width:1024px){
    left:50%;
}
`

const Button = ({resetFn}) => (
  <ResetBtn 
    className={styles.btn}
    onClick={resetFn}
    >reset
  </ResetBtn>
);

export default Button;