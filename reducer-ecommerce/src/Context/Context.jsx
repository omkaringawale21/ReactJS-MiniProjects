import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import ShowReducer from "../Reducer/ShowReducer";
import { DELETE_CART_DETAILS, SHOW_CART_DETAILS, SHOW_ERROR, SHOW_LOADING, SHOW_PRODUCT, SHOW_PRODUCTS, UPDATE_CART_DETAILS } from "../Reducer/Types";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const initialStates = {
        products: [],
        product: {},
        cartLists: [],
        loading: false,
        isError: false,
    }

    const [state, dispatch] = useReducer(ShowReducer, initialStates);

    const [filterData, setFilterData] = useState(state.products);

    const [searchQuery, setSearchQuery] = useState("");

    const productsGet = async () => {
        dispatch({
            type: SHOW_LOADING,
        })

        const dataLists = await axios.get('https://fakestoreapi.com/products');

        console.log("Products Url : ", dataLists.data);

        setFilterData(dataLists.data);

        dispatch({
            type: SHOW_PRODUCTS,
            payload: dataLists.data,
        })
    }

    const productGet = async (id) => {
        dispatch({
            type: SHOW_LOADING,
        })

        const dataList = await axios.get(`https://fakestoreapi.com/products/${id}`);

        console.log("Product Url : ", dataList.data);

        dispatch({
            type: SHOW_PRODUCT,
            payload: dataList.data,
        })
    }

    const addToCart = async () => {
        const request = {
            ...state.product,
            qty: 1,
        }

        await axios.post('http://localhost:3000/orders', request)
        .then(response => console.log("Post Data : ",response.data))
        .catch(err => console.log("Error : ", err));
    }

    const getCartDetails = async () => {
        dispatch({
            type: SHOW_LOADING,
        })

        await axios.get('http://localhost:3000/orders')
        .then(res => 
                dispatch({
                    type: SHOW_CART_DETAILS,
                    payload: res.data,
                })
            )
            .catch(err => console.log("getCartDetails Error : ", err))
    }

    const deleteCartItem = async (id) => {
        await axios.delete(`http://localhost:3000/orders/${id}`)
        .then(response => console.log('Delete response ', response.data))
        .catch(err => console.log('Delete Error ', err));

        const deleteCart = state.cartLists.filter((curEle) => {
            return curEle.id !== id;
        })

        dispatch({
            type: DELETE_CART_DETAILS,
            payload: deleteCart,
        })
    }

    const filterProduct = (category) => {
        const updatedItem = state.products.filter((curEle) => {
            return curEle.category == category;
        })

        setFilterData(updatedItem);
        
        console.log("FILTER_PRODUCT", filterData);
    }

    const incrementQty = async (id) => {
        const exits = state.cartLists.find((curEle) => curEle.id === id);

        console.log("incrementQty exits ", exits);

        let updateDetails;
        let updateRequest;
        if (exits) {
            updateDetails = state.cartLists.map((curEle) => curEle.id === id && curEle.qty <= 4 ? {...curEle, qty: curEle.qty + 1} : curEle);
        }

        updateRequest = updateDetails.find((curEle) => curEle.id === id);

        console.log("incrementQty updateDetails ", updateRequest);

        await axios.put(`http://localhost:3000/orders/${id}`, updateRequest)
        .then(req => console.log("incrementQty request ", req.data))
        .catch(err => console.log("incrementQty err ", err))

        dispatch({
            type: UPDATE_CART_DETAILS,
            payload: updateDetails,
        })
    }

    const decrementQty = async (id) => {
        const exits = state.cartLists.find((curEle) => curEle.id === id);

        console.log("decrementQty exits ", exits);

        let updateDetails;
        let updateRequest;
        if (exits) {
            updateDetails = state.cartLists.map((curEle) => curEle.id === id && curEle.qty >= 1 ? {...curEle, qty: curEle.qty - 1} : curEle);
        }

        updateRequest = updateDetails.find((curEle) => curEle.id === id);

        console.log("decrementQty updateDetails ", updateRequest);

        await axios.put(`http://localhost:3000/orders/${id}`, updateRequest)
        .then(request => console.log("incrementQty request ", request.data))
        .catch(err => console.log("incrementQty err ", err))

        dispatch({
            type: UPDATE_CART_DETAILS,
            payload: updateDetails,
        })
    }

    useEffect(() => {
        productsGet();
        getCartDetails();
    }, [])

    return <AppContext.Provider value={{
        loading: state.loading,
        products: state.products,
        product: state.product,
        cartLists: state.cartLists,
        productGet,
        addToCart,
        getCartDetails,
        deleteCartItem,
        filterProduct,
        filterData,
        setFilterData,
        incrementQty,
        decrementQty,
        searchQuery,
        setSearchQuery,
    }} >{children}</AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };