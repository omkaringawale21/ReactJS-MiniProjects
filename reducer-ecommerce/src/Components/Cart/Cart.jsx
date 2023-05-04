import { useEffect } from 'react';
import { useGlobalContext } from '../../Context/Context';

const Cart = () => {
  const { cartLists, loading, deleteCartItem, getCartDetails, incrementQty, decrementQty } = useGlobalContext();
  const isLoading = loading;

  const cartDtls = cartLists;
  console.log("cartDtls ", cartDtls);

  useEffect(() => {
    getCartDetails();
  }, [])

  const Loading = () => {
    return(
      <div className='d-flex justify-content-center lead fs-2' >
          Loading...
      </div>
    )
  }

  const EmptyCart = () => {
    return(
      <div className='d-flex justify-content-center lead display-2 mt-5 p-5' height='200rem' width='200rem' >
          No Orders Add To Yet Here...
      </div>
    )
  }

  const ShowCartDetails = () => {
    return(
      <div className='container my-5' >
      {cartDtls.map((curEle) => {
        return(
          <div className='row my-5' key={curEle.id} >
            <div className='col-6 d-flex justify-content-center align-items-center p-3' >
              <img  height='300rem' width='250rem' src={curEle.image} alt={curEle.title} />
            </div>
            <div className='col-6 p-3' >
              <h1 className='display-6 lead' >
                {curEle.title}
              </h1>
              <p className='display-4 text-secondary' >
                {curEle.title}
              </p>
              <p className='fs-3' >
                {curEle.rating.rate}<i className='fas fa-star text-warning' ></i>
              </p>
              <p className='fw-bold display-6' >
                ${curEle.price}
              </p>
              <p className='quantity fs-3 lead' >
                Quantity: {curEle.qty}
              </p>
              <div className='my-4 d-flex align-items-center' >
                <button className='btn plus-btn btn-outline-dark me-2' onClick={() => {incrementQty(curEle.id)}} >
                  <i className='fas fa-plus' ></i>
                </button>
                <button className='btn minus-btn btn-outline-dark me-2' onClick={() => {decrementQty(curEle.id)}} >
                  <i className='fas fa-minus' ></i>
                </button>
              </div>
              <button className='btn btn-danger px-3 fs-4' onClick={() => {deleteCartItem(curEle.id)}} >
                Delete
              </button>
            </div>
          </div>
        )
      })}
      </div>
    )
  }

  return (
    <div className="cart-container mt-5">
        <div className="container py-5" >
            <div className="row p-5" >
                {
                  isLoading ? 
                  <Loading />
                  : 
                  cartDtls.length === 0 ?
                  <EmptyCart /> 
                  :
                  <ShowCartDetails />
                }
            </div>
        </div>
    </div>
  )
}

export default Cart;