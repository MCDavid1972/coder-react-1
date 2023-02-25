const ProductCard = ({ title, price, isRed }) => {
  return (
    <div>
      <h1 claseName={isRed ? "red" : "blue"}>{title}</h1>
      <h2>{price}</h2>
    </div>
  );
};

export default ProductCard;
