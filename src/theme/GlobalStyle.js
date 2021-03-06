import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;

}

html {
    font-size: 62.5%;
}

body{
    font-size: 1.6rem;
    background-color: #ead2ac;
    color: #FFF4F4F4;
    font-weight: 400;
    font-family: 'Montserrat';
    margin-bottom: 50px;

    @media(min-width: 1240px){
        margin-top: 175px;
    }


}
`;

export default GlobalStyle;
