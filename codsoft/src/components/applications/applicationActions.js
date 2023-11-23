import React, { useState } from 'react';
import { updateApplicationStatus } from '../services/updateStatus';

export const ApplicationActions = ({ applicationId, currentStatus, applicationDetails,setApplicationDetails }) => {
  const [newStatus, setNewStatus] = useState(currentStatus);

  const handleStatusChange = (event) => {
    setNewStatus(event.target.value);
  };

  const handleUpdateStatus = async () => {
    // Call your updateApplicationStatus function here
    await updateApplicationStatus(applicationId, newStatus, applicationDetails,setApplicationDetails);
    // You might want to refresh the application details or update local state after the status is updated
  };
 

  return (
    <div>
      <label htmlFor="status">Application Status:</label>
      <select id="status" value={newStatus} onChange={handleStatusChange}>
        <option value="pending">Pending</option>
        <option value="reviewed">Reviewed</option>
        <option value="shortlisted">Shortlisted</option>
        <option value="rejected">Rejected</option>
      </select>
      <button onClick={handleUpdateStatus}>Update Status</button>
    </div>
  );
};

