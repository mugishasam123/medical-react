import "./Users.css";
import NavBar from "./components/NavBar";
import UserCard from "./components/UserCard";
import { MdModeEdit } from "react-icons/md";
import { CSVLink } from "react-csv";

const Users = ({ users }) => {
  const csvData = users.map((user) => {
    const newUser = {
      name: `${user.firstName} ${user.lastName} `,
      role: user.role,
    };
    return newUser;
  });
  return (
    <div className="container-users">
      <NavBar />
      {users.length > 0 ? (
        <>
          <div className="users">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
          <CSVLink
            data={csvData}
            className="csv-button"
            filename={"usersList.csv"}
          >
            Download CSV
          </CSVLink>
          <div className="edit-group">
            <MdModeEdit className="edit-icon" />
          </div>
        </>
      ) : (
        <div className="no-users">No users are available yet</div>
      )}
    </div>
  );
};

export default Users;
