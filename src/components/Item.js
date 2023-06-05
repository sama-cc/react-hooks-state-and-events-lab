import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState("")

  function handleItemClick() {
    setIsInCart(() => isInCart === "" ? "in-cart" : "")
  }

  return (
    <li className={isInCart} onClick={handleItemClick}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">{isInCart === "" ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
