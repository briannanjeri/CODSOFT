import React from "react";
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/home";
import { Routes, Route, useLocation } from "react-router-dom";
import { Index } from "./components/authForm";
import EmployerJobPostingForm from "./components/employer/job-post/jobPostingForm";
import Dashboard from "./components/employer/dashboard/Dashboard";
import { Header } from "./components/employer/navbar/header";
import { JobListing } from "./components/job-listing/jobListing";
import { JobApplicationForm } from "./components/applicationForm/jobApplicationForm";
import { CandidateIndex } from "./components/jobSeekerAuthForm";
import { JobDetailsWrapper } from "./components/jobDetailsWrapper/jobDetailsWrapper";
import { PostedJobDetail } from "./components/employer/postedJobDetail/postedJobDetail";
import ViewApplicationsPage from "./components/applications/viewApplicationsPage";
import FullApplicationDetailsPage from "./components/applications/fullApplicationDetailsPage";
import { AccountSettings } from "./components/employer/accountSettings/accountSettings";
import { CandidateAccountSettings } from "./components/employer/accountSettings/candidateAccountSettings";
import { YourApplications } from "./components/candidate/yourApplications";
import { ManageApplications } from "./components/applications/manageApplications";
function App() {
  const location = useLocation();
  const isEmployerRoute = location.pathname.includes("/employer");

  return (
    <div className="App">
      {!isEmployerRoute ? <Navbar /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/employer*" element={<Index />}></Route>
        <Route
          path="/employer/jobPostings"
          element={<EmployerJobPostingForm />}
        ></Route>
        <Route path="/employer/dashboard" element={<Dashboard />}></Route>
        <Route path="/jobListing" element={<JobListing />}></Route>
        <Route
          path="/jobListing/job-details/:_id"
          element={<JobDetailsWrapper />}
        />
        <Route
          path="/employer/job-details/:_id"
          element={<PostedJobDetail />}
        />
        <Route path="/employer/job-listings/" element={<PostedJobDetail />} />
        <Route path="/jobs/:jobId/apply" element={<JobApplicationForm />} />
        <Route path="/jobSeeker" element={<CandidateIndex />}></Route>
        <Route
          path="/employer/jobs/:_id/applications"
          element={<ViewApplicationsPage />}
        />
        <Route
          path="/employer/jobs/all-applications"
          element={<ManageApplications />}
        />
        <Route
          path="/employer/jobs-applications/:applicationId/"
          element={<FullApplicationDetailsPage />}
        />
        <Route
          path="/employer/account-settings"
          element={<AccountSettings />}
        ></Route>
        <Route
          path="/candidate/account-settings"
          element={<CandidateAccountSettings />}
        />
        <Route
          path="/candidate/view-applications"
          element={<YourApplications />}
        />
      </Routes>
    </div>
  );
}

export default App;
