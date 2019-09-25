import styled,{keyframes} from 'styled-components';

const anim_cont = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`
const anim_top = keyframes`
  0%{
    opacity:0;
    transform: translateY(-10px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`

const anim_bottom = keyframes`
  0%{
    opacity:0;
    transform: translateY(10px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`

export const Section = styled.section`
  width:35vw;
  margin:4rem auto;
  font-family: 'Montserrat';
  border:1px solid #fff;
  padding:30px;
  animation: ${anim_cont} 0.8s linear 0.2s both;
  position: relative;

  &:before{
    position: absolute;
    content:'';
    width:100%;
    height: 100%;
    border:1px solid #fff;
    left:1%;
    top:1%;
  }
  @media screen and (max-width:768px){
    width:60vw;
  }
  @media screen and (max-width:767px){
    width:90vw;
    padding: 30px 10px;
  }
`
export const Header = styled.h2`
  color:#fff;
  font-weight: 300;
  margin-bottom:1.5rem;
  text-transform: uppercase;
  animation: ${anim_top} .6s linear 0.3s both;
`
export const Description = styled.p`
  color:#fff;
  font-weight: 300;
  animation: ${anim_bottom} .6s linear 0.4s both;
`
export const Span = styled.span`
  color:red;
  font-weight: 600;
  font-size: 1.1rem;
`