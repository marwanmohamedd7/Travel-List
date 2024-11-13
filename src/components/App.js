import { useState } from "react";
import "../App.css";
import Logo from "./Logoo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charge", quantity: 1, packed: false },
  { id: 4, description: "Precelets", quantity: 3, packed: false },
];

function App() {
  // const [items, setItems] = useState([]);
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function onToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      `Are you sure you want to delete all items?`
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form items={items} onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDelete}
        onToggleItem={onToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
