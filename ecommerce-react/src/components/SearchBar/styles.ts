import styled from "styled-components"

export const SearchContainer = styled.form`
    display: flex;
    justify-content: center;
    margin: 0 1rem;
    margin-top: -1rem;
`

export const SearchInput = styled.input`
    margin-bottom: 0.6rem;
    padding: 1rem;
    border-radius: 8px;
    width: 100vw;
    height: 26px;
    z-index: 1;
    text-align: left;
    font-size: medium;
    font-weight: 400;
    
    &::placeholder {
        color: var(--mid-grey);
    }

    &:focus {
        border: 3px solid var(--blue);
    }
`

export const SearchButton = styled.button`
    background: transparent;
    border: none;
    width: 6rem;
    height: 4rem;
    flex: 1;
    position: absolute;
    right: 0;
    z-index: 99;
    
  @media screen and (min-width: 992px) {
    right: 10rem;
  }
`

export const SearchIcon = styled.img`
    width: 1.2rem;
`