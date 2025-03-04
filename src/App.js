import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import About from './pages/About';
import Navbar from './components/Navbar';
import Allproduct from './pages/Allproduct';
import Single from './pages/Single';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/allproduct' element={<Allproduct/>}/>
          <Route path='/single' element={<Single/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
