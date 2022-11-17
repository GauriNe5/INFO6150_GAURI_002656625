import React, {useState} from 'react'
import { Slide } from "./Slide"
import styled from 'styled-components';
import clientWeb from "../../images/Guessing-Game.png";
import specialistWeb from "../../images/Book_website.png";
import cosafe1 from "../../images/fizz_buzz_project.png";
import cosafe2 from "../../images/to_do_list.png";
import cosafe3 from "../../images/portfolio_project2.png";

const Slider = () => {
  const slides = [
    {
    title: "Number guessing project", 
    subTitle: "NEU Project", 
    text: "Project using JavaScript, HTML, CSS",
    bigPicture: clientWeb,
    link: "https://lovely-caramel-fb35d6.netlify.app",
    isWeb: true
  },
  { 
    title: "Book Store", 
    subTitle: "Books purchasing website", 
    text: "Personal project - Book store using JavaScript, HTML and CSS.",
    bigPicture: specialistWeb,
    link: "https://profound-alfajores-4c1ab5.netlify.app",
    isWeb: true
  },
  { 
    title: "Fizz Buzz", 
    subTitle: "Fizz Buzz project", 
    text: "This is simple project made using JavaScript, HTML and CSS.",
    bigPicture: cosafe1,
    link: "https://fascinating-quokka-d12efd.netlify.app/",
    isWeb: true
  },
  { 
    title: "To-do List", 
    subTitle: "To keep track of tasks", 
    text: "Website to keep a track of everday tasks. Technologies used JavaScript, HTML, CSS",
    bigPicture: cosafe2,
    link: "https://codepen.io/GauriN1/pen/abGaKrE",
    isWeb: true
  },
  { 
    title: "Portfolio-JavaScript", 
    subTitle: "Basic portfolio project 2", 
    text: "Basic portfolio using Javascript, HTML, CSS",
    bigPicture: cosafe3,
    link: "https://charming-marigold-1bc7a1.netlify.app",
    isWeb: true
  },
];
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [removeSlide, setRemoveSlide] = useState(undefined);
  const nextImage = () => {
    setRemoveSlide(false)
    setTimeout(() => {
      selectedSlide === 4 ? setSelectedSlide(0) : setSelectedSlide(selectedSlide + 1);
      setRemoveSlide(true)
    }, 1000);
    
  };

  const prevImage = () => {
    setRemoveSlide(false)
    setTimeout(() => {
      selectedSlide === 0 ? setSelectedSlide(4) : setSelectedSlide(selectedSlide - 1);
      setRemoveSlide(true)
    }, 1000);
    
  };
  return (
    <SliderWrapper>
      <Slide slide={slides[selectedSlide]} removeSlide={removeSlide} nextImage={nextImage} prevImage={prevImage}/>
      <ButtonRow><Button onClick={() => prevImage()} >Previous</Button><Button  onClick={() => nextImage()}>Next</Button></ButtonRow>
    </SliderWrapper>
  )
}

export default Slider

const SliderWrapper = styled.div`
  position: relative;
  max-width: 180rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 0.01rem solid var(--mainAccent);
  margin: 0 10rem;

  @media screen and (max-width: 1100px) {
    margin: 0 2rem;
    margin-bottom: 7rem;
    padding-bottom: 7rem;
    flex-direction: column-reverse;
  }
`;


const Button = styled.a`
  text-transform: uppercase;
  position: relative;
  font-weight: 700;
  font-size: 2rem;
  cursor: pointer;
  display: block;
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

const ButtonRow = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 0;
  width: 100%;
  max-width: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 2rem;
  @media screen and (max-width: 1100px) {
    position: relative;
    margin-top: 6rem;
    margin-bottom: 0rem;
    bottom: auto;
    right: auto;
  }
`;