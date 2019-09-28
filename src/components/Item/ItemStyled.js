import styled,{keyframes} from 'styled-components';

const anim_item = keyframes`
  0%{
    opacity:0;
    transform: translateY(-50px)
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`

export const ItemWrapper = styled.div`
position: relative;
width:40%;
height: 420px;
border:2px solid #fff;
animation: ${anim_item} 0.5s linear 0.1s both;
border-radius: 20px;
margin-bottom:50px;
padding:10px;
z-index: 9999;

&:after{
  content: '';
  position: absolute;
  top:1%;
  left:0;
  width:100%;
  height: 53%;
  background: rgba(255, 255, 255,0.3);
  border-radius: 15px;
  padding:10px 0;
  z-index: -999999;
}

@media screen and (max-width:767px){
    width:90vw;
    height: 390px;
}
@media screen and (min-width:1024px){
    width:30%;
    height: 400px;
}
`
export const HeaderItem = styled.p`
  font-size:1.4rem;
  font-weight: 400;
  letter-spacing: 2px;
  color:#fff;
  margin: 10px 0;
  z-index: 9999;
`
export const Image = styled.img`
  width:120px;
  height: 120px;
  margin-top:20px;
  @media screen and (max-width:767px){
    margin-top:30px;
  }
  @media screen and (min-width:1024px){
    margin-top:30px;
  }
`
export const ImageIcon = styled.img`
  width:30px;
  height: 30px;
  margin-right: 10px;
`
export const Info = styled.p`
color:#000;
margin-bottom:10px;
z-index: 99999;
display: flex;
align-items: center;
justify-content: flex-start;
background:rgba(255,255,255,0.7);
border-radius: 5px;
padding:5px;
`