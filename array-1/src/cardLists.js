import React from "react";

function CardItemLists({cards}) {

    return(
            <>
                {
                    cards.map((curEle) => {
                        const {id, movieName, imgSrc, releaseDate, aboutMovie} = curEle;
                        return(
                        <div className='col-12 col-md-6 col-lg-4 col-xl-3 my-3' key={id} >
                            <div className='card' >
                            <div className='card-body' >
                                <div className='image' >
                                <img src={imgSrc} alt="Card-Image" />
                                </div>
                                <div className='title' >Movie Title: <span>{movieName}</span></div>
                                <div className='releaseDate' >Movie Release Date: <span>{releaseDate}</span></div>
                                <div className='movieDesc' >Movie Description: <span>{aboutMovie}</span></div>
                                <a href="#" >
                                <button className='btn' >Watch Now</button>
                                </a>
                            </div>
                            </div>
                        </div>
                        )
                    })
                }
            </>
    )
}

export default CardItemLists;