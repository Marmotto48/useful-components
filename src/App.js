import { useState } from "react";
import "./App.css";
import AspectRatio from "./components/aspectRatio/aspectRatio";
import Button from "./components/button/button";
import FlipCard from "./components/flipCard/flipCard";
import GlassEffect from "./components/glassEffect/glassEffect";
import LoadingCircal from "./components/loadingCircal/loadingCircal";
import Mario from "./components/mario/mario";
import MenuIcon from "./components/menuIcon/menuIcon";
import NavigationSections from "./components/navigationSections/navigationSections";
import PopupAnimation from "./components/popupAnimation/popupAnimation";
import ProgressBar from "./components/progressBar/progressBar";
import ResponsiveGrid from "./components/responsiveGrid/responsiveGrid";
import RotateBtn from "./components/rotateBtn/rotateBtn";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClickOutside = (event) => {
    if (event.target.className === "modal") {
      closeModal();
    }
  };
  return (
    <div className="App">
      <AspectRatio />
      <ProgressBar />
      <LoadingCircal />
      <Button />
      <RotateBtn />
      {/* <NavigationSections /> */}
      <GlassEffect />
      <MenuIcon />
      <FlipCard />
      <ResponsiveGrid />
      <Mario />
      <Button onClick={openDialog} />
      <PopupAnimation isOpen={isDialogOpen} onClose={closeDialog}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
          aperiam necessitatibus quam minus nemo laudantium nihil.
        </p>
        <input type="email" className="popup-input" name="" id="" />
        <button id="closeModal">Submit</button>
      </PopupAnimation>
    </div>
  );
}

export default App;
