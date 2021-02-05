import * as React from "react";
import { api } from "./api";
import "./styles.css";

interface Item {
  id: string;
  text: string;
}

export const App = () => {
  const [items, setItems] = React.useState<Item[]>([]);
  const [text, setText] = React.useState("");

  const handleChange = (e: any) => setText(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!text.length) {
      return;
    }

    const newItem = {
      text,
      id: Date.now(),
    };

    api.createItem("/items", newItem).then((persistedItem) => {
      setText("");
      setItems(items.concat(persistedItem));
    });
  };

  return (
    <div>
      <h1>TODOS</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">What needs to be done?</label>
        <br />
        <input id="new-todo" value={text} onChange={handleChange} />
        <button>Add #{items.length + 1}</button>
      </form>
    </div>
  );
};
