import React from "react";
import Tour from "./Tour";

const Tours = ({ tours,removeTour }) => {
  return (
    <>
      <section className="py-5">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-md-8">
              <p className="text-uppercase text-primary">Sights from around the globe</p>
              <h1>Travel Guide</h1>
            </div>
          </div>
          <div className="row">
            {tours.map((tour) => {
              return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tours;
