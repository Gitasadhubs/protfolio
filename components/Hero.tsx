import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-5rem)] items-center"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
          Asad Ashraf
        </h1>
        <p className="mt-6 text-2xl leading-8 text-slate-600">
          Creative Frontend Developer passionate about building beautiful and functional web experiences.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#projects"
            className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="text-lg font-semibold leading-6 text-slate-700 transition-colors hover:text-blue-600"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;