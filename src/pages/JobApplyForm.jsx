import { useLoaderData } from "react-router-dom";
import jobBannerImg from "../assets/jobBanner.jpg";

const JobApplyForm = () => {
  const job = useLoaderData();
  const {
    title,
    company,
    location,
    jobType,
    applicationDeadline,
    hr_email,
    company_logo,
    salaryRange,
  } = job || {};

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const github = form.github.value;
    const linkedIn = form.linkedIn.value;
    const phone = form.phone.value;
    const expectedSalary = form.expectedSalary.value;
    const message = form.message.value;
    const cv = form.cv.value;
    const formData = {
      name,
      email,
      github,
      linkedIn,
      phone,
      expectedSalary,
      message,
      cv,
    };
    console.log(formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner */}
      <div className="relative">
        <img
          src={jobBannerImg}
          alt="Job Banner"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-md">
            Apply for {title}
          </h1>
          <p className="mt-2 text-lg md:text-xl font-medium">{company}</p>
        </div>
      </div>

      {/* Application Form */}
      <div className="p-6 mt-8 max-w-4xl mx-auto bg-white rounded-lg shadow-2xl">
        <header className="flex flex-col md:flex-row items-center gap-6 mb-6">
          <img
            src={company_logo}
            alt={`${company} logo`}
            className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-lg"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
            <p className="text-gray-500">{company}</p>
            <p className="text-sm text-gray-400">
              {location} - {jobType}
            </p>
          </div>
        </header>

        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Applicant Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Applicant Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Github Url */}
            <div>
              <label
                htmlFor="github"
                className="block text-gray-700 font-medium"
              >
                Github URL
              </label>
              <input
                type="url"
                id="github"
                name="github"
                required
                placeholder="Enter your Github Url"
                className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* LinkedIn Url */}
            <div>
              <label
                htmlFor="linkedIn"
                className="block text-gray-700 font-medium"
              >
                LinkedIn URL
              </label>
              <input
                type="url"
                id="linkedIn"
                name="linkedIn"
                required
                placeholder="Enter your LinkedIn Url"
                className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Enter your phone number"
                className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Expected Salary */}
            <div>
              <label
                htmlFor="expectedSalary"
                className="block text-gray-700 font-medium"
              >
                Expected Salary (BDT)
              </label>
              <input
                type="number"
                id="expectedSalary"
                name="expectedSalary"
                placeholder={`Enter salary (e.g., ${salaryRange?.min}-${salaryRange?.max})`}
                className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Why are you a good fit for this role?"
              className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* CV Upload */}
          <div className="mt-6">
            <label htmlFor="cv" className="block text-gray-700 font-medium">
              CV URL
            </label>
            <input
              type="url"
              id="cv"
              name="cv"
              accept=".pdf,.doc,.docx"
              placeholder="Your CV Url"
              required
              className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Application Deadline */}
          <div className="mt-4 text-gray-600">
            <p>
              <strong>Application Deadline:</strong> {applicationDeadline}
            </p>
            <p>
              <strong>HR Email:</strong> {hr_email}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplyForm;
