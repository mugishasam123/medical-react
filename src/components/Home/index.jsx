import "./Home.css";
import Users from "../Users";
import Table from "../Table";
import PageLoader from "../PageLoader";

const Home = ({ data }) => {
  const users = JSON.parse(localStorage.getItem("data"));

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      {data ? (
        <div className="container-home">
          {data.role == "ADMIN" && <Users users={data.users} />}
          {data.role == "ADMIN" ? (
            <div>
              <div className="log-group">
                <button className="log-out" onClick={handleLogOut}>
                  Log out
                </button>
              </div>
              <div className="tables">
                {data.tables.map((table) => (
                  <Table data={table} key={table.sheetName} />
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="log-left">
                <button className="log-out" onClick={handleLogOut}>
                  Log out
                </button>
              </div>
              <div className="tables">
                <Table data={data} />
              </div>
            </div>
          )}
        </div>
      ) : (
        <PageLoader />
      )}
    </>
  );
};

export default Home;
