import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">A warm welcome!</h1>
        <p className="col-md-8 fs-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit sit amet diam at lobortis. Fusce euismod at quam auctor varius. Suspendisse venenatis diam a egestas dapibus. Nullam at dolor at erat euismod semper. Ut vulputate erat vel magna faucibus, eget aliquet tortor mattis.
        </p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    </div>
  );
}

export default Jumbotron;
