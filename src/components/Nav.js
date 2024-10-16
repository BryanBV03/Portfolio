import React from 'react';
// import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
// link
import { Link } from 'react-scroll';


const Nav = () => {
  return (
  <nav className='fixed bottom-2 lg:bottom-8'>
    <div className="container mx-auto">
      {/* nav inner */}
      <div>
        <Link>
          < BiHomeAlt />
        </Link>
      </div>
    </div>
  </nav>);



};

export default Nav;
