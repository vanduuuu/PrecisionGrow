import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Components/Home/Home';
import Subnavbar from './Components/Headfoot/Header/Subnavbar/Subnavbar';
import 'font-awesome/css/font-awesome.min.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from '../src/Components/Headfoot/Footer/Footer'
import RefundPolicy from './Components/Policy/RefundPolicy';

function App() {
  return (
   <>
   <BrowserRouter>
   <Subnavbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/refund_policy" element={<RefundPolicy/>}/>
  </Routes>
  <Footer/>
   </BrowserRouter>
  
   </>
  );
}

export default App;
