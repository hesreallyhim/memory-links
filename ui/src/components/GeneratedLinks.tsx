import React from 'react';

interface GeneratedLinksProps {
  links: string[];
}

const GeneratedLinks: React.FC<GeneratedLinksProps> = ({ links }) => {
  return (
    <div className="mt-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Generated Links</h2>
      {links.length > 0 ? (
        <ul className="list-disc pl-5">
          {links.map((link, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-300">{link}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">No links generated yet.</p>
      )}
    </div>
  );
};

export default GeneratedLinks;
