import "./App.css";
import {  Routes, Route  } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Main from "./Pages/Main";
 

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<Main/>}/>
      </Routes>
  );
}

export default App;
