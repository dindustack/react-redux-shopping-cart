import React, { useState } from 'react'

const Question = ({ title, info}) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <ul className="list-group list-group-flush-x">
        <li className="list-group-item d-flex justify-content-md-center">
          <p className="d-block font-size-lg font-weight-bold border-bottom-0">{title}</p>
          <button className="btn btn-outline-primary mx-2 font-weight-bolder" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "-" : "+"}
      </button>
        </li>
      </ul>   
      {showInfo && <p className="text-muted list-group-flush-x-0">{info}</p>}   
    </>
  )
}

export default Question
