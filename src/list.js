import React from "react";

const list = ({ people }) => {
  return (
    <>
      <div className="mb-5">
        <div className="row">
          <div className="col">
            {people.map((person) => {
              const { id, name, age, image } = person;
              return (
                <div
                  className="align-items-sm-start d-flex mt-1 p-md-2"
                  key={id}
                >
                  <img
                    src={image}
                    alt={name}
                    className="mr-2 rounded-circle image"
                  />
                  <div className="ml-2">
                    <h5 className="mt-3 mb-0">{name}</h5>
                    <span className="w-75 text-muted">{age} years</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default list;
