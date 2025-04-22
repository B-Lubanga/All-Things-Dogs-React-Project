import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Adopt from "./components/Adopt";
import Rescue from "./components/Rescue";
import FoundDog from "./components/FoundDog";
import DogForm from "./components/DogForm";
import DogList from "./components/DogList";
import OwnerModal from "./components/OwnerModal";
import Centers from "./components/Centers";
import VetClinics from "./components/VetClinics";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  // const [open, setOpen] = React.useState(false);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Adopt />
      <Rescue />
      <FoundDog />
      <DogForm />
      <DogList />
      <OwnerModal />
      <Contact />
      <Centers />
      <VetClinics />
      <OwnerModal />
      <Footer />
    </div>
  );
}

export default App;
