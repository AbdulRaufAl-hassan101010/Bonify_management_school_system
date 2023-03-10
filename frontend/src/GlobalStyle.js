import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #008080;
    --header-font: 'Open Sans', sans-serif;
    --secondary-font: 'Poppins', sans-serif;
    --white-color: #fff;
    --dark-color: '#a8a8a8'
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }


  html {
    background: #f3f3f3;
    font-size: 10px;
    
  }

  body {
    font: normal 1.6rem/1.6 var(--secondary-font);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--header-font);  
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
  }


  .container {
      max-width: 110rem;
      margin:  0 auto;
  }

  a {
    color: var(--dark-color)
  }

`;

export default GlobalStyle;
