// pages/blog.jsx or app/blog/page.jsx

import React from "react";

const blogPosts = [
  {
    title: "5 Hiring Trends You Can't Ignore in 2025",
    description:
      "Discover the most impactful hiring trends shaping the future of talent acquisition — from AI to remote interviews.",
    image:
      `/hiring-trends.jpg`,
    date: "July 10, 2025",
    author: "Sleek Timmy",
  },
  {
    title: "Building Inclusive Hiring Pipelines",
    description:
      "Learn practical strategies to make your recruitment process more inclusive and attract diverse top talent.",
    image:
      "/building.jpg",
    date: "July 1, 2025",
    author: "Admin",
  },
  {
    title: "Why Employer Branding Matters More Than Ever",
    description:
      "Your company image can make or break your talent acquisition efforts. Here's how to stand out.",
    image:
      "employer.jpg",
    date: "June 25, 2025",
    author: "Sleek Timmy",
  },
];

const Blog = () => {
  return (
    <div className="bg-white text-red-800 min-h-screen px-4 md:px-20 py-12">
    
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-black">
          SleekCruit Blog
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Insights, trends, and tips for modern recruitment. Stay ahead in the talent game with our handpicked articles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white border border-red-100"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-red-500 font-medium mb-1">
                {post.date}
              </p>
              <h3 className="text-xl font-semibold mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                {post.description}
              </p>
              <p className="text-xs text-gray-500 italic">
                by {post.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
