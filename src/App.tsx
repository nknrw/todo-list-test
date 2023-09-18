import React from "react";
import Menu from "./components/Menu/Menu";
import List from "./components/List/List";
import { DataProvider } from "./context/DataContext";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <DataProvider>
        <div className="app">
          <Menu />
          <List />
        </div>
      </DataProvider>
    </ThemeProvider>
  );
};

export default App;
