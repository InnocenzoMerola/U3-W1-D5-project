import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import AddComment from "./AddComment";

const MovieDetails = function () {
  const [movieObj, setMovieObj] = useState([]);
  const [comment, setComment] = useState([]);

  const params = useParams();
  //   const navigate = useNavigate();

  const MY_KEY = "717484dc";
  const MY_COMMENT_KEY =
    "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOTc1MTRjNTllYzAwMTk5MGQ2ZTUiLCJpYXQiOjE3MTA5NDYwNTIsImV4cCI6MTcxMjE1NTY1Mn0.vPA74Ar4tBRxABstG3LndjpnFWC6TsKky_5zoNfiYn8";

  const movieFetch = () => {
    fetch(`http://www.omdbapi.com/?apikey=${MY_KEY}&i=${params.movieId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata api");
        }
      })
      .then((d) => {
        setMovieObj(d);
      })
      .catch((error) => {
        console.log("Errore", error);
      });
  };

  const movieCommentFetch = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${params.movieId}`, {
      headers: {
        authorization: MY_COMMENT_KEY,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata api");
        }
      })
      .then((commentsApi) => {
        setComment(commentsApi);
      })
      .catch((error) => {
        console.log("Errore", error);
      });
  };

  useEffect(() => {
    if (params.movieId) {
      movieFetch();
      movieCommentFetch();
    }
  }, []);

  return (
    <>
      {!movieObj && (
        <div className="mt-5 text-center">
          <Spinner animation="border" />
        </div>
      )}

      {movieObj && (
        <>
          <Row className="justify-content-center mt-4">
            <Col md={4}>
              <div>
                <img src={movieObj.Poster} alt="film" />
              </div>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Body>
                  <h4>{movieObj.Title}</h4>
                  <hr />
                  <h5>Description</h5>
                  <p>{movieObj.Plot}</p>
                  <h6>Genre: {movieObj.Genre}</h6>
                  <h6>
                    Writer & Director: {movieObj.Writer}, {movieObj.Director}
                  </h6>
                  <h6>Main Actors: {movieObj.Actors}</h6>
                  <h6>Honors and awards: {movieObj.Awards}</h6>
                  <p>Released: {movieObj.Released}</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2 className="mt-3 text-white">Add new Comment</h2>
              <AddComment id={params.movieId} />
            </Col>

            <Col md={6}>
              <h2 className="mt-3 text-white">Comments</h2>
              <ListGroup>
                {comment.map((comment) => (
                  <ListGroup.Item key={comment._id}>
                    Comment: {comment.comment} --------- Rate: {comment.rate}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default MovieDetails;
