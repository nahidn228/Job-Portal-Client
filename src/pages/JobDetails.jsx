import { useLoaderData } from "react-router-dom";
const JobDetails = () => {
  const job = useLoaderData();
  const {
    applicationDeadline,
    category,
    company,
    company_logo,
    description,
    hr_email,
    hr_name,
    jobType,
    location,
    status,
    title,
    requirements,
    responsibilities,
    salaryRange,
  } = job || {};
  return (
    <div>
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        <header className="mb-6">
          <div className="flex items-center gap-4">
            <img
              src={company_logo}
              alt={`${company} logo`}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="text-gray-500">{company}</p>
            </div>
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-lg font-semibold">Employment Information</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p>
                <strong>Location:</strong> {location}
              </p>
              <p>
                <strong>Job Type:</strong> {jobType}
              </p>
              <p>
                <strong>Category:</strong> {category}
              </p>
            </div>
            <div>
              <p>
                <strong>Salary:</strong>{" "}
                {`${salaryRange.min} - ${
                  salaryRange.max
                } ${salaryRange.currency.toUpperCase()}`}
              </p>
              <p>
                <strong>Deadline:</strong> {applicationDeadline}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold">Job Description</h2>
          <p className="mt-2">{description}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold">Responsibilities</h2>
          <ul className="list-disc list-inside mt-2">
            {responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold">Requirements</h2>
          <ul className="list-disc list-inside mt-2">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </section>

        <footer className="mt-6 border-t pt-4">
          <p>
            <strong>Contact HR:</strong> {hr_name} ({hr_email})
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
            Apply Now
          </button>
        </footer>
      </div>
    </div>
  );
};

export default JobDetails;
