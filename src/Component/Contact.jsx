"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#edd0b9] px-4">
      <div className="w-full max-w-3xl bg-[#63483a] text-[#edd0b9] rounded-2xl shadow-lg p-8">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Contact Us
        </h1>

        <p className="text-center text-sm text-[#edd0b9]/80 mb-8">
          Have a question or need help? Send us a message.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#edd0b9] text-[#63483a] outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#edd0b9] text-[#63483a] outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 rounded-lg bg-[#edd0b9] text-[#63483a] outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#edd0b9] text-[#63483a] font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Info */}
        <div className="text-center mt-6 text-sm text-[#edd0b9]/70">
          Email: support@tilegallery.com <br />
          Phone: +880 1234 567 890
        </div>

      </div>
    </div>
  );
}