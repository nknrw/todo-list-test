import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface Item {
  name: string;
  age: number;
  subscribed: string;
  employed: boolean;
}

interface DataContextType {
  items: Item[];
  selectedItemId: number | null;
  insertItem: (item: Item) => void;
  deleteItem: () => void;
  selectItem: (index: number) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setItems(JSON.parse(storedData));
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(items));
  // }, [items]);

  const insertItem = (item: Item) => {
    setItems([ ...items, item ]);
    localStorage.setItem("data", JSON.stringify([...items, item]));
  };

  const selectItem = (index: number) => {
    setSelectedItemId(index);
  };

  const deleteItem = () => {
    if (selectedItemId !== null) {
      const newItems = [...items];
      newItems.splice(selectedItemId, 1);
      setItems(newItems);
      setSelectedItemId(null);
      localStorage.setItem("data", JSON.stringify(newItems));
    }
  };

  return (
    <DataContext.Provider
      value={{ items, selectedItemId, insertItem, deleteItem, selectItem }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
