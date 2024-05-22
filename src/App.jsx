import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects/>
      <Footer />
    </>
  );
}
