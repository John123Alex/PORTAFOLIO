import React from 'react';
import { FaGithubSquare, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r'>
      <div className='max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-16 text-xs md:text-sm'>

        <motion.div
          className='space-y-4 text-center md:text-left text-white'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          
          <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500'>
            Alexander Mora.
          </h3>
          <p className='text-gray-200'>
            Frontend Developer | LT Software
          </p>
          <div className='flex justify-center md:justify-start gap-6 text-3xl md:text-4xl text-white'>
            <motion.a
              href='https://github.com/John123Alex'
              target='_blank'
              rel='noopener noreferrer'
              className='transform hover:scale-110 transition duration-300 text-gray-300 hover:text-white'
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithubSquare />
            </motion.a>
            <motion.a
              href='https://www.facebook.com/jhonalex.mora.90663?mibextid=ZbWKwL'
              target='_blank'
              rel='noopener noreferrer'
              className='transform hover:scale-110 transition duration-300 text-gray-300 hover:text-white'
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook />
            </motion.a>
          </div>
        </motion.div>

        <motion.p
          className='text-gray-200 mt-4 md:mt-0 text-sm'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          &copy; 2024 Alexander Mora. All rights reserved.
        </motion.p>
      </div>

      <motion.div
        className='w-full h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mt-8'
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.6 }}
      />
    </div>
  );
};

export default Footer;
