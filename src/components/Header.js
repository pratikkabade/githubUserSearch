import React from "react";

const Header = () => {
  return (
    <div>
      <nav id='customNav' class='navbar navbar-expand-sm bg-light fixed-top'>
        <div class='container-fluid'>
          <ul class='navbar-nav justify-content-start'>
            <li class='nav-item'>
              <a href='https://github.com/pratikkabade'>
                <img
                  alt='a'
                  id='hrtLogo'
                  src='https://avatars.githubusercontent.com/u/76637730?v=4'
                  draggable='false'
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
