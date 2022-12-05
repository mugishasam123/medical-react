import "./Users.css";
import NavBar from "./components/NavBar";
import UserCard from "./components/UserCard";
import { MdModeEdit } from "react-icons/md";

const Users = () => {
  return (
    <div className="container-users">
      <NavBar />
      <div className="users">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      <div className="edit-group">
        <MdModeEdit className="edit-icon" />
      </div>
    </div>
  );
};

export default Users;
