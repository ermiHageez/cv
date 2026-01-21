import React from 'react'
import { portfolioConfig } from '@/app/config/portfolio';
export default function SkillsSection() {
  const { skills } = portfolioConfig;
  return (
    <div id="skills" className='flex flex-col gap-2.5 mb-10'>
      {/* Title */}
      <div className='flex flex-col items-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>Skills & Technologies</h2>
          <div className='px-2 border-2 border-blue-500 rounded w-40 self-center mb-3.5 '></div>
      </div>
      {/* paragraph */}
      <div>
        <p className='text-lg text-muted-foreground leading-relaxed mb-6 mx-4'>
          A collection of technologies and tools I work with to build modern applications
        </p>
      </div>
      {/* Skills Grid */}
      <div>
        {/* Skills Cards */}
        <div>
          <div className='mx-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center'>
            {skills.map((SkillsSection)=>(
              <div key={SkillsSection.category} className='flex flex-col items-start justify-center 
            border border-blue-500 rounded-xl 
            px-8 py-6 
            bg-white/10 
            shadow-md hover:shadow-xl hover:shadow-blue-500/50 
            transition duration-300 ease-in-out transform hover:-translate-y-1'>
                <div className='flex items-center rounded-2xl gap-2'>
                  <div className='border-2 border-blue-500 w-4 h-4 rounded-2xl mt-4 mb-2 bg-blue-500'></div>
                  <h3 className='text-2xl font-semibold mb-2 mt-4 text-left'>{SkillsSection.category}</h3>
                </div>
                <ul className='flex flex-wrap gap-3 mb-6'>
                  {SkillsSection.items.map((skill, index) => (
                    <li key={index} className='bg-white/10 px-4 py-2 rounded-lg border border-cyan-100 hover:scale-105 duration-300 hover:bg-blue-500 '>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
