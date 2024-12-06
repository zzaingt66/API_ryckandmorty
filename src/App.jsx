import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";

function App() {
  return (
    <Router>
      <div className="bg-gray-950">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
