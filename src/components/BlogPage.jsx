import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import blogsData from "./data/blogs.json";

import blogImage1 from "../assets/blog1.jpg";
import blogImage2 from "../assets/blog2.jpg";
import blogImage3 from "../assets/blog4.jpg";

const BlogPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const updatedBlogsData = blogsData.map((blog, index) => {
    let blogImage;
    switch (index) {
      case 0:
        blogImage = blogImage1;
        break;
      case 1:
        blogImage = blogImage2;
        break;
      case 2:
        blogImage = blogImage3;
        break;
      default:
        blogImage = blogImage1;
        break;
    }
    return { ...blog, image: blogImage };
  });

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-3 sm:px-5">
      {/* Header Section with Top Padding */}
      <div className="text-center max-w-2xl mx-auto mb-8 bt-12 sm:bt-16">
        <h2
          className="text-xl sm:text-2xl font-bold text-blue-700 mb-2 uppercase"
          data-aos="fade-up"
        >
          Read Latest Blog
        </h2>
        <p
          className="text-gray-700 text-sm sm:text-base"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Stay updated with latest trends in software & technology.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {updatedBlogsData.map((blog, index) => (
          <div
            key={blog.id}
            className="bg-white rounded-md shadow-sm hover:shadow-md transition duration-300 overflow-hidden flex flex-col"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-base font-semibold text-blue-600 mb-1 capitalize">
                {blog.title}
              </h3>
              <p className="text-xs text-gray-500 mb-2">
                By <span className="font-semibold">{blog.author}</span> on{" "}
                <span className="font-semibold">{blog.date}</span>
              </p>
              <p className="text-sm text-gray-600 mb-3 flex-grow line-clamp-3">
                {blog.summary}
              </p>

              {/* Read More Button */}
              <Link
                to={`/blog/${blog.id}`}
                className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded-full shadow hover:from-blue-700 hover:to-blue-800 transition-all duration-300 ease-in-out group"
              >
                Read More
                <svg
                  className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
