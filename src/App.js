import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/layout";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Audi from "./components/Descriptions/audi";
import Golf16 from "./components/Descriptions/golf16";
import Golf20 from "./components/Descriptions/golf20";
import Jetta from "./components/Descriptions/jetta";
import Passat from "./components/Descriptions/passat";
import '@fortawesome/fontawesome-free/css/all.css';
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path= "/about" element={<About/>} />
          <Route exact path= "/contact" element={<Contact/>} />
          <Route exact path= "/audi-a3" element={<Audi/>} />
          <Route exact path= "/volkswagen-golf-1.6" element={<Golf16/>} />
          <Route exact path= "/volkswagen-golf-2.0" element={<Golf20/>} />
          <Route exact path= "/volkswagen-jetta" element={<Jetta/>} />
          <Route exact path= "/volkswagen-passat-premium-plus" element={<Passat/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
