import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { about, mainBody, repos, skills } from '../editable-stuff/config.js';
import useResizeObserver from '../hooks/useResizeObserver';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { NavLink } from './home/migration';

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${
        !isTop ? 'navbar-white' : 'navbar-transparent'
      }`}
      expand='lg'
    >
      <Navbar.Brand className='navbar-brand' href={'/#home'}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' className='toggler' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='navbar-nav mr-auto'>
          {/* {
            <NavLink className="nav-item lead">
              <Link to={"/blog"}>Blog</Link>
            </NavLink>
          } */}
          {repos.show && <NavLink href={'/#projects'}>Projects</NavLink>}
          <NavLink
            className='nav-item lead'
            href={about.resume}
            target='_blank'
            rel='noreferrer noopener'
          >
            Resume
          </NavLink>
          {about.show && (
            <NavLink className='nav-item lead' href={'/#aboutme'}>
              About
            </NavLink>
          )}
          {skills.show && (
            <NavLink className='nav-item lead' href={'/#skills'}>
              Skills
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
