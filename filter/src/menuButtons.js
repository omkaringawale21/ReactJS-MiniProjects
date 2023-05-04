import React from "react";

function ButtonLists({filterItem, foodCartItems}) {
    return (
        <div className='menu-tabs container' >
            <div className='menu-tab d-flex justify-content-around' >
                {
                    foodCartItems.map((curElems, index) => {
                        return <button className='btn' key={index} onClick={() => filterItem(curElems)} >{curElems}</button>
                    })
                }

                {/* <button className='btn' onClick={() => filterItem('Breakfast')} >Breakfast</button>
                <button className='btn' onClick={() => filterItem('Lunch')} >Lunch</button>
                <button className='btn' onClick={() => filterItem('Dinner')} >Dinner</button>
                <button className='btn' onClick={() => filterItem('Sweets')} >Sweets</button>
                <button className='btn' onClick={() => filterItem('GYM Diete')} >GYM Diete</button>
                <button className='btn' onClick={() => setItems(Menu)} >All</button> */}
            </div>
        </div>
    )
}

export default ButtonLists;