import DirectChat from "./components/DirectChat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerSupport from "./components/CustomerSupport";
import Layout from "./components/Layout";
import GroupChat from "./components/GroupChat";
import { useState } from "react";
import Login from "./components/Login";

export type User = {
  id: string;
  userName: string;
  email: string;
  profilePicture: string;
  status: string;
  lastSeen: bigint;
  dateJoined: bigint;
};

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  if (!user) {
    return <Login {...{setUser}}/>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout  />}>
          <Route index element={<DirectChat {...{user}} />} />
          <Route path="/support" element={<CustomerSupport {...{user}} />} />
          <Route path="/group-chat" element={<GroupChat {...{user}} />} />
        </Route>
        <Route path="login" element={<div>Login</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
