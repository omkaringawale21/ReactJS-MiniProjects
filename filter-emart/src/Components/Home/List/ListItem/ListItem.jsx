import React from 'react';
import './ListItem.css';

const ListItem = ({item: {id, title, serviceTime, deliveryFee, category, cuisine, rating, price, coverSrc}}) => {
  return (
    <div className='listItem-wrap' >
        <img src={coverSrc} alt="item" />
        <header>
            <h4>{title}</h4>
            <span>⭐ {rating}</span>
        </header>
        <footer>
            <p><b>{serviceTime}</b> <span>Delivery Fee ${deliveryFee}</span></p>
            <p><b>${price}</b></p>
        </footer>
    </div>
  )
}

export default ListItem;