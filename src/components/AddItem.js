import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AddItem = () => {
  const [name, setName] = useState('');
  const { checklistId } = useParams();
  const navigate = useNavigate();

  const handleAddItem = async (e) => {
    e.preventDefault(); 
    try {
      await axios.post(`http://localhost:5000/api/checklists/${checklistId}/items`, 
        { name }, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });

      navigate(`/checklist/${checklistId}`);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="mt-5">Add a New Item</h2>
      <form onSubmit={handleAddItem} className="mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success mt-2">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
