import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #2F2E41;

    --white: #FFFFFF;
    --mid-grey: #999;
    --blue: #009edd;

    
    background-color: var(--background);

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