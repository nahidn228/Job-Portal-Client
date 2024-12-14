import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer1 = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Branding Section */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              Job Portal
            </h2>
            <p className="text-gray-400">
              Search, connect, and grow your career with the best job
              opportunities around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-black  mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/find-job" className="hover:text-blue-400">
                  Find a Job
                </Link>
              </li>
              <li>
                <Link to="/myApplication" className="hover:text-blue-400">
                  My Applications
                </Link>
              </li>
              <li>
                <Link to="/add-job" className="hover:text-blue-400">
                  Add a Job
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-4">
              Contact Us
            </h3>
            <p className="text-gray-400">123 Job Street, Career City</p>
            <p className="text-gray-400">Email: support@jobportal.com</p>
            <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-blue-400 text-gray-400 text-2xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 text-gray-400 text-2xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 text-gray-400 text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 text-gray-400 text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2024 Job Portal. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              JobPortal Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
