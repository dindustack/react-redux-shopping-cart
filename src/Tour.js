import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
    const [readMore, setReadMore] = useState(false);
  return (
    // Travel guide cards
    <div className="col-md-4 col-12 mb-5 hover-animate">
      <div className="card shadow border-0 h-100">
        <img src={image} alt={name} className="img-fluid" />
        <div className="card-body d-flex align-items-center">
          <div className="w-100">
            <h6 className="card-title">{name}</h6>
            <p className="card-text text-muted">
              <span className="h4 text-primary">${price}</span>
            </p>

            <p className="flex-grow-1 mb-0 text-muted text-sm">{readMore ? info : `${info.substring(0, 190)}...`}
            <button className="btn text-primary" onClick={() => setReadMore(!readMore)}>
                {readMore ? 'show less' : 'read more'}
            </button>
            </p>
            <a href="#action" className="btn btn-outline-primary" onClick={() => removeTour(id)}>Delete</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
