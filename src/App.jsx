import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <div > 
      <Navbar />
      <Hero />
      <Features />
      <Card />
      <Banner />
      <Footer/>
    </div>
  );
}

export default App;
