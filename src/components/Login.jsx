import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  //   console.log(signInUser);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // SignIn with firebase
    signInUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        e.target.reset();
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", errorMessage);
      });
  };

  const handleGoogleLogIn = () => {
    signInWithGoogle();
  };
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6"></p>
        </div>
        <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="mt-6 form-control">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="pb-3 pl-2">
            New to Auth Mohamilo?
            <Link to="/register">
              <button className="link link-success">Please Register</button>
            </Link>
          </p>
          <p>
            <button className="btn btn-ghost" onClick={handleGoogleLogIn}>
              Google
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
