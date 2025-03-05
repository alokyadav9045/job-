import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    console.log("Fetching jobs...");
    axios.get("http://localhost:4000/api/v1/job/getall", { withCredentials: true })
      .then((res) => {
        console.log("API Response:", res.data); // Debugging
        setJobs(res.data.jobs || []); // Safe handling
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error.response?.data || error.message);
      });
  }, []);
  
  return (
    <section className="jobs page">
      <div className="container">
        <h1>ALL AVAILABLE <span className="company">JOBS</span> </h1>
        <div className="banner">
          {jobs.length > 0 ? (
            jobs.map((element) => (
              <div className="card" key={element._id}>
                <p>{element.title}</p>
                <p>{element.category}</p>
                <p>{element.country}</p>
                <Link to={`/job/${element._id}`}>Job Details</Link>
              </div>
            ))
          ) : (
            <p>No jobs available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
