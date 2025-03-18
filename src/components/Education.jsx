import React from 'react'
const education = [
    {
      degree: "Bachelor of Computer Science and Technology (BSc)",
      institution: "Beijing Jiaotong University , Beijing , China",
      year: "2022 - 2024",
      description: "Graduated with a strong foundation in critical thinking and problem-solving.",
      icon: "🎓",
    },
    {
      degree: "Higher diploma of Software Technology and Engineering",
      institution: "Beijing Information Technology College , Beijing , China",
      year: "2018 - 2022",
      description: "Have Learned Chinese Language , immersed in Chinese culture, and delved into the world of programming..",
      icon: "🎓",
    },
    {
      degree: "Secondary School",
      institution: "Egypt",
      year: "2017",
      description: "Got High School degree by high Average , many scholarships opened up for me.",
      icon: "🎓",
    },
  ];

  const experience = [
    {
      role: "Software Engineer",
      company: "北京明日虫洞科技公司",
      year: "2021-2025",
      description: "Implement performance optimization, API integration, and feature development in a monograph architecture.",
      icon: "💻",
    },
    {
      role: "Founder & Developer",
      company: "Webelite Builders",
      year: "2024 - Present",
      description: "Founded a digital marketing and web development agency, delivering tailored solutions.",
      icon: "💼",
    },
    {
      role: "Frontend React Js Developer",
      company: "SENIOR IT Co.",
      year: "2020 - 2021",
      description: "Designed and developed dynamic, responsive E-Commerce platforms, Key technologies: React Js, Tailwind CSS, Typescript, Next.js.",
      icon: "🧑‍💻",
    },
    {
      role: "MERN Stack Developer (Intern)",
      company: "北京信息职业技术学院",
      year: "1.2019 - 7.2019",
      description: "Developed and optimized MERN stack applications, enhancing user experience.",
      icon: "🧑‍🏫",
    },
  ];

const Education = () => {
  return (
    <section id='education' className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education & Experience</h2>
        <div className='grid md:grid-cols-2 gap-12'>
            {/* Education section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Education</h3>
                {education.map((edu, index) => (
                    <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                            <p className='text-gray-300'>{edu.institution}</p>
                            <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                            <p className='text-gray-300 mt-2'>{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Experience Section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Experience</h3>
                {experience.map((exp, index) => (
                    <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
                            <p className='text-gray-300'>{exp.company}</p>
                            <p className='text-gray-300 text-sm italic'>{exp.year}</p>
                            <p className='text-gray-300 mt-2'>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Education