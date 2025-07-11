import React from 'react';

const StatusComp = ({ filterStatus, setFilterStatus }) => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center mt-4">
      <span className="me-3 fw-bold">Filter by Status:</span>

      <div className="d-flex align-items-center gap-3">
        <div className="form-check d-flex align-items-center">
          <input
            className="form-check-input me-1"
            type="radio"
            name="status"
            id="all"
            value="all"
            checked={filterStatus === 'all'}
            onChange={(e) => setFilterStatus(e.target.value)}
          />
          <label className="form-check-label" htmlFor="all">
            All
          </label>
        </div>

        <div className="form-check d-flex align-items-center">
          <input
            className="form-check-input me-1"
            type="radio"
            name="status"
            id="completed"
            value="completed"
            checked={filterStatus === 'completed'}
            onChange={(e) => setFilterStatus(e.target.value)}
          />
          <label className="form-check-label" htmlFor="completed">
            Completed
          </label>
        </div>

        <div className="form-check d-flex align-items-center">
          <input
            className="form-check-input me-1"
            type="radio"
            name="status"
            id="not-completed"
            value="not-completed"
            checked={filterStatus === 'not-completed'}
            onChange={(e) => setFilterStatus(e.target.value)}
          />
          <label className="form-check-label" htmlFor="not-completed">
            Not Completed
          </label>
        </div>
      </div>
    </div>
  );
};

export default StatusComp;
