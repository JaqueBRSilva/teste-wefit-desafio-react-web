import styled from "styled-components"

export const SearchContainer = styled.form`
    display: flex;
    justify-content: center;
    margin-bottom: 0.7rem;
`

export const SearchInput = styled.input`
    padding: 1rem;
    border-radius: 8px;
    width: 100vw;
    height: 56px;
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
    height: 3.7rem;
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