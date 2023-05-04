import React, { useState, useContext } from 'react';
import Alert from '../Alert/Alert';
import './SearchBar.css';
import ShowsContext from '../../Context/Shows/ShowsContext';
import AlertsContext from '../../Context/Alerts/AlertsContext';

const SearchBar = () => {
  const [searchTv, setSearchTv] = useState('');
  const { searchShows } = useContext(ShowsContext);

  const { alert, setAlert } = useContext(AlertsContext);

  const onSearchHandler = (e) => {
    e.preventDefault();

    if (searchTv === "") {
      setAlert("Please Enter Something", "danger")
    }else {
      searchShows(searchTv);
    }
  }

  return (
    <div className='searchbar' >
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}
      <form className='searchbar_form' >
          <input type='text' placeholder='Search Here...' value={searchTv} onChange={(e) => setSearchTv(e.target.value)} />
          <button className='btn' onClick={onSearchHandler} >Search</button>
      </form>
    </div>
  )
}

export default SearchBar;