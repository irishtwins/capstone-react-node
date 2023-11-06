import React from "react";

function ShoppingItem({ id, itemName, quantity, deleteItem }) {

    function handleDelete(event) {
        event.preventDefault();
        deleteItem(id);
    }

    return (
        <li>
            {item} ( {quantity} ) <button onClick= {handleClick}>Delete</button>
        </li>
    );
}

export default function ShoppingList({ items, deleteItem }) {
    const ItemsJsx = items.map((item) => (
        <ShoppingItem key={item.id} id={item.id} itemName={item.item} quantity={item.quantity} deleteItem={deleteItem} />
    ));

  return <ul>{ ItemsJsx }</ul>;
}
