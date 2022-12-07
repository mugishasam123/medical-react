import "./Table.css";

const Table = ({ data }) => {
  return (
    
    <div>
      <h3>{data.sheetName}</h3>
      <table className="styled-table">
        <thead>
          <tr>
            {Object.keys(data.data[0]).map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.data.map((row) => (
            <tr className="active-row">
              <td>{row[2000]}</td>
              <td>{row[2001]}</td>
              <td>{row[2002]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
