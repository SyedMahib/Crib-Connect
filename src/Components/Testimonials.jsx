import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);

  const testimonialData = () => {
    fetch("https://a-10-server-side-phi.vercel.app/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    testimonialData();
  }, []);

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        >
          <FaStar></FaStar>
        </span>
      );
    }
    return <div className="flex justify-center mb-4">{stars}</div>;
  };

  return (
    <section className="mb-[100px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md p-8 text-center flex flex-col items-center flex-grow"
            >
              {testimonial.avatar && (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 ring-2 ring-primary"
                />
              )}

              {renderStars(testimonial.rating)}

              <p className="text-primary italic mb-6 text-lg">
                "{testimonial.quote}"
              </p>

              <p className="font-semibold text-primary text-lg mt-auto">
                {testimonial.name}
              </p>
              <p className="text-gray-500 font-medium text-sm">
                {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
