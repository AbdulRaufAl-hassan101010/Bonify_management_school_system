import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #008080;
    --secondary-color: rgba(0,128,128,0.07);
    --header-font: 'Open Sans', sans-serif;
    --secondary-font: 'Poppins', sans-serif;
    --white-color: #fff;
    --light-dark-color: rgba(0,0,0,0.7);
    --light-red-color: rgba(126,23,9,0.07);
    --grey-color: #f3f3f3;
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
    margin-bottom: 2.5rem;
  }

  a {
    color: var(--dark-color)
  }

  img {
    width: 100%;
    
  }

  /* utility classes */
  .container {
    max-width: 120rem;
    width: 100%;
    margin:  0 auto;
    padding: 0 3rem;
  }

  .text-center {
    text-align: center;
  }

  .text-light-dark {
    color: var(--light-dark-color)
  }

  .pt-5 {
    padding-top: 10rem;
  }
  .py-5 {
    padding: 10rem 0;
  }

  .bg-white {
    background: var(--white-color);
  }
  .bg-secondary {
    background: var(--secondary-color);
  }

  .display-2 {
    font-size: 3.5rem;
    font-weight: 800;
  }

  .mt-1 {
    margin-top: 2rem;
  }
  .mt-2 {
    margin-top: 3.5rem;
  }


  .flex {
    display: flex;
  }


  .jc-sb {
    justify-content: space-between;
    gap: 1rem;
  }

  .block {
    display: block;
    width: 100%;
  }


 .w-100{
    width: 100%;
  }

  .text-center {
    text-align: center;
  }


  

  

  
`;

export default GlobalStyle;
