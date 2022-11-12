
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import About  from './Pages/About';
import Resume from './Pages/Resume';
import Portfolios from './Pages/Portifolios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './Pages/Contact';





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element ={<About/>}/>
          <Route path="/resume" element ={<Resume/>}/>
          <Route path="/contact" element ={<Contact/>}/>
          <Route path="/Portifolios" element ={<Portfolios/>}/>
          
         
          
  
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
