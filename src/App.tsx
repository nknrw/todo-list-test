import React from "react";
import Menu from "./components/Menu/Menu";
import List from "./components/List/List";
import { DataProvider } from "./context/DataContext";
import "./App.css";

const App: React.FC = () => {
  return (
    <DataProvider>
      <div className="app">
        <Menu />
        <List />
      </div>
    </DataProvider>
  );
};

export default App;
