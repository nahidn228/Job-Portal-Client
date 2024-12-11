import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    console.log("clicked");
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <>
      <div className="flex items-center justify-center m-4">
        <Link>
          {" "}
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-gray-700 shadow-md hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <FcGoogle size={20} />
            <span className="font-medium">Login with Google</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default SocialLogin;
