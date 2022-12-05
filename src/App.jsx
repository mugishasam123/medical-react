import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/Signup/index";
import SignIn from "./components/SignIn/index";
import PageNotFound from "./components/NotFound";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/sign-up" element={<SignUp />} />
          <Route  path="/sign-in" element={<SignIn />} />
          <Route  path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
