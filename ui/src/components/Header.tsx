import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="w-full text-center py-4 transition-colors duration-300 bg-lightHeader dark:bg-darkHeader text-lightBg">
      <div className="flex justify-center items-center">
        <FontAwesomeIcon icon={faLink} />
        <h1 className="mx-2">Memory-Links</h1>
        <FontAwesomeIcon icon={faLink} flip="horizontal" />
      </div>
    </header>
  );
};

export default Header;
