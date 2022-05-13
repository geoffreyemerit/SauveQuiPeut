import React from "react";
import ExplorerHeader from "../components/ExplorerHeader";
import ExplorerList from "../components/ExplorerList";
import GoToTop from "../components/GoToTop";

const Explorer = () => {
  return (
    <div>
      <ExplorerHeader />
      <ExplorerList />
      <GoToTop />
    </div>
  );
};

export default Explorer;
