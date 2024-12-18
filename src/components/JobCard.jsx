/* eslint-disable react/prop-types */

import { FaBusinessTime } from "react-icons/fa6";
import { IoLogoUsd } from "react-icons/io";
import { IoTimerOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";
const JobCard = ({ job }) => {
  const {
    applicationDeadline,
    company,
    company_logo,
    description,
    jobType,
    location,
    title,
    _id,
    requirements,
    salaryRange,
  } = job || {};

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="flex items-center gap-4 m-4">
        <figure>
          <img className="w-16" src={company_logo} alt={company} />
        </figure>
        <div>
          <h2 className="font-semibold text-xl">{company}</h2>
          <p className="text-gray-500 text-sm flex gap-1 items-center ">
            <LuMapPin />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body ">
        <h2 className="card-title">
          {title} ! <div className="badge badge-info badge-sm">NEW</div>
        </h2>

        <div className="flex items-center justify-between">
          <p className="text-gray-500 text-sm flex gap-2 items-center ">
            <FaBusinessTime />
            {jobType}
          </p>

          <p className="text-gray-500 text-sm flex gap-2 items-center ">
            <IoTimerOutline />
            {applicationDeadline}
          </p>
        </div>
        <p className="py-4"> {description.substring(0, 100)}...</p>
        <div className="flex gap-1 flex-wrap">
          {requirements.map((skill, idx) => (
            <p
              key={idx}
              className="border-2 rounded-xl p-1 text-center text-gray-500 font-medium hover:text-blue-500 hover:bg-slate-200"
            >
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center mt-4">
          <p className="flex items-center">
            Salary :<IoLogoUsd />
            {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`}>
            <button className="btn bg-[#E0E6F7] text-blue-600 font-light hover:btn-primary hover:font-semibold btn-sm">
              Apply
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
