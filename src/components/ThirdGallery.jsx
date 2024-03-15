import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ThirdGallery extends Component {
  state = {
    movies: [],
  };

  MY_KEY = "717484dc";
  saga = "fast&furious";

  fetchThirdGall = () => {
    fetch(`http://www.omdbapi.com/?apikey=${this.MY_KEY}&s=${this.saga}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata all'api");
        }
      })
      .then((d) => {
        this.setState({
          movies: d.Search,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  componentDidMount() {
    this.fetchThirdGall();
  }

  render() {
    const six = this.state.movies.slice(0, 6);

    return (
      <>
        <h4 className="text-white">Fast & Furious</h4>
        <Row xs={1} sm={2} lg={4} xl={6} className="mb-4">
          {six.map((movie) => (
            <Col className="mb-2 text-center px-1 col-img" key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} className="my-image" />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default ThirdGallery;
