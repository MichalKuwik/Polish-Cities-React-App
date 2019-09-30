import styled,{keyframes} from 'styled-components';

const anim_bar = keyframes`
0%{
  width:0
}
100%{
  width:90%;
}
`
const anim_label = keyframes`
0%{
  font-size:0;
}
100%{
  font-size:1rem;
}
`

export const SearchWrapper = styled.div`
width:80vw;
height: 10vh;
margin-top:2rem;
padding:10px;
position: relative;
width:50%;
left:30%;
bottom:0;

@media screen and (max-width:767px){
  width:100vw;
    margin:0;
    left:50%;
    transform: translateX(-50%);
    height: 20vh;
}
`
export const Label = styled.label`
  color:#fff;
  text-align: center;
  position: absolute;
  left:0;
  bottom:5%;
  font-size:1rem;
  font-weight: 200;
  transition: 1s cubic-bezier(0.165, 0.84, 0.44, 1); 
  animation: ${anim_label} 0.5s ease-out 0.8s both;
  transform-origin:center right;

  @media screen and (max-width:767px){
    bottom:55%;
    left:5%;
  }
`
export const Input = styled.input`
  font-size:2rem;
  background:none;
  border:none;
  width:60%;
  margin-top:3rem;
  color:#fff;
  position: absolute;
  left: 0%;
  bottom:0;
  
  &:focus{
    outline: none;
  }
  &:focus + ${Label}{
    bottom:60%;
    font-size:.3rem;
    color:red;
  }

  @media screen and (max-width:767px){
    bottom:50%;
    width: 90%;
    left:50%;
    transform: translateX(-50%);
    &:focus + ${Label}{
      bottom:85%;
      font-size:0.2rem;
      color:red;
    }
  }

  @media screen and(max-width:768px){
    width:70%;
  }
`

export const FormItemBar = styled.div`
position: absolute;
left:0%;
bottom:-10%;
background: #fff;
height: 1px;
width:60%;
animation: ${anim_bar} 0.5s ease-out 0.3s both;


@media screen and (max-width:767px){
    bottom:50%;
    width: 90%;
    left:50%;
    transform: translateX(-50%);
}

@media screen and(max-width:768px){
  width:70%;
}
`