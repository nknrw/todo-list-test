import React, { useState } from "react";
import { useDataContext } from "../context/DataContext";

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
      setSubscribed("");
      setEmployed(false);
    }
  };

  return (
    <div>
      <h2>Menu</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age || ""}
        onChange={(e) => setAge(parseInt(e.target.value, 10))}
      />
      <select
        value={subscribed}
        onChange={(e) => setSubscribed(e.target.value)}
      >
        <option value="">Select Subscription</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label>
        Employed:{" "}
        <input
          type="checkbox"
          checked={employed}
          onChange={() => setEmployed(!employed)}
        />
      </label>
      <button onClick={handleInsert}>Insert</button>
      <button onClick={deleteItem}>Delete</button>{" "}
    </div>
  );
};

export default Menu;
