import React from "react";
import { Link } from "react-router";

const Support = () => {
  const faqs = [
    {
      question: "How do I post a new listing?",
      answer:
        "Go to your Dashboard → Add Listing, fill out the form, and submit. Your listing will go live after review.",
    },
    {
      question: "How do I edit or delete my listing?",
      answer:
        "Go to Dashboard → My Listings, where you can update or delete any of your posts.",
    },
    {
      question: "Is CribConnect free to use?",
      answer: "Yes! Posting and browsing listings on CribConnect is 100% free.",
    },
    {
      question: "How do I report inappropriate content?",
      answer:
        "Click the 'Report' button on any listing or message us directly via the contact form.",
    },
  ];

  return (
    <section className="py-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Support & Help Center
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-secondary mb-6">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h4 className="font-bold text-lg mb-2 text-primary">
                  {faq.question}
                </h4>
                <p className="text-gray-700 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mt-12">
          <h3 className="text-xl font-bold text-primary mb-2">
            Still need help?
          </h3>
          <p className="text-gray-700 mb-4">
            If your question isn’t answered above, feel free to reach out
            directly.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white font-semibold px-6 py-2 rounded hover:bg-opacity-90 transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Support;
