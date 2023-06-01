import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Register from './pages/register'
import Login from './pages/login'


const App = () =>{
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
