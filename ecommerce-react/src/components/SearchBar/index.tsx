import { useContext, useState } from "react"
import styled from "styled-components"
import MAGNIFYING_GLASS_BLACK from '../../assets/magnifying-glass-black.png'
import MAGNIFYING_GLASS from '../../assets/magnifying-glass.png'
import { MoviesListContext } from "../../contexts/MoviesList"
import { MoviesProps } from "../../types/Movies"
import { SearchBarProps } from "../../types/SearchBar"

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

function SearchBar({ ...props }: SearchBarProps) {
    const [iconChange, setIconChange] = useState(MAGNIFYING_GLASS)
    const [contentSearch, setContentSearch] = useState('')
    const { movies } = useContext(MoviesListContext)

    const onChangeIcon = () => {
        if (contentSearch.length !== 0) {
            setIconChange(MAGNIFYING_GLASS_BLACK)
        } else {
            setIconChange(MAGNIFYING_GLASS)
        }
    }

    const handleSearchMovieByTitle = (title: string) => {
        const movieResult: [] | any = movies.filter((movie: MoviesProps) => movie.title.toLowerCase().includes((title.toLowerCase())))
        props.onSearchResult(movieResult)
    }

    return (
        <SearchContainer>
            <SearchInput
                placeholder="Buscar filme pelo nome"
                value={contentSearch}
                onChange={(event) => {
                    onChangeIcon()
                    setContentSearch(event.target.value)
                }}
                onBlur={event => handleSearchMovieByTitle(event.target.value)}
                type="text"
                enterKeyHint={"send"}
            />

            <SearchButton type="submit"
                onClick={() => handleSearchMovieByTitle(contentSearch)}
            >
                <SearchIcon src={iconChange} />
            </SearchButton>
        </SearchContainer>
    )
}

export default SearchBar