import { createGlobalStyle } from 'styled-components'
import font1 from './fonts/PRG35Web.ttf'
import font2 from './fonts/PRG45Web.ttf'


export const GlobalStyle = createGlobalStyle`  
  
@font-face{

    font-family: 'PragmaticaL';
    
    src: url('fonts/PRG45Web.ttf');
    
    font-weight: bold;
    
    font-style: italic;
    
}
h1{
    font-family: ${(props) => props.font1};
    font-style: normal;
    font-size: 138px;
    line-height: 130%; 
    margin-bottom: 52px;
    color: rgba(255, 255, 255, 0.85);
}
h1{
    font-family: ${(props) => props.font2};
    font-style: normal;
    font-size: 138px;
    line-height: 130%; 
    margin-bottom: 52px;
    color: rgba(255, 255, 255, 0.85);
}
body {
    font-family: 'Muli', sans-serif;
    background-color:#2C3539;
    color: rgba(255, 255, 255, 0.85);
    
    h1 {
      font-weight: 800;
      font-size: 36px;

    p {
      font-size: 18px;
    }
  }
`;