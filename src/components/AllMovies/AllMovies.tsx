import { useContext, useState } from "react";
import "./AllMovies.css";
import { MovieContext } from "../../context/MoviesContext";
import SingleMovie from "../SingleMovie/SingleMovie";

const AllMovies = () => {
  const [showMovie, setShowMovie] = useState(99);
  const movieDataContext = useContext(MovieContext);

  if (movieDataContext === null || movieDataContext.allMovies === null) {
    return <>Loading...</>;
  }

  return (
    <section className="all_movies">
      {movieDataContext?.allMovies.slice(0, showMovie).map((movie, index) => (
        <div className="single_movies">
          <SingleMovie key={index} movie={movie} />
        </div>
      ))}
    </section>
  );
};

export default AllMovies;
