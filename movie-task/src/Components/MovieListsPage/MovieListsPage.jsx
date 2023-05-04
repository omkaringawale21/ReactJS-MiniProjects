import React, { useState } from 'react';
import MovieDetails from './Context/Context';
import './MovieListsPage.css';

const MovieListsPage = ({ showAddMoviePage, showMovieListsPage, setMovie, movie }) => {
    const [movieInfo, setMovieInfo] = useState(MovieDetails);
    console.log(movieInfo);

    const filterItem = (category) => {
        const updatedItem = MovieDetails.filter((curEle) => {
            return curEle.movieCategory == category;
        })

        setMovieInfo(updatedItem);
    }

    const moviesAddLists = () => {
        setMovie({
            ...movie,
            showAddMoviePage: true,
            showMovieListsPage: false,
        })
    }

    const moviesDetails = () => {
        setMovie({
            ...movie,
            showAddMoviePage: false,
            showMovieListsPage: true,
        })
    }
    
    return (
        <div>
            <div className='btns-container' >
                <div className="container" >
                    <div className="row" >
                        <div className="col-2 btns-dtls" >
                            <button type='button' onClick={moviesAddLists} >AddMovies</button>
                            <button type='button' onClick={moviesDetails} >MoviesLists</button>
                        </div>
                        <div className="col-10 movie-details" >
                            <h3>Movies</h3>
                            <div className='btns-box' >
                                <button type='button' className='btn' onClick={() => setMovieInfo(MovieDetails)} >All</button>
                                <button type='button' className='btn' onClick={() => filterItem("English")} >English</button>
                                <button type='button' className='btn' onClick={() => filterItem("Hindi")} >Hindi</button>
                                <button type='button' className='btn' onClick={() => filterItem("Marathi")} >Marathi</button>
                            </div>
                        </div>
                    </div>

                    <div className='row lists-movies' >
                        <div className='col-12' >
                            <div className="row">
                            {
                                    movieInfo.map((curEle) => {
                                        return(
                                            <div className='movies col-12 col-md-6 col-lg-6 col-xl-4 p-4' key={curEle.id} >
                                                <div className='card my-2' >
                                                    <div className="card-body" >
                                                        <div className="image" >
                                                            <img src={curEle.movieUrl} alt={curEle.movieUrl} />
                                                        </div>
                                                        <h4>Movie Name: {curEle.movieName}</h4>
                                                        <p>Movie Price: {curEle.moviePrice}</p>
                                                        <p>Movie Language: {curEle.movieCategory}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>                
            </div>
        </div>
    )
}

export default MovieListsPage;