import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  // console.log(id);

  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState({});
  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(false);
    // console.log(json);
    // console.log(json.data.movie);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <h3>Like this</h3>
          {Object.entries(movieDetail).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong>{" "}
              {/* if it's array, convert to string by join */}
              {Array.isArray(value)
                ? value.join(", ")
                : // if it's object, convert to string by JSON.stringify
                typeof value === "object" && value !== null
                ? JSON.stringify(value)
                : // rest of the cases, just show the value
                  value}
            </div>
          ))}
          ---------------------
          <h3>or like this :)</h3>
          <div>
            <h2>{movieDetail.title}</h2>
            <img src={movieDetail.medium_cover_image} alt={movieDetail.title} />
            <h3>Year: {movieDetail.year}</h3>
            <p>Rating: {movieDetail.rating}</p>
            <p>Runtime: {movieDetail.runtime} minutes</p>
            <p>Description: {movieDetail.description_full}</p>
            <div>
              <h3>Genres:</h3>
              <ul>
                {movieDetail.genres &&
                  movieDetail.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                  ))}
              </ul>
            </div>
            <div>
              <h3>Download Count: {movieDetail.download_count}</h3>
              <h3>Like Count: {movieDetail.like_count}</h3>
            </div>
            <div>
              <h3>Available Languages:</h3>
              <ul>{movieDetail.language && <li>{movieDetail.language}</li>}</ul>
            </div>
            <p>MPA Rating: {movieDetail.mpa_rating}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
