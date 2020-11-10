import React, { useState } from 'react'
import data from "./data";
import List from "./list";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <section className="min-vh-100 d-flex align-items-center bg-grey p-md-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 text-center mb-5 mb-lg-5 bg-white rounded-lg shadow-lg p-md-5">
            <h2> Birthday celebration today ({people.length})</h2>
            <List people={people}/>
            <div>
              <button className="btn btn-md btn-grey text-white mb-md-0 mb-3" onClick={() => setPeople([])}>Remove all</button>
            </div>
          </div>

        </div>
        

      </div>
      
    </section>
  )
}

export default App;
