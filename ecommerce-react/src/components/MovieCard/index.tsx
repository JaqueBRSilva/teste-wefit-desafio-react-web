import styled from "styled-components";
import { MoviesProps } from "../../types/Movies";
import AddToCartButton from "../AddToCartButton";

const CardContainer = styled.div`
    display: flex;
    margin: 0 1rem;
    justify-content: center;

    @media screen and (min-width: 992px) {
        margin: 0;
    }

`

const MovieCardContainer = styled.div`
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

const MoviePoster = styled.img`
    height: 12rem;

    @media screen and (min-width: 992px) {
        height: 15rem;
    }
`

const MovieTitle = styled.p`
    font-size: 0.9rem;
    font-weight: 700;
`

const MoviePrice = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0.3rem 0;
`

function MovieCard({ ...props }: MoviesProps) {

    return (
        <CardContainer>
            <MovieCardContainer>
                <MoviePoster
                    src={props.image}
                    alt={`Capa ${props.title}`}
                />

                <MovieTitle>{props.title}</MovieTitle>

                <MoviePrice>R$ {props.price}</MoviePrice>

                <AddToCartButton
                    textContent="ADICIONAR AO CARRINHO"
                />
            </MovieCardContainer>
        </CardContainer>
    )
}

export default MovieCard