import react from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
    </Router>
  );
}

export default App;
