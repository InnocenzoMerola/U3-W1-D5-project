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

function App() {
  return (
    <div className="totPage">
      <MyNavbar />
      <Container fluid className="px-4">
        <Header />
        <FirstGallery />
        <SecondGallery />
        <ThirdGallery />
        <FourtGallery />
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
