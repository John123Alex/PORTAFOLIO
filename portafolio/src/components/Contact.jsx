import React, { useState } from 'react';
import Reveal from "./Reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    setError('');
    document.getElementById('form').submit();
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-6 "
      id="contact"
    >
      <Reveal>
        <form
          action="https://getform.io/f/bkkkekxb"
          method="POST"
          className="w-full max-w-[500px] bg-gray-800 p-8 rounded-lg shadow-lg"
          id="form"
          onSubmit={handleSubmit}
        >
          <p className="text-gray-100 font-bold text-2xl mb-6 text-center">
          Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.
          </p>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="mb-6">
            <label htmlFor="name" className="text-gray-400 text-sm">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              className="w-full rounded-md border border-cyan-600 py-2 px-3 mt-1 bg-gray-900 text-gray-100"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="text-gray-400 text-sm">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email ."
              className="w-full rounded-md border border-cyan-600 py-2 px-3 mt-1 bg-gray-900 text-gray-100"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="text-gray-400 text-sm">
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Escribe tu mensaje"
              className="w-full rounded-md border border-cyan-600 py-2 px-3 mt-1 bg-gray-900 text-gray-100"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md text-gray-100 font-semibold text-lg bg-cyan-600 hover:bg-cyan-700 transition"
            aria-label="Send message"
          >
            Enviar
          </button>
        </form>
      </Reveal>
    </div>
  );
};

export default Contact;
