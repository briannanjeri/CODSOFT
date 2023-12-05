export const updateApplicationStatus = async (
  applicationId,
  status,
  applicationDetails,
  setApplicationDetails,
) => {
  console.log("status", status);
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const token = localStorage.getItem("employerToken");
    const response = await fetch(
      ` http://localhost:3001/applications/${applicationId}/status`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      },
    );

    if (response.ok) {
      const newStatus = await response.json();
      console.log("statusData", newStatus);
      setApplicationDetails({ ...applicationDetails, status: newStatus });
      console.log("Application status updated successfully");
    } else {
      const newStatus = await response.json();

      throw new Error("Error updating application status:", newStatus.error);
    }
  } catch (error) {
    console.error(error);
  }
};

