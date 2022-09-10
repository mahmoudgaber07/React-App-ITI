import React from "react";
import "./Loader.css";
import { MutatingDots } from "react-loader-spinner";
import "../../../node_modules/react-loader-spinner/dist/loader/MutatingDots";

export const Loader = () => {
  return (
    <div id="Loader">
      <MutatingDots
        height="100"
        width="100"
        color="#212529"
        secondaryColor="#212529"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
