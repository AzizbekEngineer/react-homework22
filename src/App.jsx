import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./router/home/Home";
import CreateUser from "./router/create-user/CreateUser";
import AllUsers from "./router/all-users/AllUsers";
import FollowUsers from "./router/followUsers/FollowUsers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/follow-users" element={<FollowUsers />} />
      </Routes>
    </div>
  );
}

export default App;
