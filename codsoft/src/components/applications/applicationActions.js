import React, { useState } from "react";
import { updateApplicationStatus } from "../services/updateStatus";
import "./style.css";
export const ApplicationActions = ({
  applicationId,
  currentStatus,
  applicationDetails,
  setApplicationDetails,
}) => {
  const [newStatus, setNewStatus] = useState(currentStatus);

  const handleStatusChange = (event) => {
    setNewStatus(event.target.value);
  };

  const handleUpdateStatus = async () => {
    await updateApplicationStatus(
      applicationId,
      newStatus,
      applicationDetails,
      setApplicationDetails,
    );
  };

  return (
    <div>
      <label htmlFor="status">Application Status:</label>
      <select id="status" value={newStatus} onChange={handleStatusChange}>
        <option value="">select Action</option>
        <option value="reviewed">Reviewed</option>
        <option value="shortlisted">Shortlisted</option>
        <option value="rejected">Rejected</option>
      </select>
      <button className="action-button" onClick={handleUpdateStatus}>
        Update Status
      </button>
    </div>
  );
};
