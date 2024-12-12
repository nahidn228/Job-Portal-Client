const AddJob = () => {
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);

    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    console.log(newJob);
  };
  return (
    <div>
      <h2 className="text-2xl">Post a JOB</h2>
      <form onSubmit={handleAddJob} className="card-body">
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            placeholder="Job Title"
            name="title"
            className="input input-bordered"
            required
          />
        </div>

        {/* Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered"
            required
          />
        </div>

        {/* jobType */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select
            name="jobType"
            className="select select-ghost w-full max-w-xs"
          >
            <option disabled selected>
              Pick Your Job Type
            </option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Intern</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>
        </div>

        {/* category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select
            name="category"
            className="select select-ghost w-full max-w-xs"
          >
            <option disabled selected>
              Pick a Job Field
            </option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>
        </div>

        {/* Salary Range */}
        <label className="label">
          <span className="label-text">Salary Range</span>
        </label>
        <div className="form-control grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="form-control">
            <input
              type="text"
              name="min"
              placeholder="Min"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="max"
              placeholder="Max"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <select
              name="currency"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled selected>
                Pick Your Currency
              </option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>

        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Job Description"
            name="description"
            required
          ></textarea>
        </div>

        {/* Company */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input input-bordered"
            required
          />
        </div>

        {/* Job Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Put each requirements in a new line"
            name="requirements"
            required
          ></textarea>
        </div>

        {/* Job Responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Write each responsibility in a new line"
            name="responsibilities"
            required
          ></textarea>
        </div>

        {/* Hr_Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Hr_Email</span>
          </label>
          <input
            type="email"
            name="hr_email"
            placeholder="Write your hr_email"
            className="input input-bordered"
            required
          />
        </div>

        {/* Hr_Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Hr_Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="Write your Hr_Name"
            className="input input-bordered"
            required
          />
        </div>

        {/* Company Logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input
            type="url"
            name="company_logo"
            placeholder="Put your company logo URL"
            className="input input-bordered"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Post Job</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
