export interface MoviesProps {
    id?: string;
    image: string;
    title: string;
    price: number | any;
}

export interface IMoviesContext {
    movies: MoviesProps[];
    saveMovies: (movie: []) => void;
}

export type MoviesProvider_Props = {
    children: React.ReacNode
}
