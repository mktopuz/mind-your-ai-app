import React from 'react';

const SocialLink: React.FC<{ href: string, children: React.ReactNode, label: string }> = ({ href, children, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-neutral-medium hover:text-primary-light transition-colors duration-300">
    {children}
  </a>
);

const TwitterIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const LinkedInIcon = () => (
 <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
  </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-darker py-16 border-t border-neutral-dark">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <a href="#home" onClick={(e) => { e.preventDefault(); document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-block">
             <img
                src="/assets/logo.png"
                alt="Mind Your AI Logo"
                className="h-16 w-auto mx-auto" // Adjust height as needed
              />
          </a>
        </div>
        <div className="flex justify-center space-x-8 mb-10">
          <SocialLink href="https://twitter.com/example" label="Mind Your AI on Twitter"><TwitterIcon /></SocialLink>
          <SocialLink href="https://linkedin.com/company/example" label="Mind Your AI on LinkedIn"><LinkedInIcon /></SocialLink>
          {/* Add more social icons here */}
        </div>
        <p className="text-neutral-DEFAULT text-base">
          &copy; {new Date().getFullYear()} Mind Your AI. All rights reserved.
        </p>
        <p className="text-neutral-medium text-sm mt-3">
          Empowering Your Future with Intelligent Solutions.
        </p>
        <p className="text-neutral-medium/70 text-xs mt-6">
          Website crafted with <span className="text-primary-light transition-colors hover:text-primary-DEFAULT">&hearts;</span> and AI ingenuity.
        </p>
      </div>
    </footer>
  );
};

export default Footer;