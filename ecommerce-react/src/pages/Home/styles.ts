import styled from "styled-components";

export const ReloadPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 75vh;
    padding: 2.1rem;
    background-color: var(--white);
    border-radius: 4px;
    align-items: center;
`

export const ReloadText = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
    margin-top: 1.7rem;
    margin-bottom: 1.5rem;
`

export const ReloadPageImage = styled.img`
    width: 90%;
    object-fit: contain;
   
    @media screen and (min-width: 992px) {
        width: 50%;
    }
`

export const ButtonContainer = styled.div`
    margin-top: 1.5rem;

    @media screen and (min-width: 992px) {
        margin-top: 0.5rem;
    }
`

export const MoviesGridContainer = styled.div`

    @media screen and (min-width: 992px){
        display: grid;
        grid-auto-flow: row; 
        grid-template-columns: repeat(auto-fill, minmax(344px, 1fr));
        column-gap: 1rem;
    }
`