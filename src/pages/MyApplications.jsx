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

    // axios
    //   .get(`http://localhost:5000/job-applications?email=${user.email}`, {
    //     withCredentials: true,
    //   })
    //   .then((res) => setJobs(res.data));
  }, [user.email]);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/job-applications/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setJobs(jobs);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">My Applications</h2>

      <div className="overflow-x-auto rounded-lg shadow-lg bg-white p-4">
        <div className="mb-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold">
            Total Applications: {jobs.length}
          </h3>
        </div>

        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">SL No</th>
              <th className="px-4 py-2 text-left">Company</th>
              <th className="px-4 py-2 text-left">Job Title</th>
              <th className="px-4 py-2 text-left">Job Type</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr key={idx} className="hover:bg-gray-100 transition-all">
                <td className="px-4 py-2">{idx + 1}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt={job.company}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">{job.company}</div>
                      <div className="text-sm text-gray-500">
                        {job.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="font-semibold">{job.title}</div>
                  <span className="badge badge-ghost badge-sm mt-1">
                    {job.category}
                  </span>
                </td>
                <td className="px-4 py-2">{job.jobType}</td>
                <td className="px-4 py-2">
                  <button
                    className="btn btn-error btn-sm hover:bg-red-700"
                    onClick={() => handleDelete(job._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
