import React from "react";
import Caroussel from "./Caroussel";

const Section = (props) => {
  const { category, images } = props.categoryMovies;
  return (
    <section>
      <h2>{category}</h2>
      <Caroussel images={images} />
    </section>
  );
};

export default Section;
