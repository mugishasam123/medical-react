import "./Home.css";
import Users from "../Users";
import Table from "../Table";

const Home = ({ role, data }) => {
  const users = JSON.parse(localStorage.getItem("data"));
  return (
    <>
      {data ? (
        <div className="container-home">
          {role == "ADMIN" && <Users users={data.users} />}
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
      ) : (
        <span>loading...</span>
      )}
    </>
  );
};

export default Home;
