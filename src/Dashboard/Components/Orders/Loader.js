import React from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Loader = () => {
  return (
    <div className="text-center mt-5">
      <h3>Loading...</h3>
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
