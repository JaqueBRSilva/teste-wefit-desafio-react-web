import { useEffect, useState } from "react"
import RELOAD_PAGE_IMG_LARGE from '../../assets/reload-page-img-lg.svg'
import RELOAD_PAGE_IMAGE from '../../assets/reload-page-img.svg'
import CustomButton from "../../components/CustomButton"
import LoadingSpinner from "../../components/LoadingSpinner"
import MovieCard from "../../components/MovieCard"
import { getMovies } from "../../services/movies"
import { MoviesProps } from "../../types/Movies"
import { ButtonContainer, ReloadPageContainer, ReloadPageImage, ReloadText } from "./styles"

const Home = () => {
    const [moviesList, setMoviesList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [reloadImage, setReloadImage] = useState('')

    const fetchMoviesList = async () => {
        setIsLoading(true)

        const movies = await getMovies()
        setMoviesList(movies)

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

    useEffect(() => {
        fetchMoviesList()
        onCheckWidthScreenSize()
    }, [])

    return (
        <>
            {
                (isLoading) ? (

                    <LoadingSpinner />

                ) : (moviesList.length == 0 && isLoading == false) ? (

                    <ReloadPageContainer>
                        <ReloadText>
                            Parece que não há nada por aqui :(
                        </ReloadText>

                        <ReloadPageImage
                            src={reloadImage}
                            alt="recarregar página"
                        />

                        <ButtonContainer>
                            <CustomButton
                                textContent="Recarregar página"
                                onClick={() => handleReloadPage()}
                            />
                        </ButtonContainer>
                    </ReloadPageContainer>

                ) : (

                    moviesList.map((movie: MoviesProps) => (
                        <MovieCard
                            id={movie.id}
                            image={movie.image}
                            title={movie.title}
                            price={(movie.price).toFixed(2).replace('.', ',')}
                        />
                    ))

                )}
        </>
    )
}

export default Home