import React from 'react';

const ProductCard = (props) => {
  
  const handleAddToCart = () => {
    alert("Added to Cart!")
  }

  return (
    <div className="card">
      <img
        src={props.imageUrl}
        className="card-img-top"
        alt={props.productName}
      />
      <div className="card-body">
        <h5 className="card-title">{props.productName}</h5>
        <p className="card-text">${props.price}</p>
        <button className="btn btn-primary" 
                onClick={()=>{
                  console.log("added to cart");
                  props.onAddToCart();
                }}
        >
          Add to Cart
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.productName}</h5>
        <p className="card-text">${props.price}</p>
        <a href="#" className="btn btn-primary" onClick={() => {
          console.log("added to cart");
          props.onAddToCart();
        }}>Add to Cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;