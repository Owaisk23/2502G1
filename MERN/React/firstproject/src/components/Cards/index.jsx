import React from "react";

const index = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.productImage}
          className="card-img-top"
          alt={props.productName}
        />
        <div className="card-body">
          <h5 className="card-title">{props.productName}</h5>
          <p className="card-text">{props.productDescription}</p>
          <p className="card-text">${props.productPrice}</p>
          <a href="#" className="btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
};

export default index;
