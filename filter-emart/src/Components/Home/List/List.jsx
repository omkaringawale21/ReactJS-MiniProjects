import React from 'react';
import ListItem from './ListItem/ListItem';
import './List.css';

const List = ({ list }) => {
  return (
    <div className='list-wrap' >
        {
          list.map((item) => <ListItem key={item.id} item={item} />)
        }
    </div>

  )
}

export default List;