import React from 'react';
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiPython,
  DiDjango,
  DiPhp,
  DiReact,
  DiBootstrap,
} from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';
import Reveal from './Reveal';

const skills = [
  {
    category: 'Frontend (Aprendiendo)',
    technologies: [
      { name: 'HTML', icon: <DiHtml5 className='text-orange-600 mx-2' /> },
      { name: 'CSS', icon: <DiCss3 className='text-blue-800 mx-2' /> },
      { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-400 mx-2' /> },
      { name: 'Tailwind', icon: <RiTailwindCssFill className='text-blue-700 mx-2' /> },
      { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-500 mx-2' /> },
      { name: 'React', icon: <DiReact className='text-blue-800' /> },
    ],
  },
  {
    category: 'Backend (Explorando)',
    technologies: [
      { name: 'Python', icon: <DiPython className='text-yellow-400 mx-2' /> },
      { name: 'Django', icon: <DiDjango className='text-green-600 mx-2' /> },
      { name: 'PHP', icon: <DiPhp className='text-purple-500 mx-2' /> },
    ],
  },
  {
    category: 'Habilidades Transferibles',
    technologies: [
      { name: 'Atención al Cliente', icon: <span className='text-2xl'>📞</span> },
      { name: 'Resolución de Problemas', icon: <span className='text-2xl'>🛠️</span> },
      { name: 'Trabajo en Equipo', icon: <span className='text-2xl'>🤝</span> },
      { name: 'Comunicación Efectiva', icon: <span className='text-2xl'>💬</span> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className='max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12'
      id='skills'
    >
      <Reveal>
        <h2 className='text-3xl font-bold mb-4 text-center'>Herramientas y habilidades</h2>
        <p className='text-center mb-8'>
          Estoy en proceso de aprendizaje en tecnologías de desarrollo y cuento con experiencia previa en atención al cliente.
        </p>

        <div
          className='flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8'
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className='border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg mx-auto w-[220px]'
            >
              <h3 className='text-xl font-bold mb-4 text-center'>{skill.category}</h3>
              <div className='grid grid-cols-1 gap-3'>
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className='flex items-center space-x-2'>
                    <span className='text-2xl'>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
