import { createContext, useState } from 'react'

export const MoviesListContext = createContext({})

function MoviesProvider({ children }) {
    const [movies, setMovies] = useState([])

    return (
        <MoviesListContext.Provider value={{ movies, setMovies }} >
            {children}
        </MoviesListContext.Provider>
    )
}

export default MoviesProvider