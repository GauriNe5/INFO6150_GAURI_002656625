import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';
import Slide from 'react-reveal/Slide';
import { useHistory } from "react-router-dom";

const Navbar = (props) => {
  let history = useHistory();
  const {scrollsToWork, scrollsToAbout} = props;
    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY) { 
          setShow(false); 
        } else { 
          setShow(true);  
        }
        setLastScrollY(window.scrollY); 
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }, [lastScrollY]);

    const goToLink = (link) => {
      const currentUrl = window.location.href;
      const lastItem = currentUrl.substring(currentUrl.lastIndexOf('/'))
      if(link === lastItem)
      {
        window.scrollTo(0, 0);
      } else {
        history.push(link);
      }
    }

    const navItems = [
      {title: "Home|", onClick: () => goToLink("/")},
      {title: "Project|", onClick: () => scrollsToWork()},
      {title: "Skills|", onClick: () => scrollsToAbout()},
      {title: "Experience|", onClick: () => scrollsToAbout()}
    ]

  return (
        <NavWrapper show={show}>
           <Slide top>
            <Navigation>
            {
              navItems.map((item) => {
                return <NavItem key={item.title} onClick={item.onClick}>{item.title}</NavItem>
              })
            }
            </Navigation>
          </Slide>
        </NavWrapper>
  );
};

export default Navbar;


const NavWrapper = styled.nav`
  font-family: 'Akshar', sans-serif;
  text-transform: uppercase;
  max-width: 180rem;
  width: 100%;
  background: var(--main-light);
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem 15rem;
  z-index: 9999;
  color: var(--mainText);
  ${(props) =>
    (props.show &&
      css`
        top: 0px;
        transition: 0.3s linear;
    `)}

    ${(props) =>
    (!props.show &&
      css`
        top: -80px;
        transition: 0.3s linear;
    `)}
    @media screen and (max-width: 1100px) {
      padding: 1rem 2rem;
      width: 100%;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
    font-size: 2.5rem;
`;

const Navigation = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 25rem;
`;
const NavItem = styled.a`
position: relative;
  cursor: pointer;
   font-size: 2.5rem;
   background-image: linear-gradient(
    to right,
    var(--mainAccent),
   var(--mainAccent) 50%,
    #000 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: var( --mainTransition);

  :before {
  content: '';
  background:var(--mainAccent);
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
}

:hover {
 background-position: 0;
}

:hover::before {
  transition: var( --mainTransition);
  width: 100%;
}
   
`;