import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 mr-2 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25v19.5M4.5 8.25L12 2.25l7.5 6M4.5 15.75L12 21.75l7.5-6"
                />
              </svg>

              <h1 className="text-xl font-bold text-blue-600">
                <Typewriter
                  words={["Job Portal"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </h1>
            </div>
            <p className="text-gray-600">
              JobPortal is the heart of the design community and the best
              resource to discover and connect with designers and jobs
              worldwide.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <Link to="#" className="text-blue-600 hover:opacity-80">
                <i className="fab fa-facebook fa-lg"></i>
              </Link>
              <Link to="#" className="text-blue-400 hover:opacity-80">
                <i className="fab fa-twitter fa-lg"></i>
              </Link>
              <Link to="#" className="text-blue-700 hover:opacity-80">
                <i className="fab fa-linkedin fa-lg"></i>
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-600 hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/candidates"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Candidates
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/feature"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Feature
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/credit"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Credit
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-blue-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ios" className="text-gray-600 hover:text-blue-600">
                  iOS
                </Link>
              </li>
              <li>
                <Link
                  to="/android"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Android
                </Link>
              </li>
              <li>
                <Link
                  to="/microsoft"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Microsoft
                </Link>
              </li>
              <li>
                <Link
                  to="/desktop"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Desktop
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Download App</h3>
            <p className="text-gray-600 mb-4">
              Download our Apps and get extra 15% Discount on your first
              Order...!
            </p>
            <div className="flex space-x-4">
              <Link
                to="/app-store"
                className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900"
              >
                <i className="fab fa-apple mr-2"></i>App Store
              </Link>
              <Link
                to="/google-play"
                className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600"
              >
                <i className="fab fa-google-play mr-2"></i>Google Play
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; 2024. JobPortal all rights reserved</p>
          <div className="space-x-4">
            <Link to="/privacy-policy" className="hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-blue-600">
              Terms & Conditions
            </Link>
            <Link to="/security" className="hover:text-blue-600">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
