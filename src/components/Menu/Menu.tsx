import React, { useState } from "react";
import { useDataContext } from "../../context/DataContext";
import "./Menu.css";

const Menu: React.FC = () => {
  const { insertItem, deleteItem } = useDataContext();
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | undefined>(undefined);
  const [subscribed, setSubscribed] = useState("Subscribed");
  const [employed, setEmployed] = useState(false);
  const [showSubscribedMenu, setShowSubscribedMenu] = useState(false);

  const handleInsert = () => {
    if (name && age !== undefined && subscribed && subscribed !== "") {
      const newItem = {
        name,
        age: age !== undefined ? age : 0,
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

  const incrementAge = () => {
    if (age !== undefined) {
      const newAge = age + 1;
      setAge(newAge <= 100 ? newAge : 100);
    } else {
      setAge(18); // Устанавливаем 18, если age был undefined
    }
  };

  const decrementAge = () => {
    if (age !== undefined) {
      const newAge = age - 1;
      setAge(newAge >= 18 ? newAge : 18);
    } else {
      setAge(18); // Устанавливаем 18, если age был undefined
    }
  };

  const handleSubscribedClick = () => {
    setShowSubscribedMenu(!showSubscribedMenu);
  };

  const handleSubscribedOptionClick = (option: string) => {
    setSubscribed(option);
    setShowSubscribedMenu(false);
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
      <div className="menu-age-input">
        <input
          className="menu-input age-input"
          type="number"
          placeholder="Age"
          value={age !== undefined ? age : ""}
          onChange={(e) => {
            const newAge = parseInt(e.target.value, 10);
            setAge(isNaN(newAge) ? undefined : newAge);
          }}
        />
        <button
          className="input-button decrement"
          onClick={decrementAge}
        ></button>
        <button
          className="input-button increment"
          onClick={incrementAge}
        ></button>
      </div>
      <div className="menu-subscribed">
        <input
          className="menu-input menu-select"
          placeholder="Subscribed"
          value={subscribed}
          // onClick={handleSubscribedClick}
        />
        <button
          className="input-button subscribed-button"
          onClick={handleSubscribedClick}
        ></button>
        {showSubscribedMenu && (
          <div className="subscribed-options">
            <div
              className="subscribed-option"
              onClick={() => handleSubscribedOptionClick("Subscribed")}
            >
              Subscribed
            </div>
            <div
              className="subscribed-option"
              onClick={() => handleSubscribedOptionClick("Not Subscribed")}
            >
              Not Subscribed
            </div>
            <div
              className="subscribed-option"
              onClick={() => handleSubscribedOptionClick("Other")}
            >
              Other
            </div>
          </div>
        )}
      </div>
      <label className="menu-label">
        <input
          className="menu-checkbox"
          type="checkbox"
          checked={employed}
          onChange={() => setEmployed(!employed)}
        />
        <div className="custom-checkbox"></div>
        Employed{" "}
      </label>
      <button className="menu-button" onClick={handleInsert}>
        Insert
      </button>
      <div className="menu-separator"></div>
      <label className="menu-label">
        <input className="menu-checkbox" type="checkbox" />
        <div className="menu-switch"></div>
        Mode{" "}
      </label>
      <button className="menu-button" onClick={deleteItem}>
        Delete
      </button>{" "}
    </div>
  );
};

export default Menu;
