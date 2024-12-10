import Lottie from "lottie-react";
import { useContext } from "react";
import loginLottieData from "../assets/login.json";
import AuthContext from "../context/AuthContext/AuthContext";

const SignIn = () => {
  const { signInUser, user, setUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Sign In Data:", { email, password });

    signInUser(email, password)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        setUser(currentUser);

        console.log("Sign In successfully", currentUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
      <div className="hero-content flex-col lg:flex-row-reverse items-center">
        {/* Lottie Animation Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Lottie animationData={loginLottieData} className="w-3/4 lg:w-full" />
        </div>

        {/* Sign In Form Section */}
        <div className="card w-full max-w-sm shadow-lg bg-white rounded-lg">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
              Welcome Back!
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
            <div className="form-control mt-4">
              <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white">
                Sign In
              </button>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">
              Do not have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Register Now
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
