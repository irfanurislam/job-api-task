import React, { useState, useEffect } from 'react';

function JobListPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/jobs.json'); // Assuming the file is in your public directory
        if (response.ok) {
          const data = await response.json();
          setJobs(data);
        } else {
          console.error('Error fetching job listings.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <h2 className="text-2xl mb-4">Job Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-blue-500 hover:underline mt-2">{job.location}</p>
            <a href={`/jobdetailspage?id=${job.id}`} className="text-blue-500 hover:underline mt-2">
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListPage;
