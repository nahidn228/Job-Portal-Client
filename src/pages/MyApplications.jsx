import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/job-applications?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);

  console.log(jobs);

  return (
    <div>
      <h2 className="text-xl">My Application: {jobs.length} </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>Job</th>
              <th>Job Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt={job.company}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.category}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                {job.title}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                  {job.category}
                  </span>
                </td>
                <td> {job.jobType}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
