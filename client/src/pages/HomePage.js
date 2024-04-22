// client/src/pages/Home.js
import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-primary text-white py-5 text-center">
        <div className="container">
          <h1 className="display-4">Welcome to our Job Offers Platform</h1>
          <p className="lead">
            Find exciting job opportunities tailored to your skills and
            interests.
          </p>
          <a href="/job-offers" className="btn btn-light btn-lg">
            Browse Job Offers
          </a>
        </div>
      </section>

      {/* About section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <h2>About Us</h2>
              <p>
                We are dedicated to helping job seekers find their dream jobs by
                connecting them with top companies and organizations. Our
                platform offers a wide range of job opportunities in various
                industries and locations. Whether you're a recent graduate
                looking for your first job or an experienced professional
                seeking new challenges, we have something for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-action section */}
      <section className="bg-info text-white py-5 text-center">
        <div className="container">
          <h2>Ready to Find Your Dream Job?</h2>
          <p className="lead">
            Sign up now and start applying to exciting job opportunities!
          </p>
          <a href="/register" className="btn btn-light btn-lg">
            Sign Up
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
