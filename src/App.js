
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './style.css';
import './App.css';


import Header from "./components/Header"
import Mainsec from "./components/Mainsec"
import Services from "./components/Services"
import StartProject from "./components/StartProject"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
        <Header />
        <Mainsec />
        <Services />
        <StartProject />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
