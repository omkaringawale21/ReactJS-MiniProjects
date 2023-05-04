import React from "react";

function MenuItems({items}) {
    return(
        <div className='container mt-5' >
            <div className='row box-container' >
                <div className='col-12 my-5'>
                    <div className="row box" >
                    {
                        items.map((elems) => {
                            const {id, image, name, price, description} = elems;
                            return(
                                <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 p-4" key={id} >
                                    <div className="row item-inside" >
                                        <div className="col-12 col-md-12 col-lg-4 img-div" >
                                            <img src={image} alt='food-images' className='img-fluid mt-3' />
                                        </div>
                                        <div className='col-12 col-md-12 col-lg-8' >
                                            <div className='main-title pt-4 pb-3' >
                                            <h1 className='heading' >{name}</h1>
                                            <p className='desciptn' >{description}</p>
                                            </div>
                                            <div className="menu-price-book" >
                                            <div className="price-book-divide d-flex justify-content-between" >
                                                <h2 className='price' >{price}</h2>
                                                <a href='#' >
                                                <button className='btn' >Order Now</button>
                                                </a>
                                            </div>
                                            </div>
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
    )
}

export default MenuItems;