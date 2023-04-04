import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-orange-600'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi! It's great to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>My name is Garrett and I'm a rising senior computer science major at Berea College. I'm passionate about developing software that can improve people's lives and I'm committed to making a positive impact through my work.</p>
            ---
            <p>Outside of my studies, I enjoy bowling, reading, and learning to play the banjo. I've also had a number of unique jobs, including showing exotic animals, working as a cook in a Vietnamese restaurant, and teaching a summer visual programming course to K-5 children.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
