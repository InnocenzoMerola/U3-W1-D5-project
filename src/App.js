import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/MyNavbar";
import Header from "./components/Header";
import MyFooter from "./components/MyFooter";
import FirstGallery from "./components/FirstGallery";
import Container from "react-bootstrap/esm/Container";
import SecondGallery from "./components/SecondGallery";
import ThirdGallery from "./components/ThirdGallery";
import FourtGallery from "./components/FourtGalery";
import MovieDetails from "./components/MovieDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="totPage">
        <MyNavbar />
        <Container fluid className="px-4">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <FirstGallery />
                  <SecondGallery />
                  <FourtGallery />
                </div>
              }
            />

            <Route path="/tvShows" element={<ThirdGallery />} />

            <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          </Routes>
        </Container>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
