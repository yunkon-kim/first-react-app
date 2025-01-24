import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMmovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    setMmovies(json.data.movies);
    setLoading(false);
    // console.log(json);
  };

  useEffect(() => {
    getMovies();
  }, []);

  // console.log(movies);
  return (
    <div>
      {loading ? (
        <strong>Laoding</strong>
      ) : (
        <div>
          <h1>Movies ({movies.length})</h1>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
