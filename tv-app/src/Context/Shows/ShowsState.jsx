import React from 'react';
import { useReducer } from 'react';
import ShowsContext from './ShowsContext';
import ShowsReducer from './ShowsReducer';
import { SEARCH_SHOWS, SET_LOADING, SET_SINGLE_SHOW, CLEAR_SINGLE_SHOW } from '../Types';
import axios from 'axios';

const ShowsState = ({children}) => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false,
  }

  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  const searchShows = async(searchTerm) => {
    dispatch({
      type: SET_LOADING
    });

    const { data } = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);

    console.log(data);

    dispatch({
      type: SEARCH_SHOWS,
      payload: data,
    });
  }

  const getSingleShow = async(id) => {
    dispatch({
      type: SET_LOADING,
    });

    const { data } = await axios.get(`http://api.tvmaze.com/shows/${id}`);

    console.log(data);

    dispatch({
      type: SET_SINGLE_SHOW,
      payload: data,
    })
  }

  const clearSingleShow = () => {
    dispatch({
      type: CLEAR_SINGLE_SHOW,
    })
  }

  return (
    <ShowsContext.Provider
        value={{
            shows: state.shows,
            singleShow: state.singleShow,
            loading: state.loading,
            searchShows,
            getSingleShow,
            clearSingleShow
        }}
    >
      {children}
    </ShowsContext.Provider>
  )
}

export default ShowsState;