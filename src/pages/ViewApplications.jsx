import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const ViewApplications = () => {
  const applications = useLoaderData();
  console.log(applications);
  const handleStatusChange = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:5000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Your Status has been Updated !",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Applications For this applications
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white p-4">
        <div className="mb-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold">
            Total Applications: {applications.length}
          </h3>
        </div>

        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">SL No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Github Url</th>
              <th className="px-4 py-2 text-left">Phone Number</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Update Status</th>
              {/* <th className="px-4 py-2">View Applications</th> */}
            </tr>
          </thead>
          <tbody>
            {applications.map((application, idx) => (
              <tr key={idx} className="hover:bg-gray-100 transition-all">
                <td className="px-4 py-2">{idx + 1}</td>
                <td className="px-4 py-2">
                  <div className="font-semibold">{application.name}</div>
                </td>
                <td className="px-4 py-2">
                  <div className="font-semibold">
                    {application.applicant_email}
                  </div>
                </td>
                <td className="px-4 py-2">{application.github}</td>
                <td className="px-4 py-2">{application.phone}</td>
                <td className="px-4 py-2">{application.status || ""}</td>
                <td className="px-4 py-2">
                  <select
                    onChange={(e) => handleStatusChange(e, application._id)}
                    defaultValue={application.status || "Change Status"}
                    className="select select-bordered select-xs w-full max-w-xs"
                  >
                    <option disabled>Change Status</option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
                {/* <td className="px-4 py-2">
                  <Link className="btn btn-primary btn-sm" to={`/viewApplications/${application._id}`}>
                   See Details
                  </Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
