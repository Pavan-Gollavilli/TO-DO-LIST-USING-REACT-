import React from 'react';

const StatusComp = ({ filterStatus, setFilterStatus }) => {
  return (
    <div className="row align-items-center mt-3">
      <label htmlFor="status" className="new-task col-auto col-form-label">
        Filter by Status:
      </label>
      <div className="col">
        <div className="form-check form-check-inline">
          <input
            type="radio"
            className="form-check-input"
            name="status"
            id="all"
            value="all"
            checked={filterStatus === 'all'}
            onChange={(e) => setFilterStatus(e.target.value)}
          />
          <label htmlFor="all" className="form-check-label">All</label>
        </div>
        <div className="form-check form-check-inline ms-3">
          <input
            type="radio"
            className="form-check-input"
            name="status"
            id="completed"
            value="completed"
            checked={filterStatus === 'completed'}
            onChange={(e) => setFilterStatus(e.target.value)}
          />
          <label htmlFor="completed" className="form-check-label">Completed</label>
        </div>
        <div className="form-check form-check-inline ms-3">
          <input
            type="radio"
            className="form-check-input"
            name="status"
            id="not-completed"
            value="not-completed"
            checked={filterStatus === 'not-completed'}
            onChange={(e) => setFilterStatus(e.target.value)}
          />
          <label htmlFor="not-completed" className="form-check-label">Not Completed</label>
        </div>
      </div>
    </div>
  );
};

export default StatusComp;
