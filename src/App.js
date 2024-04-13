import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/layout";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
// import Fleet from "./components/Fleet/fleet";
// import Services from "./components/Services/services";
// import About from "./components/About/about";
// import Contact from "./components/Contact/contact";
// import Nautilus from "./components/Pages/nautilus";
// import MKT from "./components/Pages/mkt";
// import Continental from "./components/Pages/continental";
// import XTS from "./components/Pages/xts";
// import Navigator from "./components/Pages/navigator";
// import Escalade from './components/Pages/escalade';
// import Suburban from "./components/Pages/suburban";
// import Yukon from './components/Pages/yukon';
// import Limousine from './components/Pages/limousine';
// import Van from './components/Pages/van';
// import Booking from './components/Booking/booking';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path= "/about" element={<About/>} />
          <Route exact path= "/contact" element={<Contact/>} />
          {/* <Route exact path="/fleet" element={<Fleet />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/lincoln-nautilus" element={<Nautilus />} />
          <Route exact path="/lincoln-mkt" element={<MKT />} />
          <Route exact path="/lincoln-continental" element={<Continental />} />
          <Route exact path="/cadillac-xts" element={<XTS />} />
          <Route exact path="/lincoln-navigator" element={<Navigator />} />
          <Route exact path="/cadillac-escalade" element={<Escalade />} />
          <Route exact path="/chevrolet-suburban" element={<Suburban />} />
          <Route exact path="/gmc-yukon" element={<Yukon/>} />
          <Route exact path="/lincoln-stretch-limousine" element={<Limousine />} />
          <Route exact path="/sprinter-van" element={<Van />} />
          <Route exact path="/online-booking" element={<Booking />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
