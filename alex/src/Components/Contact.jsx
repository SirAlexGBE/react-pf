import React from "react";

export default function Contact({email, phone, location}) {
  return (
    <>
      <section id="contact" className="py-16 px-6 bg-white text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Me</h2>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-medium text-gray-700">Email:</span> {email}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-medium text-gray-700">Phone:</span> {phone}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-medium text-gray-700">Location:</span> {location}
            </p>
          </div>
          <div>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2 " htmlFor="email">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
