import styled from "styled-components"

export const ButtonMain = styled.button`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 2.7rem;
    border-radius: 4px;
    border-color: transparent;
    align-items: center;
    justify-content: center;
    background-color: var(--blue);
    transition-delay: 0.5ms; 

    &:hover {
        transition-duration: 0.6s;
    }
`

export const ButtonMainActive = styled.button`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 2.7rem;
    border-radius: 4px;
    border-color: transparent;
    align-items: center;
    justify-content: center;
    background-color: var(--green);
    transition-delay: 0.5ms; 

    &:hover {
        transition-duration: 0.6s;
    }
`

export const ButtonLeftCartContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
`

export const ButtonLeftCartIcon = styled.img`
    width: 0.9rem;
`

export const ButtonLeftNumber = styled.p`
    font-size: 0.7rem;
    color: var(--white);
`

export const ButtonText = styled.p`
    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
    color: var(--white);
`