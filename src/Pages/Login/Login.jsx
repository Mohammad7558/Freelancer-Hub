import React, { useContext, useState } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { LuEyeClosed } from "react-icons/lu";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../provider/AuthContext";

const Login = () => {
  const { signInEmailPassword, createUserWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const provider = new GoogleAuthProvider();

  const handleSignInUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === '') {
      return toast.error('Enter Email');
    } else if (password === '') {
      return toast.error('Enter Password');
    }
    const toastId = toast.loading('User Login...')

    signInEmailPassword(email, password)
      .then(() => {
        toast.success("User Login Successfully", { id: toastId });
        navigate(from, { replace: true });
        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.message, { id: toastId });
      });
  };

  const signInUser = () => {
    const toastId = toast.loading('User Login...')
    createUserWithGoogle(provider)
      .then(result => {
        const user = result.user;
        navigate(from, { replace: true });
        toast.success('User Log in Successfully', { id: toastId });
      })
      .catch(error => {
        toast.error(error.message, { id: toastId });
      });
  };

  return (
    <div className="relative bg-base-200 py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center transition-colors duration-300 overflow-hidden">
      {/* Background blur balls */}
      <div className="absolute -top-32 -left-32 w-72 h-72 sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 opacity-20 blur-3xl rounded-full z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300 opacity-20 blur-3xl rounded-full z-0"></div>

      <div className="relative z-10 w-full max-w-md bg-base-100 p-10 shadow-lg rounded-xl border border-base-300">
        <h2 className="text-2xl font-semibold text-center mb-5">Login</h2>

        <form onSubmit={handleSignInUser} className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="input input-bordered w-full"
                placeholder="Enter your password"
                name="password"
              />
              {showPassword ? (
                <LuEyeClosed
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-4 cursor-pointer text-lg"
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-4 cursor-pointer text-lg"
                />
              )}
              <div className="text-right mt-1">
                <Link className="link text-primary text-sm" state={{ email }} to="/forgetPassword">
                  Forget Password?
                </Link>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="w-full btn btn-primary">
            Login
          </button>
        </form>

        {/* Custom Divider with lines on both sides */}
        <div className="flex items-center gap-3 my-6">
          <hr className="flex-grow border-gray-300 dark:border-gray-700" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Or Login With</span>
          <hr className="flex-grow border-gray-300 dark:border-gray-700" />
        </div>

        {/* Google Sign-In */}
        <div className="text-center mt-6 mb-4">
          <button onClick={signInUser} className="btn btn-circle">
            <FaGoogle />
          </button>
          <p className="mt-2 text-sm">Google</p>
        </div>

        {/* Create Account */}
        <div className="mt-4 text-center">
          <p>
            New Here?{" "}
            <Link state={location.state} className="link text-primary font-medium" to="/register">
              Create An Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
