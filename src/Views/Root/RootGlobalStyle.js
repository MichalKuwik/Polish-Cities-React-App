import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,900&display=swap');

  body{
    min-height: 100vh;
    background: linear-gradient(180deg, rgba(11,16,35,1) 0%, rgba(43,55,96,1) 50%);
    }
    *, *::before,*::after{
      margin: 0;
      padding:0;
      box-sizing: border-box;
      font-family: 'Montserrat',sans-serif;
  }
`