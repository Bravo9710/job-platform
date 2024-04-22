import React from "react";
import { Link } from "react-router-dom";

const JobOffersListPage = ({ jobOffers }) => {
  return (
    <div className="container">
      <h2 className="mt-5 mb-4">Job Offers</h2>
      <div className="row">
        {jobOffers.map((job) => (
          //   <div key={job._id.$oid} className="col-md-6 mb-4">
          <div key={job._id} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {job.company} - {job.location}
                </h6>
                <div className="card-text">
                  <strong>Salary:</strong> {job.salary}
                  <p>
                    <strong>Description:</strong> {job.description}
                  </p>
                </div>
                <Link
                  to={`/job-offers/${job._id}`}
                  //   to={`/job-offers/${job._id.$oid}`}
                  className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOffersListPage;
