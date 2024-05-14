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
import { useState } from "react";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="app">
      <Navbar toggleModal={toggleModal} />
      <Header toggleModal={toggleModal} />
      <ImprovingHealth />
      <VarietyWorkouts />
      <ConnectingWith toggleModal={toggleModal} />
      <DownloadOurApp />
      <Blog />
      <Testimonials />
      <Footer />
      {showModal && (
        <Modal toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default App;
