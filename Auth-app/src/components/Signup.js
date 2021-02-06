import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/devchallenges.svg";
import facebookLogo from "../assets/Facebook.svg";
import githubLogo from "../assets/Github.svg";
import googleLogo from "../assets/Google.svg";
import Alert from "../components/layout/Alert";
import Spinner from "../components/layout/Spinner";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup, facebookLogin, githubLogin, googleLogin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  async function onFbLogin() {
    emailRef.current.value = "";
    passwordRef.current.value = "";
    try {
      setLoading(true);
      setError("");
      await facebookLogin();
      history.push("/");
    } catch (err) {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  async function onGithubLogin() {
    emailRef.current.value = "";
    passwordRef.current.value = "";
    try {
      setError("");
      setLoading(true);
      await githubLogin();
      history.push("/");
    } catch (err) {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  async function onGoogleLogin() {
    emailRef.current.value = "";
    passwordRef.current.value = "";
    try {
      setError("");
      setLoading(true);
      await googleLogin();
      history.push("/");
    } catch (err) {
      setError("Failed to create an account");
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
          <div className="border border-gray-500 rounded-xl p-6 sm:p-8 md:max-w-md max-w-sm">
            <img src={logo} alt="" className="mb-4" />
            <div className="">
              <h4 className="my-2">
                Join thousands of learners from around the world
              </h4>
              <p className="text-gray-700 my-2">
                Master web development by making real-life projects. There are
                multiple paths for you to choose
              </p>
              <form className="my-4" onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="on"
                  ref={emailRef}
                  style={{ fontFamily: "Noto Sans, FontAwesome" }}
                  placeholder="&#xf01c; Email"
                  className="border border-gray-500 rounded w-full p-2 px-3 mt-2 mb-1"
                />
                <input
                  type="password"
                  name="password"
                  autoComplete="on"
                  ref={passwordRef}
                  placeholder="&#xf023; Password"
                  style={{ fontFamily: "Noto Sans, FontAwesome" }}
                  className="border border-gray-500 rounded w-full p-2 px-3 mt-2 mb-4"
                />
                <button className="w-full bg-blue-600 rounded-lg font-bold text-white text-center px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-700 mr-6">
                  Start coding now
                </button>
              </form>
              <p className="text-center text-sm text-gray-700 my-2">
                or continue with these social profile
              </p>
              <div className="flex justify-center my-4">
                <button onClick={onFbLogin} className="pr-2 cursor-pointer">
                  <img src={facebookLogo} alt="" />
                </button>
                <button onClick={onGithubLogin} className="pr-2 cursor-pointer">
                  <img src={githubLogo} alt="" />
                </button>
                <button onClick={onGoogleLogin} className="pr-2 cursor-pointer">
                  <img src={googleLogo} alt="" />
                </button>
              </div>
              <p className="text-center text-sm text-gray-700 my-2">
                Already a member?{" "}
                <Link className="text-blue-500" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
