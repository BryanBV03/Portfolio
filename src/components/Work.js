import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section min-h-screen py-20' id='work'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10'>
          {/* Left Column */}
          < motion.div 
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-col justify-between'>
            {/* text */}
            <div className='mb-10'>
              <h2 className='h2 leading-tight text-accent font-secondary'>
                My Latest <br />
                Work.
              </h2>
              <p className='max-w-sm mb-8'>
                lorem ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
              </p>
              <button className='btn btn-sm font-secondary'>View all projects</button>
            </div>
            {/* First image */}
            <div className='group relative aspect-[4/3] overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='w-full h-full object-cover group-hover:scale-125 transition-all duration-500'
                src={Img1}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-col justify-center gap-y-10'>
            {/* Second image */}
            <div className='group relative aspect-[4/3] overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='w-full h-full object-cover group-hover:scale-125 transition-all duration-500'
                src={Img2}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
            {/* Third image */}
            <div className='group relative aspect-[4/3] overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='w-full h-full object-cover group-hover:scale-125 transition-all duration-500'
                src={Img3}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;