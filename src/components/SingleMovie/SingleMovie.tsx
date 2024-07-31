import { IMovie } from "../../interface/IMovie";

interface IMovieProps {
  movie: IMovie;
}

const SingleMovie: React.FC<IMovieProps> = (props) => {
  return (
    <div>
      <p>{props.movie.title}</p>
      <p>{props.movie.year}</p>
      <p>{props.movie.rate}</p>
    </div>
  );
};

export default SingleMovie;
