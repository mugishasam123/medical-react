import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import SignUp from "./components/Signup/index";
import SignIn from "./components/SignIn/index";
import PageNotFound from "./components/NotFound";
import { fetchData } from "./utils/fetchData";

const App = () => {
  const [authErr, setAuthErr] = useState(null);
  const [dataObject, setDataObject] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
 

  useEffect(() => {
    const callData = async () => {
      try {
        console.log("try test")
        const localData = localStorage.getItem("data");
        if(localData!=null){
          console.log("try test1")
          const parsedData = JSON.parse(localData);
          console.log("results from localstorage ", parsedData);
          setDataObject({...dataObject,...parsedData});
          return;
        }
        console.log("try test2")
        const resultsData = await fetchData();
        console.log("results from api ", resultsData);
        setDataObject({...dataObject,...resultsData});
        
        return;
      } catch (error) {
        console.log("error displayed in app.jsx", error.message);
        setAuthErr(error.message);
        
      }
    };
    return () => {
      callData();
    };
  }, []);

  useEffect(() => {
    console.log("autherror", authErr);
    console.log("dataobject to be passed along ", dataObject);
  
  }, [authErr,dataObject])
  

  return (
    <div>
      <Router>
        <Routes>
          {token != null && (
            <Route
              exact
              path="/"
              element={<Home  data={dataObject} />}
            />
          )}
          {token == null && (
            <Route exact path="/" element={<Navigate to="/PageNotFound" />} />
          )}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
