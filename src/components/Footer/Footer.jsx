import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content pt-16 pb-10 px-4 md:px-10 border-t border-base-300">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-2">FreelanceHub</h2>
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
