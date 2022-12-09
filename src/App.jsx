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

  useEffect(() => {
    const callData = async () => {
      try {
        const resultsData = await fetchData();
        console.log("results from fetchmethod ", resultsData);
        setDataObject({...dataObject,...resultsData});
        console.log("dataobject to be passed along ", dataObject);
      } catch (error) {
        console.log("error displayed in app.jsx", error.message);
        setAuthErr(error.message);
        console.log("error displayed in app.jsx", authErr);
      }
    };
    return () => {
      callData();
    };
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          {dataObject != null && (
            <Route
              exact
              path="/"
              element={<Home role={dataObject.role} data={dataObject} />}
            />
          )}
          {dataObject == null && (
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
