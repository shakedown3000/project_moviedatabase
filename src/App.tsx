import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { IMovie } from "./interface/IMovie";
import { LoadingContext, MovieContext } from "./context/MoviesContext";
import LoadingPage from "./pages/LoadingPage/LoadingPage";

function App() {
  const [allMovies, setAllMovies] = useState<IMovie[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <MovieContext.Provider value={{ allMovies, setAllMovies }}>
          {/* Boolean checken, ob noch läd, wenn auf true, noch nicht laden, setter ändert loading dann auf false, dann werden Daten geladen */}
          {loading ? <LoadingPage /> : <Home />}
        </MovieContext.Provider>
      </LoadingContext.Provider>
    </>
  );
}

export default App;
