import { motion } from "motion/react";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";

const Banner = () => {
  return (
    <div className="hero  min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeOut" }}
            className="max-w-sm w-64  rounded-t-[40px] rounded-br-[40px] border-b-8 border-l-8 border-blue-500 shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [50, 90, 50] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeOut" }}
            className="max-w-sm w-64  rounded-t-[40px] rounded-br-[40px] border-b-8 border-l-8 border-blue-500 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: [0, 90, 0] }}
            transition={{
              duration: 4,
              delay: 1,
              ease: "linear",
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            <motion.span
              animate={{
                color: ["#9920de", "#206ede", "#20de8a", "#ccde20", "#de4820"],
              }}
              transition={{
                duration: 5,
                delay: 1,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              Latest
            </motion.span>{" "}
            Job For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
