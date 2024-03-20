import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Gallery = function (props) {
  const [movies, setMovies] = useState([]);

  const MY_KEY = "717484dc";

  const fetchMovie = () => {
    fetch(`http://www.omdbapi.com/?apikey=${MY_KEY}&s=${props.saga}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata dell'api");
        }
      })
      .then((d) => {
        setMovies(d.Search);
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const six = movies.slice(0, 6);

  return (
    <>
      <h4 className="text-white">{props.title}</h4>
      <Row xs={2} sm={2} lg={3} xl={6} className="mb-4">
        {six.map((movie) => (
          <Col className="mb-2 text-center px-1 col-img" key={movie.imdbID}>
            <Link to={"/movie-details/" + movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} className="my-image" />
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Gallery;
