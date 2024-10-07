import React from "react";

const Card = () => {
  return (
    <div className = "col-md-3 col-lg-3 col-xl-3 col-12 p-2">
    <div className="card">
<img class="card-img-top" src="https://placehold.co/500x325/png" alt="Card image"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Find Out More!</a>
  </div>
  </div>
  </div>
  )
}

const CardGroup = () => {
    return (
        <div className="d-flex flex-wrap justify-content-evenly">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
     
    )
}

export default CardGroup;