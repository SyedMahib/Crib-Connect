import React, { use, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {
  const [error, setError] = useState("");

  const { signIn, signInWithGoogle, setUser } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = (e) => {
    e.preventDefault();

    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "LogIn successfull !",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "SignIn successfull !",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="min-h-[calc(100vh-323px)] pt-15">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <button
          type="submit"
          onClick={handleGoogleSignIn}
          className="btn btn-outline hover:bg-primary hover:text-white text-lg m-8"
        >
          <FaGoogle />
          SignIn with Google
        </button>
        <p className="text-center">OR</p>
        <h2 className="text-3xl font-bold text-center pt-3">
          Log in your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* Password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            {error && <p className="text-red-600 text-xs">{error}</p>}

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn text-white mt-4 bg-primary">
              Login
            </button>
            <p className="text-center mt-3 font-semibold text-sm">
              Don't have an account?{" "}
              <Link
                to="/auth/signUp"
                className="text-secondary cursor-pointer hover:underline hover:font-bold"
              >
                Register
              </Link>
              .
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
