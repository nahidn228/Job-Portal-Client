import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const applications = useLoaderData();
  console.log(applications);
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
              <th className="px-4 py-2 text-left">Deadline</th>
              {/* <th className="px-4 py-2">View Applications</th> */}
            </tr>
          </thead>
          <tbody>
            {applications.map((application, idx) => (
              <tr key={idx} className="hover:bg-gray-100 transition-all">
                <td className="px-4 py-2">{idx + 1}</td>
                <td className="px-4 py-2">
                  <div className="font-semibold">
                    {application.name}
                  </div>
                </td>
                <td className="px-4 py-2">
                <div className="font-semibold">
                        {application.applicant_email}
                      </div>
                 
                </td>
                <td className="px-4 py-2">{application.github}</td>
                <td className="px-4 py-2">{application.phone}</td>
                <td className="px-4 py-2">{application.applicationCount}</td>
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
