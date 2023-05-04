import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";

const SingleProduct = () => {
    const { productGet, loading, product, addToCart } = useGlobalContext();
    const {id} = useParams();
    const singleProduct = product;

    console.log("single product ", product);
    const isLoading = loading;
    
    useEffect(() => {
      const singleItem = productGet(id);
      console.log("productGet id ", singleItem);
    }, [])

    const Loading = () => {
        return(
            <div className='d-flex justify-content-center lead fs-2' >
                Loading...
            </div>
        )
    }

    const ShowProduct = () => {
        return(
          <>
              <div className='col-6 d-flex justify-content-center align-items-center my-5' >
                  <img className='my-5' height='400rem' width='300rem' src={singleProduct.image} alt={singleProduct.title} />
              </div>
              <div className='col-6 my-5' >
                  <h4 className='text-uppercase display-4 text-black-50 mt-5' >{singleProduct.category}</h4>
                  <h1 className='lead display-5' >{singleProduct.title}</h1>
                  <p className='lead' >
                      Rating {singleProduct.rating && singleProduct.rating.rate}<i className='fas fa-star' ></i>
                  </p>
                  <h3 className='display-6 fw-bold my-4' >$ {singleProduct.price}</h3>
                  <p className='lead fs-2' >{singleProduct.description}</p>
                  <div>
                      <button className='btn btn-outline-dark fs-4 my-2 me-2' onClick={() => {addToCart()}} >Order Now</button>
                      <NavLink to='/cart' className='btn btn-outline-dark fs-4 my-2 me-2' >Go To Order</NavLink>
                  </div>
              </div>
          </>
        )
    }

    return(
        <div className="product-container mt-5">
            <div className="container py-5" >
                <div className="row p-5" >
                    {isLoading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;