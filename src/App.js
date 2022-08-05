import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import ImprovingHealth from "./components/ImprovingHealth/ImprovingHealth";
import VarietyWorkouts from "./components/VarietyWorkouts/VarietyWorkouts";
import ConnectingWith from "./components/ConnectingWith/ConnectingWith";
import DownloadOurApp from "./components/DownloadOurApp/DownloadOurApp";
import Blog from "./components/Blog/Blog";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <ImprovingHealth />
      <VarietyWorkouts />
      <ConnectingWith />
      <DownloadOurApp />
      <Blog />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
