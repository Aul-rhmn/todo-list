import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <h2 className="mb-4">Your Checklists</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Checklist 1</h5>
              <p className="card-text">Details of your first checklist.</p>
              <Link to="/checklist/1" className="btn btn-success w-100">
                Go to Checklist
              </Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Checklist 2</h5>
              <p className="card-text">Details of your second checklist.</p>
              <Link to="/checklist/2" className="btn btn-success w-100">
                Go to Checklist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
