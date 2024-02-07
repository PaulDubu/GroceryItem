import React from 'react';
import GroceryItem from './GroceryItem';

function App() {
  return (
    <div>
      <GroceryItem item="Egg" />
      <GroceryItem item="Banana" />
      <GroceryItem item="Strawberry" />
      <GroceryItem item="Bread" />
    </div>
  );
}

export default App