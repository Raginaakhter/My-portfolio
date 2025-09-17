import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-blue-900 flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl font-semibold mb-6 text-white">My Resume</h1>

      

      {/* Download Button */}
      <a
        href="\Resume Raginal[1].pdf"
        download="\Resume Raginal[1].pdf"
        className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-fuchsia-500 transition shadow-md text-white font-medium"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
