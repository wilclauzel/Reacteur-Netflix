import React from "react";
import movies from "../assets/movies.json";
import Section from "./Section";

const Sections = () => {
  return (
    <div className="sections">
      {movies.map((item, index) => {
        return <Section key={index} categoryMovies={item} />;
      })}
    </div>
  );
};
export default Sections;
