import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FaqSection.css"; // Import the CSS file

const FaqSection = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // FAQ data with questions and answers
  const faqs = [
    {
      question: "Why Choose Us?",
      answer:
        "We offer top-quality services with a focus on customer satisfaction, cutting-edge technology, and competitive pricing.",
    },
    {
      question: "Is there any membership program available?",
      answer:
        "Yes, we offer a membership program with exclusive benefits such as discounts, priority support, and early access to promotions.",
    },
    {
      question: "How to book an appointment?",
      answer:
        "You can book an appointment through our website or by calling our support team. Simply choose a convenient time, and we'll confirm it promptly.",
    },
    {
      question: "Can you provide digital services?",
      answer:
        "Absolutely! We specialize in a variety of digital services, including website development, digital marketing, and software solutions.",
    },
    {
      question: "What are the promotions going on?",
      answer:
        "Check our promotions page for ongoing deals. Currently, we're offering a 20% discount on all new memberships!",
    },
  ];

  // State to manage open/closed FAQ items
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle open/close state for FAQ items
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title" data-aos="fade-up">
        Frequently Asked Questions
      </h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question-wrapper">
              <span className="faq-question">{faq.question}</span>
              <span
                className={`faq-arrow ${openIndex === index ? "open" : ""}`}
              >
                &#8250;
              </span>
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
