import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/MyNavbar";
import Header from "./components/Header";
import MyFooter from "./components/MyFooter";
import FirstGallery from "./components/FirstGallery";
import Container from "react-bootstrap/esm/Container";
import SecondGallery from "./components/SecondGallery";
import ThirdGallery from "./components/ThirdGallery";
import FourtGallery from "./components/FourtGallery";
import MovieDetails from "./components/MovieDetails";
import SeriesGallery from "./components/SeriesGallery";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondSeriesGallery from "./components/SecondSeriesGallery";
import ThirdSeriesGallery from "./components/ThirdSeriesGallery";

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
                  <FirstGallery />
                  <SecondGallery />
                  <FourtGallery />
                  <ThirdGallery />
                </div>
              }
            />

            <Route
              path="/tvShows"
              element={
                <div>
                  <Header />
                  <SeriesGallery />
                  <SecondSeriesGallery />
                  <ThirdSeriesGallery />
                </div>
              }
            />

            <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          </Routes>
        </Container>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
