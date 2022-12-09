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
        const localData = localStorage.getItem("data");
        if (localData != null) {
          const parsedData = JSON.parse(localData);

          setDataObject({ ...dataObject, ...parsedData });
          return;
        }

        const resultsData = await fetchData();

        setDataObject({ ...dataObject, ...resultsData });

        return;
      } catch (error) {
        setAuthErr(error.message);
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
          {token != null && (
            <Route exact path="/" element={<Home data={dataObject} />} />
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
