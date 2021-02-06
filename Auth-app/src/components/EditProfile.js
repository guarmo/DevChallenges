import React, { useRef, useState } from "react";
import Navbar from "./layout/Navbar";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Alert from "./layout/Alert";
import Spinner from "./layout/Spinner";

function EditProfile() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const {
    currentUser,
    updateEmail,
    updatePassword,
    updateDisplayName,
  } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const promises = [];
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
    if (nameRef.current.value) {
      promises.push(updateDisplayName(nameRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Navbar />
      {error && <Alert error={error} />}
      {loading ? (
        <Spinner />
      ) : (
        <div className="my-10 max-w-screen-lg m-auto">
          <Link to="/" className="text-blue-600 hover:text-blue-800 my-4">
            <i className="fas fa-arrow-left"></i> Back
          </Link>
          <div className="my-2 border border-gray-500 rounded-lg">
            <form className=" py-6 px-8 w-3/4 sm:w-1/2" onSubmit={handleSubmit}>
              <header className="mb-4">
                <h1 className="text-2xl">Change Info</h1>
                <p className="text-sm text-gray-600">
                  Changes will be reflected to every service
                </p>
              </header>
              <div className="flex">
                <img
                  style={{ maxWidth: "70px" }}
                  src={
                    currentUser && currentUser.photoURL !== ""
                      ? currentUser.photoURL
                      : "https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280.png"
                  }
                  alt=""
                />
                <h3 className="uppercase m-auto ml-4 text-gray-600">
                  Change photo
                </h3>
              </div>
              <div className="my-4">
                <label
                  htmlFor="name"
                  className="block text-grey-darker text-sm font-bold"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  ref={nameRef}
                  defaultValue={currentUser.displayName}
                  placeholder="Enter your name..."
                  className="border border-gray-500 rounded-xl w-full p-2 px-3 mt-1"
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="email"
                  className="block text-grey-darker text-sm font-bold"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  ref={emailRef}
                  defaultValue={currentUser.email}
                  placeholder="Enter your email..."
                  className="border border-gray-500 rounded-xl w-full p-2 px-3 mt-1"
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="password"
                  className="block text-grey-darker text-sm font-bold"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  ref={passwordRef}
                  placeholder="Leave blank to keep the same"
                  className="border border-gray-500 rounded-xl w-full p-2 px-3 mt-1"
                />
              </div>
              <button className="bg-blue-600 rounded-lg font-bold text-white text-center px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-700 my-4">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EditProfile;
