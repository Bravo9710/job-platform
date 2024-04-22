// client/src/pages/JobOfferPage.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const JobOfferPage = ({ jobOffers }) => {
  const { id } = useParams();
  const jobOffer = jobOffers.find((job) => job._id === id);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{jobOffer.title}</h2>
          <h4 className="card-subtitle mb-3 text-muted">
            {jobOffer.company} - {jobOffer.location}
          </h4>
          <p className="card-text">
            <strong>Salary:</strong> {jobOffer.salary}
          </p>
          <p className="card-text">
            <strong>Requirements:</strong>
          </p>
          <ul className="">
            {jobOffer.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
          <p className="card-text">
            <strong>Description:</strong> {jobOffer.description}
          </p>
          <p className="card-text">
            <strong>Application Deadline:</strong> {jobOffer.deadline}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobOfferPage;
