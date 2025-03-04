import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/layout";
import Home from "./components/Home/home";
import Fleet from "./components/Fleet/fleet";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import '@fortawesome/fontawesome-free/css/all.css';
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path= "/fleet" element={<Fleet/>} />
          <Route exact path= "/about" element={<About/>} />
          <Route exact path= "/contact" element={<Contact/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
