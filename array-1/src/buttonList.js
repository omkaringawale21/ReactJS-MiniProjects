import React from "react";

function ButtonItems({buttonItems, filterMovie}) {
    return(
        <div className="col-12 d-flex justify-content-around" >
            {
                buttonItems.map((curElem, index) => {
                    return(
                        <button className='btn' key={index} onClick={() => filterMovie(curElem)} >{curElem}</button>
                    )
                })
            }
            {/* <button className='btn' onClick={() => filterMovie('Thriller')} >Thriller</button>
            <button className='btn' onClick={() => filterMovie('Action')} >Action</button>
            <button className='btn' onClick={() => filterMovie('Family')} >Family</button>
            <button className='btn' onClick={() => setMovies(Data)} >All</button> */}
        </div>
    )
}

export default ButtonItems;