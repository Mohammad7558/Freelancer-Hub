import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content pt-16 pb-10 border-t border-base-300">
      <div className="w-11/12 mx-auto grid gap-10 md:grid-cols-4 sm:grid-cols-2">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-5">
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-primary-content"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                        </div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          FreelanceHub
                        </h1>
                      </Link>
          <p className="text-sm text-base-content/70">
            Bridging talent with opportunity. Join thousands of freelancers and
            clients connecting across the globe.
          </p>
          <div className="flex gap-4 mt-4 text-xl text-primary">
            <a href="https://www.facebook.com/imMOHAMMOD" target="_blank" className="hover:text-secondary transition-colors"><FaFacebookF /></a>
            <a href="https://x.com/iam_MOHAMMOD" target="_blank" className="hover:text-secondary transition-colors"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/mohammod-bin-amin-b051a0244/" target="_blank" className="hover:text-secondary transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-secondary transition-colors"><FaInstagram /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-base-content/70">
            <li><Link to='/terms' className="link link-hover">Terms And Condition</Link></li>
            <li><Link to='/aboutUS' className="link link-hover">About Us</Link></li>
            <li><Link to='/contact-us' className="link link-hover">Contact</Link></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-primary mb-3">Categories</h3>
          <ul className="space-y-2 text-sm text-base-content/70">
            <li><a className="link link-hover">Web Development</a></li>
            <li><a className="link link-hover">Graphic Design</a></li>
            <li><a className="link link-hover">Digital Marketing</a></li>
            <li><a className="link link-hover">Content Writing</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-primary mb-3">Stay Updated</h3>
          <p className="text-sm text-base-content/70 mb-3">
            Get the latest updates & job alerts.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full mb-3 bg-base-100 text-base-content"
          />
          <button className="btn btn-primary btn-sm w-full">Subscribe</button>
        </div>
      </div>

      <div className="mt-12 border-t border-base-300 pt-6 text-center text-sm text-base-content/50">
        © {new Date().getFullYear()} <span className="font-semibold text-primary">FreelanceHub</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
