import React, { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "6c1f757d-a48d-4694-a6d9-c10caddcc742"); // Ganti dengan key asli

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully!");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult("Something went wrong!");
    }
  };

  return (
    <div id="kontak" className="max-w-lg mt-20 mx-auto bg-zinc-900 p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-sky-400 text-center mb-4">Contact Me</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:ring-2 focus:ring-violet-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:ring-2 focus:ring-violet-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:ring-2 focus:ring-violet-500"
          rows="5"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-sky-500 text-white font-semibold hover:bg-sky-600 transition"
        >
          Kirim Pesan
        </button>
      </form>

      <p className="mt-3 text-center text-sm text-gray-400">{result}</p>
    </div>
  );
}
