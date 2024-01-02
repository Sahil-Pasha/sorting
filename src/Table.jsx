import React, { useState } from "react";
import mockData from "./constants/MOCK_DATA.json";
const Table = () => {
  const [data, setData] = useState(mockData);
  const [order, setOrder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) => {
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
      });
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) => {
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1;
      });
      setData(sorted);
      setOrder("ASC");
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table>
        <thead>
          <th>
            <button onClick={() => sorting("first_name")}>First Name</button>
          </th>
          <th>
            <button onClick={() => sorting("last_name")}>Last Name</button>
          </th>
          <th>
            <button onClick={() => sorting("email")}>Email</button>
          </th>
          <th>
            <button onClick={() => sorting("gender")}>Gender</button>
          </th>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
