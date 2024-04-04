import { useContext, useEffect, useState } from "react"
import RELOAD_PAGE_IMG_LARGE from '../../assets/reload-page-img-lg.svg'
import RELOAD_PAGE_IMAGE from '../../assets/reload-page-img.svg'
import LoadingSpinner from "../../components/LoadingSpinner"
import MovieCard from "../../components/MovieCard"
import ReloadButton from "../../components/ReloadButton"
import SearchBar from "../../components/SearchBar"
import { MoviesListContext } from "../../contexts/MoviesList"
import { getMovies } from "../../services/movies"
import { MoviesProps } from "../../types/Movies"
import { ButtonContainer, GridContainer, ReloadPageContainer, ReloadPageImage, ReloadText } from "./styles"

const Home = () => {
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [reloadImage, setReloadImage] = useState('')
    const [search, setSearch] = useState('')
    const { movies, setMovies } = useContext(MoviesListContext)

    const fetchMoviesList = async () => {
        setIsLoading(true)

        const movies = await getMovies()
        setList(movies || [])
        setMovies(movies)

        setIsLoading(false)
    }

    const handleReloadPage = async () => {
        await window.location.reload()
    }

    const onCheckWidthScreenSize = () => {
        let widthSize = screen.width

        if (widthSize <= 576) {
            setReloadImage(RELOAD_PAGE_IMAGE)

        } else {
            setReloadImage(RELOAD_PAGE_IMG_LARGE)
        }
    }

    const getSearchResults = (results: []) => {
        setIsLoading(true)

        setTimeout(() => {

            setList([])
            setList(results)

            setIsLoading(false)

        }, 2 * 1000)

    }

    useEffect(() => {
        fetchMoviesList()
        onCheckWidthScreenSize()
    }, [])

    return (
        <>
            {
                (isLoading == true) ? (

                    <LoadingSpinner />

                ) : (list.length == 0) ? (

                    <ReloadPageContainer>
                        <ReloadText>
                            Parece que não há nada por aqui :(
                        </ReloadText>

                        <ReloadPageImage
                            src={reloadImage}
                            alt="recarregar página"
                        />

                        <ButtonContainer>
                            <ReloadButton
                                textContent="Recarregar página"
                                onClick={() => handleReloadPage()}
                            />
                        </ButtonContainer>
                    </ReloadPageContainer>

                ) : (list.length != 0) ? (

                    <>
                        <SearchBar
                            value={search}
                            onSearchResult={async (text) => getSearchResults(text)}
                        />

                        <GridContainer>
                            {
                                list.map((movie: MoviesProps) => (
                                    <MovieCard
                                        id={movie.id}
                                        image={movie.image}
                                        title={movie.title}
                                        price={(movie.price).toFixed(2).replace('.', ',')}
                                    />
                                ))
                            }
                        </GridContainer>
                    </>
                ) : null}
        </>
    )
}

export default Home