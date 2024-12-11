import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div>
      <div className="text-center my-8">
        <h2 className="text-2xl font-bold text-gray-800">Jobs of the day</h2>
        <p className="text-gray-500 mt-2">
          Search and connect with the right candidates faster.
        </p>
      </div>
      <div>
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
