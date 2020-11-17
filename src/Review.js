import React, { useState } from "react";
import people from "./Data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
    return 0;
    }
    if (number < 0){
      return people.length - 1;
    }
    return number; 
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <section className="min-vh-100 d-flex align-items-center pt-5 pt-md-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            {/* ---- Heading ---- */}
            <h2>We love customer reviews</h2>

            {/* ------- Text -------- */}
            <p className="font-size-lg mb-3 mb-md-3">
              Having customers who rave about your services is likened to heaven on earth
            </p>
            <div className="row">
              <div className="col-12">
                {/* ------------ Card ------------- */}
                <div className="card card-row shadow-light mb-2">
                  <div className="row g-0">
                    <div className="col-12 col-md-6">
                      {/* ---------- Slider ------------ */}
                      <div className="card-img-slider">
                        <a href="#action">
                          <img src={image} alt={name} className="img-fluid card-img-left profile" />
                        </a>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="w-100">
                        <div className="card-body">
                          <blockquote className="blockquote text-center mb-0">
                            {/* ---------- Quote ----------- */}
                            {/* ------- Text ------- */}
                            <h4 className="text-uppercase">{name}</h4>
                            <p className="text-capitalize text-success">{job}</p>
                            <p className="mb-5 mb-md-5 pt-md-3">{text}</p>

                            {/* ------ footer --------- */}
                            <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-primary" onClick={prevPerson}> 
                              &lt;
                              </button>
                              <button className="btn btn-outline-primary" onClick={randomPerson}>Random pick</button>
                              <button className="btn btn-outline-primary" onClick={nextPerson}>
                              &gt;
                              </button>
                            </div>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
