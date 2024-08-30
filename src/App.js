import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Components/Home/Home';
import Subnavbar from './Components/Headfoot/Header/Subnavbar/Subnavbar';
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
   <>
   <BrowserRouter>
   <Subnavbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
