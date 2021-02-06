import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/devchallenges.svg";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [displayPopup, setDisplayPopup] = useState(false);
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/login");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <nav className="flex justify-between content-center">
      <img src={logo} alt="" />
      <div className="flex h-full content-center relative">
        <img
          className="rounded-lg"
          style={{ maxWidth: "40px" }}
          src={
            currentUser && currentUser.photoURL !== ""
              ? currentUser.photoURL
              : "https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280.png"
          }
          alt=""
        />
        <h5 className="m-auto text-sm ml-3">
          {currentUser && currentUser.displayName !== ""
            ? currentUser.displayName
            : "User"}
        </h5>
        <i
          onClick={() => setDisplayPopup(!displayPopup)}
          className="fas fa-caret-down m-auto mx-3 cursor-pointer"
        ></i>
        {/* popup */}
        <div
          style={{ top: "40px", width: "160px" }}
          className={`bg-white border border-gray-500 absolute rounded-lg p-2 ${
            displayPopup ? "block" : "hidden"
          }`}
        >
          <div className="hover:bg-gray-500 hover:text-white text-gray-700 p-2 rounded-lg">
            <i className="fas fa-user-circle mr-2"></i>
            <Link to="/">My Profile</Link>
          </div>
          <div className="hover:bg-gray-500 hover:text-white text-gray-700 p-2 rounded-lg">
            <i className="fas fa-comment-dots mr-2"></i>
            <Link to="/">Group Chat</Link>
          </div>
          <hr />
          <div className="hover:bg-gray-500 hover:text-white text-red-600 p-2 rounded-lg">
            <i className="fas fa-sign-out-alt mr-2"></i>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
