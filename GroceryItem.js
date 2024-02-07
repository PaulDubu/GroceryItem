import React from 'react';


function GroceryItem(props){
  function handleClick() {
  alert(`The ${props.item} has been added to the cart!`)
  }
  return (
    <button onClick={handleClick}>{props.item}</button>
    );
};

export default GroceryItem;
