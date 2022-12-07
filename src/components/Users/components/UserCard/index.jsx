import "./UserCard.css";
import { FaUserCircle } from "react-icons/fa";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <FaUserCircle className="user-icon" />
      <div className="name-role">
        <span className="username">
          {user.firstName} {user.lastName}
        </span>
        <span className="role">{user.role}</span>
      </div>
    </div>
  );
};

export default UserCard;
