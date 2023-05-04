import React from 'react';
import { NavLink } from 'react-router-dom';
import './ItemLists.css';

const ItemLists = ({image, name, rating, id}) => {
  return (
    <div>
        <NavLink to={`/singleShow/${id}`} className='listItem' >
            <div className="item_details" >
                <img src={image} alt={image} />
                <div className="listItems_info" >
                    <h4 className='info_name' >{name}</h4>
                    <h4 className='info_rating' >{rating}</h4>
                </div>
            </div>
        </NavLink>
    </div>
  )
}

export default ItemLists;