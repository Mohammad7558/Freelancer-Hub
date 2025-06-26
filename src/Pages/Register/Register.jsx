import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaGoogle } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthContext";

const Register = () => {
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUserWithEmailPass, createUserWithGoogle, setUser, updateUser } =
    useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const photoLink = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    setPasswordError("");
    const haveUpperCase = /[A-Z]/;
    const haveLowerCase = /[a-z]/;

    if (userName === "") {
      return toast.error("Enter Your Name");
    } else if (photoLink === "") {
      return toast.error("Enter Your Photo Url");
    } else if (email === "") {
      return toast.error("Enter Email");
    } else if (password === "") {
      return toast.error("Write A Password");
    } else if (password.length < 6) {
      return toast.error("Password Must Be 6 Character Long");
    } else if (!haveLowerCase.test(password)) {
      return toast.error("Password Must Have A Lowercase");
    } else if (!haveUpperCase.test(password)) {
      return toast.error("Password Must Have An Uppercase");
    }

    const toastId = toast.loading("Creating User");

    createUserWithEmailPass(email, password)
      .then((result) => {
        const user = result.user;
        const { uid, email } = user;
        const newUser = { uid, email };
        fetch("https://assignment-10-server-side-psi-eight.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        updateUser({ displayName: userName, photoURL: photoLink })
          .then(() => {
            setUser({ ...user, displayName: userName, photoURL: photoLink });
          })
          .catch((error) => {
            toast.error(error.message);
          });
        toast.dismiss(toastId);
        toast.success("User Created Successfully", { id: toastId });
        navigate(from, { replace: true });
        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.message, { id: toastId });
      });
  };

  const handleRegisterWithGoogle = () => {
    const toastId = toast.loading("Creating User");
    createUserWithGoogle(provider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        toast.dismiss(toastId);
        toast.success("User created Successfully", { id: toastId });
      })
      .catch((error) => {
        toast.error(error.message, { id: toastId });
      });
  };

  return (
    <div className="relative bg-base-200 py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center transition-colors duration-300 overflow-x-hidden">
      {/* Background blur balls */}
      <div className="absolute -top-32 -left-32 w-72 h-72 sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 opacity-20 blur-3xl animate-pulse rounded-full z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300 opacity-20 blur-3xl animate-pulse rounded-full z-0"></div>

      <div className="relative z-10 w-full max-w-md bg-base-100 p-10 shadow-md rounded-xl border border-base-300">
        <h2 className="text-2xl font-semibold text-center mb-5">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered w-full rounded-md mb-2"
              placeholder="Enter your name"
              name="userName"
            />
          </div>
          <div>
            <label
              htmlFor="photoUrl"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photoUrl"
              className="input input-bordered w-full rounded-md mb-2"
              placeholder="Enter your photo URL"
              name="photoUrl"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full rounded-md mb-2"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="input input-bordered w-full rounded-md"
                placeholder="Enter your password"
                name="password"
              />
              {showPassword ? (
                <LuEyeClosed
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-4 z-10 cursor-pointer text-lg text-gray-600 dark:text-gray-300"
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-4 z-10 cursor-pointer text-lg text-gray-600 dark:text-gray-300"
                />
              )}
            </div>
            <p className="text-red-500 font-semibold">{passwordError}</p>
          </div>
          <button type="submit" className="w-full btn btn-primary">
            Register
          </button>
        </form>

        {/* Custom Divider */}
        <div className="flex items-center gap-3 my-6">
          <hr className="flex-grow border-gray-300 dark:border-gray-700" />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Or Register With
          </span>
          <hr className="flex-grow border-gray-300 dark:border-gray-700" />
        </div>

        {/* Google Sign In */}
        <div className="text-center mt-6 mb-4">
          <button
            onClick={handleRegisterWithGoogle}
            className="btn btn-circle btn-outline"
          >
            <FaGoogle />
          </button>
          <p className="mt-2 text-sm">Google</p>
        </div>

        {/* Login Link */}
        <div className="mt-4 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            Already Have An Account?{" "}
            <Link className="link text-primary font-medium" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
