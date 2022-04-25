import react from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { GlobalStyle } from "./globalStyles";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
    </Router>
  );
}

export default App;
