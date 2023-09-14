import React from "react";
import Menu from "./components/Menu";
import List from "./components/List";
import { DataProvider } from "./context/DataContext";

const App: React.FC = () => {
  return (
    <DataProvider>
      <div>
        <Menu />
        <List />
      </div>
    </DataProvider>
  );
};

export default App;
