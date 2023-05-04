import React from "react";

class Shopping extends React.Component {
    shopList = [
        {imgUrl: "./images/product-1.jpg", prodName: "SmartPhone", specifictn1: "8GB RAM", specifictn2: "128GB Internal Memory", prodBrandName: "Vivo-Android", prodPrice: "12000", prodCnt: "1", id: "1"},
        {imgUrl: "./images/product-2.jpg", prodName: "DSLR Camera", specifictn1: "Range 2-3 Km", specifictn2: "16GB Internal Memory", prodBrandName: "Nikon", prodPrice: "12000", prodCnt: "1", id: "2"},
        {imgUrl: "./images/product-3.jpg", prodName: "LCD TV", specifictn1: "52inch", specifictn2: "Multi-Tasking", prodBrandName: "Samsung", prodPrice: "17000", prodCnt: "1", id: "3"},
        {imgUrl: "./images/product-4.jpg", prodName: "Sound-Pot", specifictn1: "10inch height * 3inch diameter", specifictn2: "Bleutooth + head-Set Connector", prodBrandName: "JBL", prodPrice: "3000", prodCnt: "1", id: "4"},
        {imgUrl: "./images/product-5.jpg", prodName: "Front-Camera", specifictn1: "4inch height * 3inch diameter", specifictn2: "Bleutooth + head-Set + Loptop + Desktop Connector", prodBrandName: "Samsung", prodPrice: "3500", prodCnt: "1", id: "5"},
        {imgUrl: "./images/product-6.jpg", prodName: "SmartWatch", specifictn1: "Adjustable", specifictn2: "Multi-Tasking, Call-Receiver, Music-Player, Spots Features", prodBrandName: "MI", prodPrice: "2500", prodCnt: "1", id: "6"},
        {imgUrl: "./images/product-7.jpg", prodName: "Head-Set", specifictn1: "Wired & Wireless", specifictn2: "Bluetooth Connector", prodBrandName: "JBL", prodPrice: "1500", prodCnt: "1", id: "7"},
        {imgUrl: "./images/product-8.jpg", prodName: "SmartPhone", specifictn1: "8GB RAM", specifictn2: "128GB Internal Memory", prodBrandName: "Samsung-Android", prodPrice: "25000", prodCnt: "1", id: "8"},
        {imgUrl: "./images/product-9.jpg", prodName: "Front-Camera", specifictn1: "4inch height * 3inch diameter", specifictn2: "Bleutooth + head-Set Connector", prodBrandName: "Samsung", prodPrice: "2500", prodCnt: "1", id: "9"},
    ]
    constructor() {
        super();
        this.products = {
            lists: this.shopList,
        }
    }
    render() {
        return(
            <div className="container" >
                <div className="shop row" >
                    {this.products.lists.map((ele) => {
                        const {imgUrl, prodName, specifictn1, specifictn2, prodBrandName, prodPrice, prodCnt, id} = ele;
                        return (    
                            <div className="shop-container col-12 col-md-12 col-lg-6 col-xl-6" key= {id} >
                                <div className="shop-box row" >
                                    <div className="image col-12 col-md-12 col-lg-4" >
                                        <img src={imgUrl} alt={imgUrl} className="img-fluid pt-4" />
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-8" >
                                        <div className="main-title pt-4 pb-lg-3" >
                                            <p>Product Name: <span>{prodName}</span></p>
                                            <p>Product Specification: <span>{specifictn1} {specifictn2}</span></p>
                                            <p>Product Company: <span>{prodBrandName}</span></p>
                                        </div>
                                        <div className="main-price-book" >
                                            <div className="price-book-divide d-flex justify-content-between align-items-center" >
                                                <p>Product Price: <span>{prodPrice}</span></p>
                                                <a href="#" >
                                                    <button className="btn m-3" >Order Now</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Shopping;