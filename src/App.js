import React from "react";
import Banner from "./components/banner";
import Header from "./components/header";
import Project from "./components/project";
import About from "./components/about";
import Footer from "./components/footer";



function App() {
  return (

      <div className="App">
        <Header />
        <Banner />
        <Project />
        <About />
        <Footer />
      </div>
    
      
  );
}

export default App;
