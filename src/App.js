import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar  from "./components/Navbar";
import Quiz  from "./components/Quiz";
import History from "./components/History";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/history" element={<History/>} />
      </Routes >
    </div>
    
  );
}

export default App;
