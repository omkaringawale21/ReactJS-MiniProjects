import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";
import "./Products.css";

const Products = () => {
    const { products, loading, filterProduct, filterData, setFilterData, searchQuery, setSearchQuery } = useGlobalContext();

    const Loading = () => {
        return(
            <div className='d-flex justify-content-center align-items-center fs-2' >
                Loading...
            </div>
        )
    }

    const ShowProducts = () => {
        return(
            <>
                <div className="col-12" >
                    <div className="row" >
                    {filterData
                    .filter((item) => 
                        searchQuery.toLowerCase() === "" ? item : item.category.toLowerCase().includes(searchQuery)
                    )
                    .map((product) => {
                        return(
                                <div className="item1 col-sm-12 col-md-6 col-lg-4 col-xl-3 p-4" key={product.id} >
                                    <div className="card h-100 text-center p-4 mb-4" >
                                        <img src={product.image} className="card-img-top" alt={product.title} height='250px' />
                                        <div className="card-body" >
                                            <h5 className="card-title display-6" >{product.title.substring(0, 10)}...</h5>
                                            <p className="card-text lead fw-bold display-7" >${product.price}</p>
                                            <NavLink to={`/singleproduct/${product.id}`} className='btn btn-primary text-white py-3 fs-5 mx-5 fw-bold' >Buy Now</NavLink>
                                        </div>
                                    </div>
                                </div>
                            
                        )
                    })}
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="products-container">
            <div className="container my-5 py-5" >
                <div className="row" >
                    <div className="col-12 my-5" >
                        <h1 className='display-4 lead fw-bolder text-center' >
                            Latest Products
                            <hr />
                        </h1>
                    </div>
                </div>
                <div className="row p-5" >
                    <div className="col-12 d-flex justify-content-between align-items-center" >
                        <button className="btn btn-outline-dark fs-4" onClick={() => setFilterData(products)} >All</button>
                        <button className="btn btn-outline-dark fs-4" onClick={() => filterProduct("men's clothing")} >Men's Clothing</button>
                        <button className="btn btn-outline-dark fs-4" onClick={() => filterProduct("women's clothing")} >Women's Clothing</button>
                        <button className="btn btn-outline-dark fs-4" onClick={() => filterProduct("jewelery")} >Jewelery</button>
                        <button className="btn btn-outline-dark fs-4" onClick={() => filterProduct("electronics")} >Electronics</button>
                    </div>
                </div>
                <div className="row" >
                    {
                        loading ? 
                        <Loading /> 
                        : 
                        <ShowProducts />
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;
