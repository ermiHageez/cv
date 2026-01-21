import React from 'react'
import { portfolioConfig } from '@/app/config/portfolio';
import { MapPin, Briefcase, GraduationCap } from "lucide-react";
function AboutSection() {
 const { personal } = portfolioConfig;
  return (
    <div id="about" className='mt-20 mb-10 px-4'>
    <div className='flex flex-col'>
      <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>About Me</h2>
      <div className='px-2 border-2 border-blue-500 rounded w-40 self-center mb-3.5'></div>
      <div className='grid md:grid-cols-2 gap-2 m-6 mt-10'>
        <div className='text-left text-gray-200 px-2 max-w-250'>
          <p className='text-lg text-muted-foreground leading-relaxed mb-6'>{personal.bio}</p>
          <p className='text-lg text-muted-foreground leading-relaxed mb-6'>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and pushing the boundaries of what's possible with code.</p>
        </div>
        <div className='text-gray-300 ml-6 mt-1 flex flex-col gap-2'>
          <ul className='flex flex-col gap-10 text-left'>
            <div className='flex items-center min-w-60 gap-4 bg-white/10 px-6 py-4 rounded-xl border-2 border-cyan-100 hover:scale-105 duration-300 '>
              <MapPin className="inline mr-2" />
              <li className='flex flex-col items-center'> 
                <p className='self-start'>Location</p>
                <p>{personal.location}</p> 
              </li>
            </div>
            <div className='flex items-center min-w-60 gap-4 bg-white/10 px-6 py-4 rounded-xl border-2 border-cyan-100 hover:scale-105 duration-300 '>
              <Briefcase className="inline mr-2" />
              <li>
                <p>Role</p>
                <p>{personal.title}</p>
              </li>
            </div>
            <div className='flex items-center min-w-60 gap-4 bg-white/10 px-4 py-4 rounded-xl border-2 border-cyan-100 hover:scale-105 duration-300 '>
              <GraduationCap className="inline mr-2" />
              <li>
                <p>Education</p>
                <p>Bachelor's in Computer Science</p>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutSection