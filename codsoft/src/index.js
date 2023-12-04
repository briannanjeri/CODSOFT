import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./components/employer/job-post/dataContext";
import { JobPostingsProvider } from "./components/employer/job-post/jobPostingContext";
import { EmployerProfileProvider } from "./components/employer/job-post/employerProfileContext";
import { CandidateProfileProvider } from "./components/employer/job-post/candidateProfileContext";
import { EmployerJobProvider } from "./components/employer/job-post/employerJobsContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CandidateProfileProvider>
        <EmployerProfileProvider>
          <EmployerJobProvider>
            <JobPostingsProvider>
              <DataProvider>
                <App />
              </DataProvider>
            </JobPostingsProvider>
          </EmployerJobProvider>
        </EmployerProfileProvider>
      </CandidateProfileProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
