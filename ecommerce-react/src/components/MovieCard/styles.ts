import styled from "styled-components"

export const CardContainer = styled.div`
    display: flex;
    margin: 0 1rem;
    justify-content: center;

    @media screen and (min-width: 992px) {
        margin: 0;
    }
`

export const MovieCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 328px;
    min-height: 30vh;
    border-radius: 4px;
    padding: 1.2rem;
    background-color: var(--white);
    margin-bottom: 1rem;

    @media screen and (min-width: 992px) {
        min-width: 28rem;
        min-height: 24rem;
    }
`

export const MoviePoster = styled.img`
    height: 12rem;

    @media screen and (min-width: 992px) {
        height: 15rem;
    }
`

export const MovieTitle = styled.p`
    font-size: 0.9rem;
    font-weight: 700;
`

export const MoviePrice = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0.3rem 0;
`