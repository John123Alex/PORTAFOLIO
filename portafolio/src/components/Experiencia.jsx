import React from 'react';
import company1 from "../assets/peleteria.jpg";
import company2 from "../assets/cauchos.jpg";
import company3 from "../assets/logo-arcoiris.jpeg";
import censaLogo from "../assets/logo-censa.png";
import Reveal from './Reveal';

const jobs = [
  {
    img: company3,
    title: "Mensajero",
    company: "Droguería B. Arcoiris",
    duration: "Agosto 2023 - Actualidad",
    description: "Mensajero en todo el Valle de Aburrá y el oriente Antioqueño.",
  },

  {
    img: company2,
    title: "Jefe de Bodega",
    company: "Cauchos E. Malaca",
    duration: "Enero 2021 - junio 2023",
    description: "Encargado de produccion, surtidor de punto de venta, encargado de hacer los inventarios.",
  },
  {
    img: company1,
    title: "Asesor de Servicio de ventas",
    company: "Peleteria copiel",
    duration: "julio 2020 - diciembre 2020",
    description: "Atención a clientes resolviendo problemas y mejorando la experiencia del cliente.",
  },
  {
    img: censaLogo,
    title: "Estudio de Análisis de Software",
    company: "CENSA",
    duration: "Agosto 2023 - Actualidad",
    description: "Participación en proyectos de análisis, diseño y desarrollo de software, aplicando metodologías ágiles y técnicas de ingeniería de software.",
  },
];

const Empleos = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="empleos">
      <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">
        Experiencia Laboral
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs.map((job, index) => (
          <Reveal key={index}>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:translate-y-[-5px]">
              <div className="w-full h-48 mb-4">
                <img
                  src={job.img}
                  alt={job.company}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-2">{job.title}</h3>
              <p className="text-lg text-teal-400 font-medium">{job.company}</p>
              <p className="text-sm text-gray-300 italic mb-4">{job.duration}</p>
              <p className="text-gray-300 leading-relaxed">{job.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Empleos;
