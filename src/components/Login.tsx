import React, { useState } from "react";
import { User } from "../App";
import { v4 as uuidv4 } from "uuid";

const Login = ({ setUser }: { setUser: (user: User | null) => void }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user: User = {
      id: uuidv4(),
      userName,
      email,
      profilePicture: "",
      status,
      lastSeen: BigInt(Date.now()),
      dateJoined: BigInt(Date.now()),
    };

    console.log(user);

    setUser(user);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <div className="bg-white w-96 p-8 rounded-lg shadow-lg text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="userName" className="block text-gray-300">
              Username
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="border rounded px-3 py-2 w-full"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded px-3 py-2 w-full"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block text-gray-300">
              Status
            </label>
            <input
              type="text"
              id="status"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border rounded px-3 py-2 w-full"
              placeholder="Enter your status"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
