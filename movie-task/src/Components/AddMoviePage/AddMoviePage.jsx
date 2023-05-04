import React, { useState } from 'react';
import './AddMoviePage.css';

const AddMoviePage = ({ showAddMoviePage, showMovieListsPage, setMovie, movie }) => {
    const [addMovies, setAddMovies] = useState({
        id: "",
        movieName: "",
        moviePrice: "",
        movieCategory: "",
        movieUrl: "",
        movieData: [],
    })

    const moviesInformation = () => {
        setAddMovies({
            ...addMovies,
            movieData: addMovies.movieData,
        })
    }

    const handleMovieOnChange = (e) => {
        const {name, value} = e.target;
        setAddMovies({
            ...addMovies,
            [name]: value,
        })
    }

    const handleSelectOnChange = (e) => {
        const selectOnChange = e.target.value;
        console.log(selectOnChange);
        setAddMovies({
            ...addMovies,
            movieCategory: selectOnChange,
        })
    }

    const moviesAddForm = () => {
        setMovie({
            ...movie,
            showAddMoviePage: true,
            showMovieListsPage: false,
        })
    }

    const moviesListsDetails = () => {
        setMovie({
            ...movie,
            showAddMoviePage: false,
            showMovieListsPage: true,
        })
    }

    const handleAddMovie = () => {
        const newArray = [
            ...addMovies.movieData,
            {
                id: Date.now(),
                movieName: addMovies.movieName,
                moviePrice: addMovies.moviePrice,
                movieCategory: addMovies.movieCategory,
                movieUrl: addMovies.movieUrl,
            },
        ]           
        setAddMovies({
            ...addMovies,
            movieData: newArray,
            id: "",
            movieName: "",
            moviePrice: "",
            movieCategory: "",
            movieUrl: "",
        })
        console.log(addMovies.movieData);
    }

    return (
        <div>
            <div className='btns-container' >
                <div className="container" >
                    <div className="row" >
                        <div className="col-2 btns-dtls" >
                            <button type='button' onClick={moviesAddForm} >AddMovies</button>
                            <button type='button' onClick={moviesListsDetails} >MoviesLists</button>
                        </div>
                    
                        <div className="col-10 form-container" >
                            <div className="row" >
                                <div className="col-6 form-dlts" >
                                    <form className='was-validated' >
                                        <h3>Add Movie Details</h3>

                                        <div>
                                            <label htmlFor='movieName' className='form-label' >Movie Name:</label>
                                            <input type="text" className='form-control' name='movieName' value={addMovies.movieName} onChange={handleMovieOnChange} required />
                                            <div className="valid-feedback">Valid.</div>
                                            <div className="invalid-feedback">Please fill out this field.</div>
                                        </div>

                                        <div>
                                            <label htmlFor='moviePrice' className='form-label' >Movie Price:</label>
                                            <input type="text" className='form-control' name='moviePrice' value={addMovies.moviePrice} onChange={handleMovieOnChange} required />
                                            <div className="valid-feedback">Valid.</div>
                                            <div className="invalid-feedback">Please fill out this field.</div>
                                        </div>

                                        <div className='my-3' >
                                            <label>Choose State:</label>
                                                <select onChange={handleSelectOnChange} className="form-select" aria-label="Default select example">
                                                    <option value="English">English</option>
                                                    <option value="Hindi">Hindi</option>
                                                    <option value="Marathi">Marathi</option>
                                                </select>
                                        </div>


                                        <div>
                                            <label htmlFor='movieUrl' className='form-label' >Movie Url:</label>
                                            <input type="text" className='form-control' name='movieUrl' value={addMovies.movieUrl} onChange={handleMovieOnChange} required />
                                            <div className="valid-feedback">Valid.</div>
                                            <div className="invalid-feedback">Please fill out this field.</div>
                                        </div>

                                        <div className='btns' >
                                            <button type='button' className='btn' onClick={handleAddMovie} >Add</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMoviePage;