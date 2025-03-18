import React from 'react'
import Digital from '../assets/spicy.png'
import Nike from '../assets/coffeeplus.png'
import Clothify from '../assets/Clothify.png'
import { FaGithub } from 'react-icons/fa'

const Project = () => {
    const projects = [
        {
          title: "SpicyHot Pot",
          description:
            "Delicious Meals Delivered to Your Doorsteps,Discover a world of culinary delights with our food delivery service.",
          techStack: ["React Js","Typescript", "Tailwind CSS"],
          link: "https://spicyhotpot.vercel.app/",
          github: 'https://github.com/MahmoudSoltan/spicyhotpot',
          image: Digital, 
        },
        {
          title: "Coffee-Plus",
          description:
            "Experience Artisanal Coffee at Coffee Plus +  Indulge in our carefully crafted brews, made from ethically sourced beans and brewed to perfection.",
          techStack: ["React Js","Typescript","Tailwind CSS"],
          link: "https://coffeeplus.vercel.app/",
          github: 'https://github.com/MahmoudSoltan/coffeeplus',
          image: Nike, 
        },
        {
          title: "Clothes-Store",
          description:
            "Discover Your Style , Shop the latest trends and find your perfect look",
          techStack: ["React js","Typescript","Node.js",  "Tailwind CSS"],
          link: "https://cloth-store-seven.vercel.app/",
          github: 'https://github.com/MahmoudSoltan/cloth-store',
          image: Clothify,
        },
      ];
  return (
    <section id='project' className='bg-gradient-to-r bg-gray-900 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'> Recent Projects</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {projects.map((project, index) => (
                <div key={index} className='bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
                    <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'/>
                    <div className='p-6'>
                        <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                        <p className='text-gray-300 mb-4'>{project.description}</p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {project.techStack.map((tech, idx) => (
                                <div key={idx} className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                            ))}
                        </div>
                        <div className='flex gap-3'>
                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Project</a>
                            <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors'><FaGithub/> Github</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Project