import React, { useEffect, useContext } from 'react';
import ShowsContext from '../Context/Shows/ShowsContext';
import { NavLink, useParams } from "react-router-dom";
import '../Components/ItemLists/ItemLists.css';

const SinglePage = () => {
  const { getSingleShow, singleShow, loading, shows } = useContext(ShowsContext);
  const {id} = useParams();

  // useEffect(() => {
  //   getSingleShow(id);
  // }, []);

  const filterItem = shows.filter((curEle) => {
    return curEle.show.id == id;
  })

  console.log(filterItem);

  return (
    <>
      {/* {loading ? 
      (<h2>Loading...</h2>) : 
      (
        <div className='singlePage' key={singleShow.id} >
          <img src={singleShow} alt={singleShow} />
          <div className='singlePage_info' >
            <h3>{singleShow.name}</h3>
            <p>
              <strong>Premiered:</strong> {singleShow.premiered}
            </p>
            <p>
              <strong>OTT Platform:</strong> {singleShow}
            </p>
          </div>
        </div>
      )} */}
      {loading ? 
      (<h2>Loading...</h2>) : 
      (
        <div className='pageDetailsSingle' >
          {
            filterItem.map((item) => {
              return(
                <div className='singlePage' key={item.show.id} >
                  <img src={item.show.image.medium} alt={item.show.image.medium} />
                  <div className='singlePage_info' >
                    <h3>{item.show.name}</h3>
                    <p>
                      <strong>Premiered:</strong> {item.show.premiered}
                    </p>
                    <p>
                      <strong>Language:</strong> {item.show.language}
                    </p>
                    <NavLink to='/' >To Home</NavLink>
                  </div>
                </div>
              )
            })
          }
        </div>
      )}
    </>
  )
}

export default SinglePage;