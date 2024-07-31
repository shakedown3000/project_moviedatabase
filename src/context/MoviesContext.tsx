import { createContext } from "react";
import { IMovie } from "../interface/IMovie";

interface IAllMovies {
  allMovies: IMovie[] | null;
  setAllMovies: React.Dispatch<React.SetStateAction<IMovie[] | null>>;
}

export const MovieContext = createContext<IAllMovies | null>(null);

interface ILoading {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = createContext<ILoading | null>(null);
