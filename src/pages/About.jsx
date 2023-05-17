import React from 'react';

const About = () => {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className="text-lg text-gray-400">Version <span className="text-white">1.0.0</span></p>
      <p className="text-lg text-gray-400">Layout By: <span className="text-white">Hassib Moddasser</span></p>
      <p className="text-lg text-gray-400">Udemy course By: <span className="text-white">Brad Traversy</span></p>
      <p className="text-lg text-gray-400">Development By: <a className="text-white link" href="https://www.linkedin.com/in/iq-meyada/">Meyada Saisan</a></p>
    </>
  );
}

export default About;
