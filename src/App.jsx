import "./App.css";
// import About from "./components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Footer from "../shared/Footer";
import About from "../components/About";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />

      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
