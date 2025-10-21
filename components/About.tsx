import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
            <img 
                src="https://picsum.photos/seed/profile/800/800" 
                alt="Portrait of Asad Ashraf" 
                className="aspect-square rounded-2xl object-cover shadow-xl"
            />
        </div>
        <div className="md:col-span-3">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            About Me
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-slate-600">
            Hello! I'm Asad, a frontend developer with a keen eye for design and a drive for crafting seamless user interfaces. With a foundation in modern web technologies like React and TypeScript, I specialize in turning complex problems into elegant, user-friendly solutions.
          </p>
          <p className="mt-4 text-xl leading-relaxed text-slate-600">
            My journey in web development is fueled by a constant curiosity and a desire to learn. I thrive in collaborative environments and am always excited to take on new challenges that push my skills to the next level. When I'm not coding, you can find me exploring new coffee shops or hiking in the mountains.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;