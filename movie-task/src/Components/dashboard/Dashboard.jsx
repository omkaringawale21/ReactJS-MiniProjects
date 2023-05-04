import React, { useState } from 'react';
import AddMoviePage from '../AddMoviePage/AddMoviePage';
import Header from '../header/Header';
import MovieListsPage from '../MovieListsPage/MovieListsPage';

const Dashboard = ({ loginShow, setLoginPageLoading, loginPageLoading, show }) => {
    const [movie, setMovie] = useState({
        showAddMoviePage: true,
        showMovieListsPage: false,
    })

    return (
        <>
            <Header 
                loginShow={loginShow} 
                setLoginPageLoading={setLoginPageLoading} 
                loginPageLoading={loginPageLoading} 
            />
            {
                movie.showAddMoviePage && 
                <AddMoviePage 
                    showAddMoviePage={movie.showAddMoviePage} 
                    showMovieListsPage={movie.showMovieListsPage}   
                    setMovie={setMovie}     
                    movie={movie} 
                />
            }
            {
                movie.showMovieListsPage && 
                <MovieListsPage 
                    showAddMoviePage={movie.showAddMoviePage} 
                    showMovieListsPage={movie.showMovieListsPage} 
                    setMovie={setMovie}     
                    movie={movie} 
                />
            }
        </>
    )
}

export default Dashboard;