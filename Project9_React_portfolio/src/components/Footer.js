import React, { Component } from 'react';
import styled from 'styled-components';
export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <ContactsTitle>Contacts</ContactsTitle>
          <SocialLinkSection>
          <NavItem
                href='mailto:name@gaurinerkar6@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
                title='Mail'>
               Mail
              </NavItem>
              <NavItem
                href='https://www.facebook.com/gauri.nerkar/'
                target='_blank'
                rel='noopener noreferrer'
                title='Facebook'>
               Facebook
              </NavItem>
              <NavItem
                href='https://www.linkedin.com/in/gauri-n/'
                target='_blank'
                rel='noopener noreferrer'
                title='LinkedIn'>
                LinkedIn
              </NavItem>
              <NavItem
                href='https://github.com/GauriNe5/INFO6150_GAURI_002656625'
                target='_blank'
                rel='noopener noreferrer'
                title='Github'>
              Github
              </NavItem>
          </SocialLinkSection>
      </FooterContainer>
    );
  }
}
const FooterContainer = styled.div`
 font-family: 'Akshar', sans-serif;
 font-weight: 500;
  max-width: 180rem;
  width: 100%;
  padding: 5rem 10rem;

  @media screen and (max-width: 600px) {
    padding: 5rem 3rem;
  }
`;

const SocialLinkSection  = styled.div`
display: flex;
align-items: space-between;
justify-content: space-between;
max-width: 40rem;
`;

const ContactsTitle  = styled.div`
 font-size: 3rem;
 margin-bottom: 1rem;
`;

const Contacts = styled.div`
font-size: 1.5rem;
margin-bottom: 1rem;
`;


const NavItem = styled.a`
text-transform: uppercase;
position: relative;
  cursor: pointer;
   font-size: 2rem;
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

@media screen and (max-width: 600px) {
  font-size: 1.5rem;
  }
   
`;