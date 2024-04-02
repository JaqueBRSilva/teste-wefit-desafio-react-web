import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #2F2E41;

    --white: #FFFFFF;
    --mid-grey: #999;
  }

  * {
    margin: 0.2rem 0.1rem;
    padding: 0;
   
    font-family: "Open Sans", sans-serif, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  
    background-color: var(--background);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media screen and (min-width: 992px){
      margin: 0 2rem;
    }

  }

  li {
    list-style: none
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
`