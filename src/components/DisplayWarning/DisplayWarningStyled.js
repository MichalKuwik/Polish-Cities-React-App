import styled,{keyframes} from 'styled-components';

const anim_item = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity: 1;
  }
`

export const Info = styled.p`
  border:1px solid #fff;
  color:red;
  font-size: 1rem;
  font-family: "Montserrat";
  font-weight: 500;
  width: 25%;
  padding: 5px;
  position: relative;
  animation: ${anim_item} 0.8s linear 0.1s both;

&:before{
    position: absolute;
    content:'';
    width:100%;
    height: 100%;
    border:1px solid #fff;
    left:1%;
    top:5%;
}

@media screen and (max-width:767px){
  width:90%;
}
`

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`