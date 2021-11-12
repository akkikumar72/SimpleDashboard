import React from "react";
import { formatDateTime } from "../../utils/utils";

const Table = (props) => {
  const { colData, dailyData } = props;
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          {colData.map((col, key) => (
            <th key={key}>{col?.friendly_name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dailyData.map((col, key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{formatDateTime(Object.values(col)[0])}</td>
            <td>{formatDateTime(Object.values(col)[1])}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
