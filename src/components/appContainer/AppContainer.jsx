import React from 'react';
// Icons
import * as Bi from 'react-icons/bi';

const AppContainer = ({ theme, themeToggler }) => {
  return (
    <div>
      <h2>Hello World!</h2>

      <div onClick={themeToggler}>
        {theme === 'light' ? (
          <Bi.BiMoon style={{ fontSize: '30px' }} />
        ) : (
          <Bi.BiSun style={{ fontSize: '30px' }} />
        )}
      </div>
    </div>
  );
};

export default AppContainer;
