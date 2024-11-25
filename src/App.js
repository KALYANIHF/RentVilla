import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route exect path="/" element={<Explore />} />
        <Route exect path="/offers" element={<Offers />} />
        <Route exect path="/signin" element={<SignIn />} />
        <Route exect path="/profile" element={<Profile />} />
        <Route exect path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Navbar */}
      <Navbar />
    </Router>
  );
}

export default App;
