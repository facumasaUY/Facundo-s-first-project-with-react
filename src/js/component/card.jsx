import React from "react";

const Card = () => {
    return (
        <div className="d-flex justify-content-evenly">
<div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Find Out More!</a>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Find Out More!</a>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Find Out More!</a>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
<svg class="bd-placeholder-img card-img-top" width="100%" height="200" role="img"><rect width="100%" height="100%" fill="#868e96"/><text>Image cap</text></svg>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Find Out More!</a>
  </div>
</div>
        </div>
    )
}

export default Card;