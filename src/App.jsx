import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Home from "./components/Home";
import SignUp from "./components/Signup/index";
import SignIn from "./components/SignIn/index";
import PageNotFound from "./components/NotFound";


const App = () => {

  useEffect(() => {
      
    const token=localStorage.getItem("token");

    const fetchData=async()=>{
        try {
            const res = await fetch("http://localhost:5000/api/medicaldata", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: token,
              },
            });
            const results = await res.json();
            console.log('registered successfluly',results);
            if(results.payload){
              localStorage.setItem("token",results.payload)
              window.location.href='/'
            }
          } catch (error) {
            console.log("error", error.message);
          }
    }

  return () => {
    fetchData()
  }
}, [])

const data={
  "tables": [
    {
      "sheetName": "Patient illnesses 2000 - 2002",
      "data": [
        {
          "2000": "Malaria",
          "2001": "lyphbia",
          "2002": "fever"
        },
        {
          "2000": "Typhoid",
          "2001": "Neurophobia",
          "2002": "Diarheaa"
        },
        {
          "2000": "Hiv",
          "2001": "tactophoibia",
          "2002": "Malaria"
        },
        {
          "2000": "Cancer",
          "2001": "lusophobia",
          "2002": "marasme"
        }
      ]
    },
    {
      "sheetName": "Physicians missions 2000 - 2002",
      "data": [
        {
          "2000": "Lagos",
          "2001": "Burundi",
          "2002": "Lisbone"
        },
        {
          "2000": "Cyprus",
          "2001": "DRC",
          "2002": "Marseille"
        },
        {
          "2000": "Malawe",
          "2001": "Congo",
          "2002": "Kinshasa"
        },
        {
          "2000": "Rwanda",
          "2001": "Mpzambique",
          "2002": "senegal"
        }
      ]
    },
    {
      "sheetName": "Most bough drugs 2000 - 2002",
      "data": [
        {
          "2000": "Paracetamol",
          "2001": "cold cup",
          "2002": "paracetamol"
        },
        {
          "2000": "kinini",
          "2001": "kinini",
          "2002": "hedex"
        },
        {
          "2000": "luartem",
          "2001": "luartem",
          "2002": "kinini"
        },
        {
          "2000": "hedex",
          "2001": "hedex",
          "2002": "luartem"
        }
      ]
    }
  ]
}


  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home role="ADMIN" data={data} />} />
          <Route  path="/sign-up" element={<SignUp />} />
          <Route  path="/sign-in" element={<SignIn />} />
          <Route  path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
