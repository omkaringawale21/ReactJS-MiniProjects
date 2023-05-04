import React, { useState } from 'react';
import Data from './data.js';
import CardItemLists from './cardLists.js';
import ButtonItems from './buttonList.js';

const buttonCategaryList = [ ... new Set(Data.map((curElem) => curElem.movieCategory)), "All"];
console.log(buttonCategaryList);

function App() {
  const [movies, setMovies] = useState(Data);
  const [buttonItems, setButtonItems] = useState(buttonCategaryList);

  const filterMovie = (categary) => {
    if (categary === "All") {
      setMovies(Data);
      return;
    }
    const udatedMovie = Data.filter((curEle) => {
      return curEle.movieCategory === categary;
    })
    setMovies(udatedMovie);
  }

  return (
      <div className='container' >
        <div className='row' >
          <div className='col-12' >
            <div className="row">
              <div className="col-12 heading text-center">Netfilx Movies<hr/></div>
            </div>
            <div className="row my-4 btn-container" >
              <ButtonItems buttonItems={buttonItems} filterMovie={filterMovie} />
            </div>
            <div className='row my-5' >
              <CardItemLists cards={movies} />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
