import Reat from "react";

const Caroussel = ({ images }) => {
  return (
    <div className="caroussel">
      {images.map((url) => {
        return <img src={url} />;
      })}
    </div>
  );
};

export default Caroussel;
