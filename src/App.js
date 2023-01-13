import {useEffect, useState} from 'react'
import MovieCard from './MovieCard'
import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com/?apikey=d4b0a634'
const movie1 = {
    "Title": "Who Killed the Electric Car?",
    "Year": "2006",
    "imdbID": "tt0489037",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc1MTM0MTA2N15BMl5BanBnXkFtZTcwMTk1OTIzMQ@@._V1_SX300.jpg"
}

const App = () => {

    const [movies, setMovies] = useState([])
    const [searchMovie, setSearchMovie] = useState('')

    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`)
        const data = await res.json()
        console.log(data.Search)
        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('Car')
    }, [])

    return ( 
        <div className='app'>
            <h1>Movie Search</h1>
            <div className='search'>
                <input 
                    onChange={(e) => setSearchMovie(e.target.value)}
                    value={searchMovie}
                    placeholder='Tape here to search for a movie'/>

                <img src={SearchIcon} alt='Search' title='Search' onClick={() => searchMovies(searchMovie)}/>
            </div>
            {
                movies?.length > 0 
                ? (
                    <div className='container'>
                        { movies.map((movie) => (
                                <MovieCard key={movie.imdbID} movie={movie}></MovieCard>
                            ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>Nachfa da3waa Akhi !</h2>
                    </div>
                )
            }
        </div>
    )
}

export default App