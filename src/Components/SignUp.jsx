import React, { use, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const [error, setError] = useState("");

  const { createuser, setUser, updateUser, signInWithGoogle } =
    use(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.PhotURL.value;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegExp = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if (passwordRegExp.test(password) === false) {
      setError(
        "password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
      );
      return;
    } else {
      setError("");
    }

    setError("");

    createuser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Created account successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        // setUser(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Updated user successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch((error) => {
            setError(error.message);
            setUser(user);
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: `${error.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          });
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

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "SignUp successfull!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="min-h-[calc(100vh-323px)] py-15">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <button
          type="submit"
          onClick={handleGoogleSignUp}
          className="btn btn-outline hover:bg-primary hover:text-white text-lg m-8"
        >
          <FaGoogle />
          SignUp with Google
        </button>
        <p className="text-center">OR</p>
        <h2 className="text-3xl font-bold text-center pt-8">
          Register your account
        </h2>
        <form onSubmit={handleSignUp} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Enter your name"
              required
            />
            {/* PhotURL */}
            <label className="label">PhotURL</label>
            <input
              name="PhotURL"
              type="text"
              className="input"
              placeholder="Enter your PhotURL"
              required
            />
            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Enter your Email"
              required
            />
            {/* Password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input mb-1"
              placeholder="Enter your Password"
              required
            />
            {error && <p className="text-red-600 text-xs">{error}</p>}
            <button type="submit" className="btn bg-primary text-white mt-4">
              Register
            </button>
            <p className="text-center mt-3 font-semibold text-sm">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-secondary cursor-pointer hover:underline hover:font-bold"
              >
                Login
              </Link>
              .
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
