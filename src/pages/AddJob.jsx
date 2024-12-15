import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);

    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Job Added!",
            text: "Your Job Added successfully!",
            icon: "success",
          });
          navigate("/myPostedJob");
        }
        console.log(data);
      });
  };
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Post a JOB</h2>
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white p-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* jobType */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Type</span>
              </label>
              <select
                name="jobType"
                defaultValue="Pick Your Job Type"
                className="select select-bordered select-ghost w-full "
              >
                <option disabled>Pick Your Job Type</option>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Intern</option>
                <option>Remote</option>
                <option>Hybrid</option>
              </select>
            </div>

            {/* Job Field / category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Field</span>
              </label>
              <select
                name="category"
                defaultValue="Pick Your Job Field"
                className="select select-bordered select-ghost w-full "
              >
                <option disabled>Pick a Job Field</option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Teaching</option>
              </select>
            </div>
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
                defaultValue="Pick Your Currency"
                className="select select-bordered select-ghost w-full "
              >
                <option disabled>Pick Your Currency</option>
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
          {/* Application Deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Application Deadline</span>
            </label>
            <input
              type="date"
              name="applicationDeadline"
              placeholder="Application Deadline"
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
              defaultValue={user?.email}
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
    </div>
  );
};

export default AddJob;
