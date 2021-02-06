import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Alert from "../components/layout/Alert";
import Spinner from "../components/layout/Spinner";
import logo from "../assets/devchallenges.svg";
import facebookLogo from "../assets/Facebook.svg";
import githubLogo from "../assets/Github.svg";
import googleLogo from "../assets/Google.svg";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, facebookLogin, githubLogin, googleLogin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (passwordRef.current.value.length < 6) {
      setError("Password must be at least 6 characthers");
    }

    try {
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  async function onFbLogin() {
    emailRef.current.value = "";
    passwordRef.current.value = "";
    setLoading(true);
    try {
      setError("");
      await facebookLogin();
      history.push("/");
    } catch (err) {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  async function onGithubLogin() {
    emailRef.current.value = "";
    passwordRef.current.value = "";
    setLoading(true);
    try {
      setError("");
      await githubLogin();
      history.push("/");
    } catch (err) {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  async function onGoogleLogin() {
    emailRef.current.value = "";
    passwordRef.current.value = "";
    setLoading(true);
    try {
      setError("");
      await googleLogin();
      history.push("/");
    } catch (err) {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      {error && <Alert error={error} />}
      {loading ? (
        <Spinner />
      ) : (
        <div className="forms flex items-center flex-col justify-center h-screen">
          <div className="forms flex items-center justify-center h-screen">
            <div
              style={{}}
              className="border border-gray-500 rounded-xl p-6 sm:p-8 md:max-w-md max-w-sm"
            >
              <img src={logo} alt="" className="mb-4" />
              <div className="">
                <h4 className="my-2">Login</h4>
                <form className="my-4" onSubmit={(e) => handleSubmit(e)}>
                  <input
                    type="email"
                    ref={emailRef}
                    name="email"
                    required
                    autoComplete="on"
                    style={{ fontFamily: "Noto Sans, FontAwesome" }}
                    placeholder="&#xf01c; Email"
                    className="border border-gray-500 rounded w-full p-2 px-3 mt-2 mb-1"
                  />
                  <input
                    type="password"
                    ref={passwordRef}
                    name="password"
                    required
                    autoComplete="on"
                    placeholder="&#xf023; Password"
                    style={{ fontFamily: "Noto Sans, FontAwesome" }}
                    className="border border-gray-500 rounded w-full p-2 px-3 mt-2 mb-4"
                  />
                  <button className="w-full bg-blue-600 rounded-lg font-bold text-white text-center px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-700 mr-6">
                    Login
                  </button>
                </form>
                <p className="text-center text-sm text-gray-700 my-2">
                  or continue with these social profile
                </p>
                <div className="flex justify-center my-4">
                  <button onClick={onFbLogin} className="pr-2 cursor-pointer">
                    <img src={facebookLogo} alt="" />
                  </button>
                  <button
                    onClick={onGithubLogin}
                    className="pr-2 cursor-pointer"
                  >
                    <img src={githubLogo} alt="" />
                  </button>
                  <button
                    to={""}
                    onClick={onGoogleLogin}
                    className="pr-2 cursor-pointer"
                  >
                    <img src={googleLogo} alt="" />
                  </button>
                </div>
                <p className="text-center text-sm text-gray-700 my-2">
                  Don't have an account yet?{" "}
                  <Link className="text-blue-500" to="/signup">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
