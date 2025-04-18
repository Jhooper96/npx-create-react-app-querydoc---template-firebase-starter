// src/Dashboard.jsx
import React from "react";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome to QueryDoc</h1>
      <p>You are logged in as: {auth.currentUser?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
