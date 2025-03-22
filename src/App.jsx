import "./App.css";
import {  Routes, Route  } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Main from "./Pages/Main";
 

function App() {
  // const [isLogin, setIsLogin] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isLogin) {
  //     navigate('/');
  //     setIsLogin(!isLogin);
  //   } else {
  //     navigate('/login' || '/signup');
  //     setIsLogin(!isLogin);
  //   }
  // }, [isLogin, navigate]);

  return (
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<Main/>}/>
      </Routes>
  );
}

export default App;
