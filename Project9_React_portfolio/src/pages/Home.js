import React, { useEffect, useRef } from "react";
import styled from 'styled-components';
import websiteSvg from "../images/Gauri.jpg";
import Roll from 'react-reveal/Roll';
import Slider from "../components/Slider/Slider";
import Navbar from "../components/Navbar"
import About from "./About";


  //orginal code from below
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  const sliderRef = useRef(null)
  const aboutRef = useRef(null)
  const scrollsToWork = () => sliderRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollsToAbout = () => aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  return (
    <>
    <Navbar scrollsToWork={scrollsToWork} scrollsToAbout={scrollsToAbout}/>
          <HeroWrapper>
          <Roll left><Image src={websiteSvg} alt="Gauri"/></Roll>
          <Roll right>
            <TextContainer>
              <h1>Hello!</h1>
              <h3>I'm Gauri, 
                a Graduate student 
                at Northeastern University.</h3>
            </TextContainer>
          </Roll>
          </HeroWrapper>
          <div className="position-fix" ref={sliderRef}/>
          <Slider/>
          <div className="position-fix" ref={aboutRef}/>
          <About />
    </>
  );


}



const HeroWrapper = styled.header`
  overflow: hidden;
  font-family: 'Akshar', sans-serif;
  max-width: 180rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 0.01rem solid var(--mainAccent);
  margin: 0 20rem;

  @media screen and (min-width: 1100px) {
    height: 90vh;
  }
  
  @media screen and (max-width: 1100px) {
    flex-wrap: wrap-reverse;
    margin: 12rem 2rem  5rem 2rem;
    padding-bottom: 2rem;
  }

  @media screen and (max-width: 600px) {
    margin: 5rem 0;
    padding: 2rem;
    padding-bottom: 9rem;
  
  }
`;

const TextContainer = styled.header`
width: 45rem;
margin-left: 5rem;
overflow: hidden;

h1 {
  font-size: 10rem;
  color: var(--mainAccent);
}
h3 {
  color: var(--mainText);
  font-size: 4rem;
}
@media screen and (max-width: 1100px) {
 text-align: center;
 margin-left: 0;
 margin-bottom: 2rem;
}
@media screen and (max-width: 600px) {
  width: 100%;
  padding-bottom: 5rem;
  h1 {
  font-size: 7rem;
}
h3 {
  font-size: 4rem;
}
  }
`;

const Image = styled.img`
max-width: 60rem;
width: 100%;
@media screen and (max-width: 1100px) {
max-height: 40rem;
}
`;


