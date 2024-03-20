import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/MyNavbar";
import Header from "./components/Header";
import MyFooter from "./components/MyFooter";
import Gallery from "./components/Gallery";
import Container from "react-bootstrap/esm/Container";

import MovieDetails from "./components/MovieDetails";
import SeriesGallery from "./components/SeriesGallery";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="totPage">
        <MyNavbar />
        <Container fluid className="px-4">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Header />
                  <Gallery saga={"harry potter"} title={"Harry Potter"} />
                  <Gallery saga={"spider-man"} title={"Spider-man"} />
                  <Gallery saga={"fast&furious"} title={"Fast & Furious"} />
                  <Gallery saga={"terminator"} title={"Terminator"} />
                </div>
              }
            />

            <Route
              path="/tvShows"
              element={
                <div>
                  <Header />
                  <SeriesGallery series={"series"} titleT={"Popolar series"} />
                  <SeriesGallery series={"war"} titleT={"War"} />
                  <SeriesGallery series={"horror"} titleT={"Horror series"} />
                </div>
              }
            />

            <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          </Routes>
        </Container>
        <MyFooter />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
