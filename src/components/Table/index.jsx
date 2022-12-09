import "./Table.css";

const Table = ({ data }) => {
  return (
    
    <div>
      <h3>{data.sheetName}</h3>
      <table className="styled-table">
        <thead>
          <tr>
              <th >2000</th>
              <th >2001</th>
              <th >2002</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((row) => (
            <tr className="active-row">
              <td>{row["2000.0"]}</td>
              <td>{row["2001.0"]}</td>
              <td>{row["2002.0"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
