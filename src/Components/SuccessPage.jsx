import React from 'react';

function SuccessPage() {
  // You can pass the application data as props or fetch it from a state management solution
  const applicationData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    coverLetter: 'I am excited to apply for this job...',
    resume: 'https://example.com/resume.pdf',
  };

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <h2 className="text-2xl mb-4">Application Submitted</h2>
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold">Application Details</h3>
        <p>Name: {applicationData.name}</p>
        <p>Email: {applicationData.email}</p>
        <p>Cover Letter: {applicationData.coverLetter}</p>
        <p>Resume: <a href={applicationData.resume} className="text-blue-500 hover:underline">{applicationData.resume}</a></p>
        {/* You can display more application details here */}
      </div>
    </div>
  );
}

export default SuccessPage;
