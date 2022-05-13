import React from "react";
import GoToTop from "../components/GoToTop";
import RhinoList from "../components/RhinoList";
import RhinosHeader from "../components/RhinosHeader";

const Rhinos = () => {
  return (
    <div>
      <RhinosHeader />
      <RhinoList />
      <GoToTop />
    </div>
  );
};

export default Rhinos;
