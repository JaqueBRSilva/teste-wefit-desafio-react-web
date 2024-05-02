import styled from "styled-components"

export const ProductsContainer = styled.div`
    display: flex;
    gap: 1.2rem;
    align-items: center;   

    @media screen and (min-width: 992px){
        gap: 0.4rem;
    }
`

export const GroupContainer = styled.div`
    @media screen and (min-width: 992px){
        display: grid;
        justify-items: flex-end;
    }
`

export const ItemName = styled.p`
    display: none;

    @media screen and (min-width: 992px){
        display: flex;
        font-weight: 600;
        font-size: 1.2rem;
        color: var(--white);
    }
`

export const IconContainer = styled.div`
    @media screen and (min-width: 992px){
        margin: 0;
        margin-left: 1rem;
        justify-self: end;
    }
`

export const Icon = styled.img`
    height: 1.8rem;
    display: flex;
`