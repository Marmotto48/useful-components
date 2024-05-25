import "./App.css";
import AspectRatio from "./components/aspectRatio/aspectRatio";
import Button from "./components/button/button";
import FlipCard from "./components/flipCard/flipCard";
import GlassEffect from "./components/glassEffect/glassEffect";
import LoadingCircal from "./components/loadingCircal/loadingCircal";
import MenuIcon from "./components/menuIcon/menuIcon";
import NavigationSections from "./components/navigationSections/navigationSections";
import ProgressBar from "./components/progressBar/progressBar";
import ResponsiveGrid from "./components/responsiveGrid/responsiveGrid";
import RotateBtn from "./components/rotateBtn/rotateBtn";

function App() {
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
    </div>
  );
}

export default App;
