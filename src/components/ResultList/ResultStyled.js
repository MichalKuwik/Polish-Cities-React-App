import styled from 'styled-components';

export const ResultWrapper = styled.div`
  width:90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  z-index:99999;
  margin-top:4rem;

  @media screen and (max-width:767px){
    flex-direction: column;
  }
`