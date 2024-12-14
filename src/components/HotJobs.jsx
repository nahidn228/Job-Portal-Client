import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import JobCard from "./JobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://job-portal-server-two.vercel.app/jobs8")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div className="">
      <div className="text-center my-8">
        <h2 className="text-2xl font-bold text-gray-800">Jobs of the day</h2>
        <p className="text-gray-500 mt-2">
          Search and connect with the right candidates faster.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
      <div className="flex justify-end">
        <Link
          to="/find-job"
          className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
        >
          See All Jobs
          <FaArrowRight className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default HotJobs;
