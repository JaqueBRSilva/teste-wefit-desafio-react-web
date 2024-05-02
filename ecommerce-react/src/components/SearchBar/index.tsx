import { useContext, useState } from "react"
import styled from "styled-components"
import MAGNIFYING_GLASS_BLACK from '../../assets/magnifying-glass-black.png'
import MAGNIFYING_GLASS from '../../assets/magnifying-glass.png'
import { MoviesListContext } from "../../contexts/MoviesListContext"
import { MoviesProps } from "../../types/Movies"
import { SearchBarProps } from "../../types/SearchBar"
import { SearchButton, SearchContainer, SearchIcon, SearchInput } from "./styles"


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