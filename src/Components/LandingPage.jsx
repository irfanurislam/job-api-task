import React, { useState } from 'react';

function LandingPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const languages = [
    'JavaScript',
    'Python',
    'Java',
    'HTML/CSS',
    'Design',
    'Testing'
  ];

  const handleLanguageSelection = () => {
    if (selectedLanguage) {
      window.location.href = `/joblistpage?language=${selectedLanguage}`;
    } else {
      alert('Please select a programming language.');
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Welcome to the Job Portal</h2>
        <p className="text-gray-600">Select a programming language:</p>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded mt-2"
        >
          <option value="">Select a language</option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
        <button
          onClick={handleLanguageSelection}
          className="bg-blue-500 text-white rounded mt-4 px-4 py-2 hover:bg-blue-600"
        >
          Search Jobs
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
