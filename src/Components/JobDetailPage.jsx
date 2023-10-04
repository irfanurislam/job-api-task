import React, { useState, useEffect } from 'react';

function JobDetailPage() {
  const [job, setJob] = useState({});

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const jobId = queryParams.get('id');

    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`/jobs.json`); // Assuming the file is in your public directory
        if (response.ok) {
          const data = await response.json();
          const selectedJob = data.find((j) => j.id === parseInt(jobId, 10));
          if (selectedJob) {
            setJob(selectedJob);
          } else {
            console.error('Job not found.');
          }
        } else {
          console.error('Error fetching job details.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchJobDetails();
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <h2 className="text-2xl mb-4">Job Details</h2>
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <p className="text-gray-600">{job.company}</p>
        <p className="text-blue-500 hover:underline mt-2">{job.location}</p>
        <p className="mt-4">{job.description}</p>
        <a href={`/applicationpage?id=${job.id}`} className="text-blue-500 hover:underline mt-4">
          Apply for this job
        </a>
      </div>
    </div>
  );
}

export default JobDetailPage;
