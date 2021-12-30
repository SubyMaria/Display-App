import {BrowserRouter,Routes,Route,Link,NavLink} from "react-router-dom"
import './App.css';
// import ProtectiveRoutes from "./Components/ProtectiveRoutes";
// import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";

function App() {
  // const [isAuth, setisAuth] = useState("false")
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      {/* <ProtectiveRoutes path="/dashboard" component={Dashboard} isAuth={isAuth}/> */}
      </Routes>
      </BrowserRouter>
  );
}

export default App;
