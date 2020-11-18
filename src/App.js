import React, { useState } from 'react';
import data from "./Data";
import SingleQuestion from "./Question";
const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <section className="min-vh-100 d-flex align-items-center pt-5 pt-md-5 bg-primary">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <div className="card">

            
            {/* ---- Heading ---- */}
            <h2 className="mb-5">We love customer reviews</h2>

            <div>
              {questions.map((question) => {
                return (
                  <SingleQuestion key={question.id} {...question}></SingleQuestion>
                )
              })}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App
