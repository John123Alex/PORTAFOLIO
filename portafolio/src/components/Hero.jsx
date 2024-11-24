import React from 'react';
import profilepic from '../assets/foto-perfil.jpeg';
import { TypeAnimation } from 'react-type-animation';
import ShinyEffect from './ShinyEffect';
import {
  AiOutlineGithub,
  AiOutlineFacebook,
} from 'react-icons/ai';
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiPython,
  DiDjango,
  DiPhp,  
  DiReact,
} from 'react-icons/di';
import { motion } from 'framer-motion';
import { FaWhatsappSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='mt-24 max-w-[1200px] mx-auto relative px-4 bg-gradient-to-r'>
      <div className='grid md:grid-cols-2 place-items-center gap-8'>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='text-center md:text-left'
        >
          <TypeAnimation
            sequence={[
              'Fullstack Developer',
              1000,
              'Frontend Developer',
              1000,
              'TI of Software',
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className='font-semibold text-gray-300 text-xl md:text-4xl mb-4'
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-gray-200 text-4xl md:text-5xl mb-4 font-extrabold'
          >
            HEY, I AM <br />
            <span className='text-cyan-400'>ALEXANDER MORA</span>

          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className='text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6 mx-auto md:mx-0'
          >
           Aspirante a desarrollador con experiencia en servicio al cliente, ansioso por crear soluciones y aprender nuevas tecnologías".
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className='flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-6'
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgba(0,0,0,0.3)' }}
              className='z-10 cursor-pointer font-semibold text-gray-200 px-6 py-3 bg-cyan-600 hover:bg-cyan-400 rounded-xl shadow-md transition duration-300'

            >
            
              <a
                href='https://docs.google.com/document/d/1Vwip9YHubVN1ahBYbWrio98e8Z9oafzw/edit?usp=sharing&ouid=113364191326988664493&rtpof=true&sd=true'
                target='_blank'
                rel='noopener noreferrer'
                download
              >
                Descargar CV
              </a>
            </motion.button>

            <div className='z-10 cursor-pointer flex gap-6 text-4xl md:text-5xl text-cyan-400'>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href='https://github.com/John123Alex'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href='https://www.facebook.com/jhonalex.mora.90663?mibextid=ZbWKwL'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineFacebook />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href='https://wa.me/573007065458'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaWhatsappSquare />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilepic}
          className="w-[300px] md:w-[450px] rounded-full shadow-2xl mx-auto border-4 border-transparent bg-gradient-to-r from-cyan-500 via-cyan-500 to-yellow-500 p-1"
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          alt="Profile Picture"
         />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className='flex justify-center items-center py-16 px-4 md:px-0'
      >
        <p className='text-gray-200 mr-6 text-xl'>Mis herramientas de desarrollo:</p>
        <div className='flex gap-4 text-4xl md:text-5xl'>
          <DiHtml5 className='text-orange-600' />
          <DiCss3 className='text-cyan-200' />
          <DiJavascript1 className='text-yellow-400' />
          <DiPython className='text-blue-700' />
          <DiDjango className='text-green-200' />
          <DiPhp className='text-purple-500' />
          <DiReact className='text-blue-600' />
        </div>
      </motion.div>

      <div className='absolute inset-0 hidden md:block'>
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
