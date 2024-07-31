import { useContext, useEffect } from "react";
import { LoadingContext, MovieContext } from "../../context/MoviesContext";
import data from "../../data.json";

const LoadingPage = () => {
  const loadingContext = useContext(LoadingContext);
  const movie = useContext(MovieContext);

  useEffect(() => {
    setTimeout(() => {
      loadingContext?.setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (data) {
      movie?.setAllMovies(data);
    }
  }, []);

  return (
    <>
      <div className="loader"></div>
    </>
  );
};

export default LoadingPage;
