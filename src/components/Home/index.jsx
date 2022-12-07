import "./Home.css";
import Users from "../Users";
import Table from "../Table";

const Home = ({ role, data }) => {
  const users = JSON.parse(localStorage.getItem("userList"));
  return (
    <div className="container-home">
      {role == "ADMIN" && <Users users={users} />}
      {role == "ADMIN" ? (
        <div className="tables">
          {data.tables.map((table) => (
            <Table data={table} key={table.sheetName} />
          ))}
        </div>
      ) : (
        <div className="tables">
          <Table data={data} />
        </div>
      )}
    </div>
  );
};

export default Home;
