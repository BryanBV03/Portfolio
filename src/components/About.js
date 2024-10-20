import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';


const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section ' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
             mix-blend-lighten bg-top'></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 '>

            <h2 className='h2 text-accent font-secondary'>About me.</h2>
            <h3 className='h3 mb-4 font-secondary'>I'm a Full Stack Developer.</h3>
            <p className='mb-6 font-secondary'>I am a passionate web developer, with experience in technologies such as React, Python, and SQL. I have worked on several projects, obtaining a Full Stack certification and honing my skills in web application development. Furthermore, I am always looking for new challenges and opportunities to keep growing professionally in dynamic environments. In addition, I stand out for my ability to collaborate efficiently in teams and provide solutions that optimize processes, with the aim of generating a positive impact on each project in which I participate....</p>
            {/* stats */}
            {/* <div className='flex gap-x-6 lg:gap-x-10 mb-12 '>
              <div>
                <div className='text-[40px] font-secondary text-gradient mb-2 '>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className='font-secondary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-secondary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>
                <div className='font-secondary text-sm tracking-[2px]'>
                  Proyects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-secondary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                  k+
                </div>
                <div className='font-secondary text-sm tracking-[2px]'>
                  Satified <br />
                  Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center '>
              <button className='btn btn-lg font-secondary'>Contact me</button>
              <a href='#' className='text-gradient  btn-link font-secondary'>
                My Portfolio
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section >
  );
};


export default About;
