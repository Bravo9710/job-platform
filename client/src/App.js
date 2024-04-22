import "./App.css";
// import logo from "./logo.svg";

import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import JobOfferPage from "./pages/JobOfferPage";
import JobOffersListPage from "./pages/JobOffersListPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [jobOffers, setJobOffers] = useState([]);

  useEffect(() => {
    fetchJobOffers();
  }, []);

  const fetchJobOffers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/job-offers");
      if (response.ok) {
        const data = await response.json();
        setJobOffers(data);
      } else {
        console.error("Failed to fetch job offers");
      }
    } catch (error) {
      console.error("Error fetching job offers", error);
    }
  };

  return (
    <Router basename="/client">
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/job-offers"
            element={<JobOffersListPage jobOffers={jobOffers} />}
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/job-offers/:id"
            element={<JobOfferPage jobOffers={jobOffers} />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
