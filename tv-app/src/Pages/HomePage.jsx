import React, { useContext } from 'react';
import SearchBar from '../Components/SearchBar/SearchBar';
import ShowsContext from '../Context/Shows/ShowsContext';
import ItemLists from '../Components/ItemLists/ItemLists';
import '../Components/ItemLists/ItemLists.css';

const HomePage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;

  return (
    <div className='homePage' >
        <SearchBar />
        {
          loading ? (
            <h2>Loading...</h2>
          ) :
          (
            <div className='ItemList_Data' >
              {shows.map((item) => (
                <ItemLists
                  key={item.show.id}
                  id={item.show.id}
                  image={item.show.image.medium}
                  name={item.show.name}
                  rating={item.show.rating.average ? item.show.rating.average : "No Rating"}
                />
              ))}
            </div>
          )
        }
    </div>
  )
}

export default HomePage;