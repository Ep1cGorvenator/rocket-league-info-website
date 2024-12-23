import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Topbar from "./components/Topbar";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import HitBox from "./pages/HitBox";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/hit-boxes" element={<HitBox />} />
      </Routes>
    </Router>
  );
}

export default App;
