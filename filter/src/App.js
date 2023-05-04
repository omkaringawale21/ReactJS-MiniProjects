import React, {useState} from 'react';
import Menu from './menu.js'
import './index.css';
import MenuItems from './menuList.js';
import ButtonLists from './menuButtons.js'

const allCartValues = [ ... new Set(Menu.map((curElem) =>  curElem.category )), 'all'];
console.log(allCartValues);

function App() {
  const[items, setItems] = useState(Menu);
  const [cartItems, setCartItems] = useState(allCartValues);

  const filterItem = (category) => {
    if (category === 'all') {
      setItems(Menu);
      return;
    }

    const updatedItems = Menu.filter((curEle) => {
      return curEle.category === category;
    });
    setItems(updatedItems);
  }
  
  return(
    <>

      <h1 className='mt-5 text-center main-heading' >Order Your Favorite Dish</h1>
      <hr/>

      <ButtonLists filterItem={filterItem} foodCartItems={cartItems} />

      <MenuItems items={items} />

    </>
  )
}

export default App;