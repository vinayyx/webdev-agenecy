import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <ClipLoader color="#D0FF71" size={60} />
    </div>
  );
}

export default Loader;
