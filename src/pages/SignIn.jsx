import axios from "axios";
import Lottie from "lottie-react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import loginLottieData from "../assets/login.json";
import AuthContext from "../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";

const SignIn = () => {
  const { signInUser, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Sign In Data:", { email, password });
    signInUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Sign in user:", user);
        setUser(user);

        const user1 = { email: email };

        axios
          .post("http://localhost:5000/jwt", user1, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
          });

        //clear form
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 ">
      <div className="hero-content flex-col lg:flex-row-reverse items-center gap-10">
        {/* Lottie Animation Section */}
        <div className=" flex justify-center">
          <Lottie animationData={loginLottieData} className="w-full " />
        </div>

        {/* Sign In Form Section */}
        <div className="card w-full max-w-md shadow-2xl bg-white rounded-lg">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
              {" "}
              Sign In to Continue
              {/* <Typewriter
                words={["Sign In to Continue"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={40}
                delaySpeed={1500}
              /> */}
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered border-gray-300 focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered border-gray-300 focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg transition duration-300 transform hover:scale-105">
                Sign In
              </button>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">
              Do not have an account?{" "}
              <a
                href="/register"
                className="text-blue-600 hover:underline transition duration-300"
              >
                Register Now
              </a>
            </p>
            <div className="divider">OR</div>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
