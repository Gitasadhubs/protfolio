import React from 'react';
import { GITHUB_ICON, LINKEDIN_ICON } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Get In Touch
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-xl leading-8 text-slate-300">
          I'm currently open to new opportunities. If you have a project in mind or just want to say hello, feel free to reach out.
        </p>
        <div className="mt-10">
          <a
            href="mailto:hello@asadashraf.com"
            className="inline-block rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Say Hello
          </a>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <a href="#" className="text-slate-400 transition-colors hover:text-white">
            {GITHUB_ICON}
          </a>
          <a href="#" className="text-slate-400 transition-colors hover:text-white">
            {LINKEDIN_ICON}
          </a>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8">
          <p className="text-slate-400">&copy; {new Date().getFullYear()} Asad Ashraf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;