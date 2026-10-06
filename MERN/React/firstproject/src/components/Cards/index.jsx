import React from "react";

const index = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.studentImage}
          className="card-img-top"
          alt={props.studentName}
        />
        <div className="card-body">
          <h5 className="card-title">{props.studentName}</h5>
          <p className="card-text">{props.studentAge}</p>
          <p className="card-text">{props.studentCountry}</p>
          <a href="#" className="btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
};

export default index;
