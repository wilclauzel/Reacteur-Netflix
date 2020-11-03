import React from "react";

const Caroussel = ({ images }) => {
  return (
    <div className="caroussel">
      {images.map((url) => {
        return <img src={url} alt="movie image" />;
      })}
    </div>
  );
};

export default Caroussel;
