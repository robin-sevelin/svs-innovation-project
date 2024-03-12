import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/pages/converter'>Converter</a>
        </li>
        <li>
          <a href='/pages/rates'>Currency Directory</a>{' '}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
