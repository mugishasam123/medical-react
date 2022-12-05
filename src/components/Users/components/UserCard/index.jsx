import "./UserCard.css";
import { FaUserCircle } from "react-icons/fa";

const UserCard = () => {
  return (
    <div className="user-card">
      <FaUserCircle className="user-icon" />
      <div className="name-role">
        <span className="username">Bill Gates</span>
        <span className="role">Admin</span>
      </div>
    </div>
  );
};

export default UserCard;
