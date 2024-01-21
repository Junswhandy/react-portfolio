import "./App.css";
// import About from "./components/About";
import utama from "./pages/utama";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={utama}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
