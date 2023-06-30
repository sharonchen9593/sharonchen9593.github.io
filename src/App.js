import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import TitleSection from "./components/TitleSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <TitleSection />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
