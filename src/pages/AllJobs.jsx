import Lottie from "lottie-react";
import { useLoaderData } from "react-router-dom";
import bannerLottieData from "../assets/banner.json";
import JobCard from "../components/JobCard";
const AllJobs = () => {
  const allJobs = useLoaderData();
  return (
    <div className=''>
      {/* Lottie Animation Section */}
      <div className=" flex justify-center my-2">
        <Lottie
          animationData={bannerLottieData}
          className=" w-full border-2 p-1"
        />
      </div>
      {/* Heading */}
      <div className="text-center my-10 w-11/12 mx-auto">
        <h2 className=" text-2xl md:text-4xl font-bold text-gray-800">
          {" "}
          <span className="text-[#3C65F5]">{allJobs.length} Jobs </span>{" "}
          Available Now
        </h2>
        <p className="text-gray-500 text-base md:text-xl mt-2">
          Search and connect with the right candidates faster.
        </p>
      </div>
      {/* Jobs card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-11/12 mx-auto">
        {allJobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
