import Lottie from "lottie-react";
import { useContext } from "react";
import registerLottieData from "../assets/register.json";
import AuthContext from "../context/AuthContext/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (regex.test(password)) {
      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User created successfully:", user);
        })
        .catch((error) => {
          console.error("Error creating user:", error.code);
        });
    } else {
      console.log("Invalid password! Ensure it meets the criteria.");
    }
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Lottie Animation Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Lottie
            animationData={registerLottieData}
            className="md:w-10/12 w-full"
          />
        </div>

        {/* Form Section */}
        <div className="card flex-shrink-0 w-full max-w-md shadow-lg bg-white rounded-lg">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
              Create an Account
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered border-gray-300 focus:ring focus:ring-indigo-200"
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
                className="input input-bordered border-gray-300 focus:ring focus:ring-indigo-200"
                required
              />
              <p className="text-sm text-gray-500 mt-2">
                * Password must contain at least 6 characters, one uppercase,
                one lowercase, and one number.
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 text-white">
                Register
              </button>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-indigo-600 hover:underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
