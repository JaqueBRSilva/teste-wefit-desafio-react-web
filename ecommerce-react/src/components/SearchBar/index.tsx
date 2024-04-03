import { useContext, useState } from "react"
import styled from "styled-components"
import MAGNIFYING_GLASS_BLACK from '../../assets/magnifying-glass-black.png'
import MAGNIFYING_GLASS from '../../assets/magnifying-glass.png'
import { MoviesListContext } from "../../contexts/MoviesList"
import { GridContainer } from "../../pages/Home/styles"
import { MoviesProps } from "../../types/Movies"
import LoadingSpinner from "../LoadingSpinner"
import MovieCard from "../MovieCard"

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 1rem;
    margin-top: -1rem;
`

const SearchInput = styled.input`
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

const SearchButton = styled.button`
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

const SearchIcon = styled.img`
    width: 1.2rem;
`


function SearchBar() {
    const [contentSearch, setContentSearch] = useState('')
    const [moviesSearched, setMoviesSearched] = useState([])
    const [iconChange, setIconChange] = useState(MAGNIFYING_GLASS)
    const [isLoading, setIsLoading] = useState(false)

    const { movies } = useContext(MoviesListContext)

    const onChangeIcon = () => {
        if (contentSearch.length !== 0) {
            setIconChange(MAGNIFYING_GLASS_BLACK)
        } else {
            setIconChange(MAGNIFYING_GLASS)
        }
    }

    const handleSearchMovieByTitle = (title: string) => {
        setIsLoading(true)

        const movieResult: [] | any = movies.filter((movie: MoviesProps) => movie.title.toLowerCase().includes((title.toLowerCase())))
        setMoviesSearched(movieResult)

        setIsLoading(false)
    }

    return (
        <>
            <SearchContainer>
                <SearchInput
                    placeholder="Buscar filme pelo nome"
                    value={contentSearch}
                    onChange={(event) => {
                        setContentSearch(event.target.value)
                        onChangeIcon()
                    }}
                    onBlur={event => handleSearchMovieByTitle(event.target.value)}
                    type="text"
                    enterKeyHint={"search"}
                />

                <SearchButton type="submit"
                    onClick={() => handleSearchMovieByTitle(contentSearch)}
                >
                    <SearchIcon src={iconChange} />
                </SearchButton>
            </SearchContainer>

            {
                (isLoading == true) ? (

                    <LoadingSpinner />

                ) : (moviesSearched.length != 0) ? (

                    <GridContainer>
                        {
                            moviesSearched.map((movie: MoviesProps) => (
                                <MovieCard
                                    id={movie.id}
                                    image={movie.image}
                                    title={movie.title}
                                    price={(movie.price).toFixed(2).replace('.', ',')}
                                />
                            ))
                        }
                    </GridContainer>

                ) : null}
        </>
    )
}

export default SearchBar