import { useContext, useEffect, useState } from "react"
import RELOAD_PAGE_IMG_LARGE from '../../assets/reload-page-img-lg.svg'
import RELOAD_PAGE_IMAGE from '../../assets/reload-page-img.svg'
import DefaultButton from "../../components/DefaultButton"
import LoadingSpinner from "../../components/LoadingSpinner"
import MovieCard from "../../components/MovieCard"
import SearchBar from "../../components/SearchBar"
import { MoviesListContext } from "../../contexts/MoviesListContext"
import { getMovies } from "../../services/movies"
import { MoviesProps } from "../../types/Movies"
import { ButtonContainer, MoviesGridContainer, ReloadPageContainer, ReloadPageImage, ReloadText } from "./styles"

const Home = () => {
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [reloadImage, setReloadImage] = useState('')
    const { saveMovies } = useContext(MoviesListContext)
    const search = ''

    const fetchMoviesList = async () => {
        setIsLoading(true)

        const movies = await getMovies()
        setList(movies || [])
        saveMovies(movies)

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
        }, 1.2 * 1000)

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
                            <DefaultButton
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

                        <MoviesGridContainer>
                            {
                                list.map((movie: MoviesProps) => (
                                    <MovieCard
                                        key={movie.id}
                                        image={movie.image}
                                        title={movie.title}
                                        price={movie.price}
                                    />
                                ))
                            }
                        </MoviesGridContainer>
                    </>
                ) : null}
        </>
    )
}

export default Home