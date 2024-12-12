import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import jobBannerImg from "../assets/jobBanner.jpg";

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
    _id,
    requirements,
    responsibilities,
    salaryRange,
  } = job || {};

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner Section */}
      <div className="relative">
        <img
          src={jobBannerImg}
          alt="Job Banner"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-md">
            {title}
          </h1>
          <p className="mt-2 text-lg md:text-xl font-medium">{company}</p>
        </div>
      </div>

      {/* Job Details Card */}
      <div className="p-6 mt-8 max-w-5xl mx-auto bg-white rounded-lg shadow-2xl">
        {/* Header */}
        <header className="flex justify-between">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <img
              src={company_logo}
              alt={`${company} logo`}
              className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-blue-500 shadow-lg"
            />
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                {title}
              </h1>
              <p className="text-gray-500 text-lg">{company}</p>
            </div>
          </div>

          <div>
            <Link to={`/jobApply/${_id}`}>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 flex items-center gap-1">
                <IoCheckmarkDoneCircle />
                Apply Now
              </button>
            </Link>
          </div>
        </header>

        {/* Employment Information */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700">
            Employment Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
              <p>
                <strong>Status:</strong> {status}
              </p>
            </div>
          </div>
        </section>

        {/* Job Description */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700">
            Job Description
          </h2>
          <p className="mt-2 text-gray-600">{description}</p>
        </section>

        {/* Responsibilities */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700">
            Responsibilities
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
            {responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </section>

        {/* Requirements */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700">Requirements</h2>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-8 border-t pt-4 space-x-4">
          <p className="text-gray-700">
            <strong>Contact HR:</strong> {hr_name} ({hr_email})
          </p>
          <Link to={`/jobApply/${_id}`}>
            <button className="mt-6 px-6 py-3 btn bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200">
              Apply Now
            </button>
          </Link>
          <button className="mt-6 px-6 py-3 btn btn-outline  rounded-lg shadow-lg ">
            Save Job
          </button>
        </footer>
      </div>
    </div>
  );
};

export default JobDetails;
