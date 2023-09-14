import React from "react";
import { useDataContext } from "../context/DataContext";
import "./List.css";

const List: React.FC = () => {
  const { items, selectItem, selectedItemId } = useDataContext();

  return (
    <div>
      <h2>List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Subscription</th>
            <th>Employment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={index}
              className={selectedItemId === index ? "selected" : ""}
              onClick={() => selectItem(index)}
            >
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.subscribed}</td>
              <td>{item.employed ? "Yes" : "No"}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
