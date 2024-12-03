import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checklist = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleCreateChecklist = (e) => {
    e.preventDefault();
    alert("Checklist Created!");
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h2>Create a New Checklist</h2>
      <form onSubmit={handleCreateChecklist}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Checklist Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Checklist</button>
      </form>
    </div>
  );
};

export default Checklist;
