import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ChecklistDetails = () => {
  const { checklistId } = useParams();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    setItems([...items, { id: Date.now(), name: newItem }]);
    setNewItem("");
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h2>Checklist {checklistId} Details</h2>
      <form onSubmit={handleAddItem} className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="New item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-2 w-100">Add Item</button>
      </form>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name}
            <button onClick={() => handleDeleteItem(item.id)} className="btn btn-danger btn-sm">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChecklistDetails;
