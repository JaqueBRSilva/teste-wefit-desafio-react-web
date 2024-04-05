import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --semi-black: #2F2E41;
    --mid-grey: #999;
    --light-grey: #D9D9D9;
    --blue: #009EDD;
    --green: #039B00;

    
    background-color: var(--semi-black);

    @media screen and (min-width: 992px){ 
      margin: 0 10rem;
    }
  }

  * {
    margin: 0.2rem 0.1rem;
    padding: 0;
   
    font-family: "Open Sans", sans-serif, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  li {
    list-style: none
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
`