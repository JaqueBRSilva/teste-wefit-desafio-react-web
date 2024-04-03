import styled from "styled-components";

export const ReloadPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 75vh;
    margin: 0 1.2rem;
    padding: 2.1rem;
    background-color: var(--white);
    border-radius: 4px;
    align-items: center;
`

export const ReloadText = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
    margin: 2rem 0;
`

export const ReloadPageImage = styled.img`
    width: 85%;
   
    @media screen and (min-width: 992px) {
        width: 55%;
    }
`

export const ButtonContainer = styled.div``