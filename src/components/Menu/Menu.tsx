import React, { useState } from "react";
import { useDataContext } from "../../context/DataContext";
import "./Menu.css";

const Menu: React.FC = () => {
  const { insertItem, deleteItem } = useDataContext();
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | undefined>(undefined);
  const [subscribed, setSubscribed] = useState("");
  const [employed, setEmployed] = useState(false);

  const handleInsert = () => {
    if (name && age !== undefined && subscribed && subscribed !== "") {
      const newItem = {
        name,
        age,
        subscribed,
        employed,
      };
      insertItem(newItem);
      setName("");
      setAge(undefined);
      setSubscribed("Subscribed");
      setEmployed(false);
    }
  };

  return (
    <div className="menu">
      <h2 className="menu-heading">Insert Row</h2>
      <input
        className="menu-input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="menu-input"
        type="number"
        placeholder="Age"
        value={age || ""}
        onChange={(e) => setAge(parseInt(e.target.value, 10))}
      />
      <select
        className="menu-input"
        value={subscribed}
        onChange={(e) => setSubscribed(e.target.value)}
      >
        <option value="Subscribed">Subscribed</option>
        <option value="Not Subscribed">Not Subscribed</option>
        <option value="Other">Other</option>
      </select>
      <label>
        <input
          className="menu-checkbox"
          type="checkbox"
          checked={employed}
          onChange={() => setEmployed(!employed)}
        />
        Employed{" "}
      </label>
      <button className="menu-button" onClick={handleInsert}>
        Insert
      </button>
      <div className="menu-separator"></div>
      <label>
        <input className="menu-input" type="checkbox" />
        Mode{" "}
      </label>
      <button className="menu-button" onClick={deleteItem}>
        Delete
      </button>{" "}
    </div>
  );
};

export default Menu;
