import React from "react";
import Head from "next/head";

const Blogs = () => {
  const blogPosts = [
    {
      title: "How to Organize a Successful Event",
      date: "March 29, 2025",
      excerpt: "Learn key strategies to plan and execute a successful event, from budgeting to volunteer management.Organizing a successful event requires careful planning, attention to detail, and effective execution. Here’s a step-by-step guide to ensure your event runs smoothly:",
    },
    {
      title: "The Future of Online Fundraising",
      date: "March 25, 2025",
      excerpt: "Explore the latest trends and innovations in digital fundraising for events and charities.Online fundraising is rapidly evolving with advancements in technology, changing donor behaviors, and increasing digital accessibility. The future of fundraising will be driven by innovative platforms, automation, and personalized donor experiences. Here’s what to expect:",
    },
    {
      title: "Why Volunteer Management is Crucial for Events",
      date: "March 20, 2025",
      excerpt: "Discover how effective volunteer coordination can make or break an event’s success.Volunteer management plays a critical role in ensuring the success of any event. Volunteers are often the backbone of event operations, contributing their time, skills, and energy to support various functions. Proper management ensures efficiency, engagement, and a positive experience for both volunteers and attendees. Here’s why volunteer management is crucial for events:",
    },
  ];

  return (
    <>
      <Head>
        <title>Blogs - Eventify</title>
      </Head>
      <div className="bg-gradient-to-r from-sky-200 to-sky-600 min-h-screen py-12 px-6 md:px-16 lg:px-32 flex items-center justify-center">
        <div className="max-w-5xl bg-white p-10 shadow-2xl rounded-3xl text-center">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-6 uppercase tracking-wide">
            Our Blogs
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Stay updated with the latest insights on event management, fundraising, and volunteer coordination.
          </p>
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-gray-100 p-6 shadow-md rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition duration-300">
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
