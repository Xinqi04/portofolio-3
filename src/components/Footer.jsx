import React from "react";

export default function Footer() {
  return (
    <footer className=" text-gray-400 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-gray-400 mb-3 md:text-start text-center">Portofolio</h2>
          {/* <p className="text-sm leading-relaxed">
            Sharing my projects, experience, and passion in technology.
          </p> */}
        </div>

        {/* Links */}
        {/* <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-400 mb-3">Quick Links</h3>
          <ul className="flex space-y-2 text-sm gap-2">
            <li><a href="#about" className="hover:text-violet-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-violet-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-violet-400 transition">Contact</a></li>
          </ul>
        </div> */}

        {/* Socials */}
        <div className="inte">
          {/* <h3 className="text-lg font-semibold text-gray-400 mb-3">Connect</h3> */}
          <div className="flex md:justify-end justify-center gap-4">
            <a href="https://github.com/Xinqi04" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">
              <i className="ri-github-fill text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/riza-anwar-fadil-ab674b278" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">
              <i className="ri-linkedin-box-fill text-2xl"></i>
            </a>
            <a href="mailto:rizaafadil@gmail.com" className="hover:text-sky-400 transition">
              <i className="ri-mail-fill text-2xl"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-500 mt-5 border-t border-zinc-700 pt-5">
        © {new Date().getFullYear()} Riza Anwar Fadil. All rights reserved.
      </div>
    </footer>
  );
}
