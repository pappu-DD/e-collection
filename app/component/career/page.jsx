import React from "react";
import Head from "next/head";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      description: "We are looking for a skilled Frontend Developer to create stunning user interfaces using React and Tailwind CSS.",
    },
    {
      title: "Backend Developer",
      location: "Remote",
      type: "Full-time",
      description: "Seeking a Backend Developer with experience in Node.js, Express, and MySQL to build scalable event management systems.",
    },
    {
      title: "Marketing Manager",
      location: "Hybrid - New Delhi, India",
      type: "Part-time",
      description: "Looking for a creative Marketing Manager to drive growth and engagement for Eventify’s platform.",
    },
  ];

  return (
    <>
      <Head>
        <title>Careers - Eventify</title>
      </Head>
      <div className="bg-gradient-to-r from-blue-200 to-blue-600 min-h-screen py-12 px-6 md:px-16 lg:px-32 flex items-center justify-center">
        <div className="max-w-5xl bg-white p-10 shadow-2xl rounded-3xl text-center">
          <h1 className="text-5xl font-extrabold text-green-700 mb-6 uppercase tracking-wide">
            Join Our Team
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Be a part of Eventify and help us revolutionize event management. Explore our job openings below.
          </p>
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-gray-100 p-6 shadow-md rounded-xl border-l-4 border-green-500 hover:shadow-lg transition duration-300">
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">{job.title}</h2>
                <p className="text-sm text-gray-500 mb-1">{job.location} | {job.type}</p>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;

