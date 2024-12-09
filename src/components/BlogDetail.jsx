import { useEffect } from "react"; // Removed React as it's not explicitly used
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BlogDetail.css";

const blogs = [
  {
    id: 1,
    title: "The Future of Software Development",
    date: "November 15, 2024",
    author: "John Doe",
    content:
      "The future of software development is transforming rapidly with AI technologies...",
    image: "https://via.placeholder.com/800x400",
  },
  {
    id: 2,
    title: "Why Cybersecurity is Crucial in Modern Software",
    date: "November 20, 2024",
    author: "Jane Smith",
    content:
      "In today&apos;s world, cybersecurity is no longer optional. It is essential...",
    image: "https://via.placeholder.com/800x400",
  },
  {
    id: 3,
    title: "Maximizing Efficiency with Agile Development",
    date: "November 25, 2024",
    author: "Sarah Lee",
    content:
      "Agile practices emphasize flexibility and iterative progress, enabling teams...",
    image: "https://via.placeholder.com/800x400",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="blog-detail">
      <Link to="/" className="back-link">
        ← Back to Blogs
      </Link>
      <header data-aos="fade-up">
        <h1>{blog.title}</h1>
        <p>
          By <span>{blog.author}</span> on <span>{blog.date}</span>
        </p>
      </header>
      <img
        src={blog.image}
        alt={blog.title}
        className="blog-detail-image"
        data-aos="fade-up"
        data-aos-delay="200"
      />
      <article data-aos="fade-up" data-aos-delay="400">
        <p>{blog.content}</p>
      </article>
    </div>
  );
};

export default BlogDetail;
