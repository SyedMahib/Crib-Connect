import Swal from "sweetalert2";

const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Submitted Successfully! We will get back to you shortly",
                showConfirmButton: false,
                timer: 1500,
              });
  };

  return (
    <section className=" py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                name="name"
                id="name"
                type="text"
                required
                className="mt-1 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                id="email"
                type="email"
                required
                className="mt-1 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="mt-1 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary text-white font-semibold px-6 py-2 rounded hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          <div className="text-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-4">
              Have questions, suggestions, or feedback? We'd love to hear from you. Fill out the form
              or reach us through the info below.
            </p>

            <div className="space-y-4 text-sm">
              <p>
                📍 <strong>Address:</strong> Dhaka, Bangladesh
              </p>
              <p>
                ✉️ <strong>Email:</strong>{" "}
                <a href="mailto:support@cribconnect.com" className="text-primary">
                  support@cribconnect.com
                </a>
              </p>
              <p>
                📞 <strong>Phone:</strong> +8801310339171
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
