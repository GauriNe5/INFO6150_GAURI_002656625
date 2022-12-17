import React from 'react';
import styled, {css} from 'styled-components';
import arrow from "../../svg/arrow.svg";
import Roll from 'react-reveal/Roll';

export const Slide = ({slide, removeSlide}) => {
    const {title, subTitle, text, bigPicture, mobPicture, isWeb, mobAppPicture, link} = slide;
  return (
    <SlideWrapper>
        <Row>
            <Column>
            <Roll left key={title} when={removeSlide}>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
            </Roll>
            </Column>
            <Column>
            <Roll right key={text} when={removeSlide}>
                <Text>{text}</Text>
                {link && <Button onClick={()=> window.open(link, "_blank")}>View Project <Image src={arrow} alt="onClick"/></Button>}
            </Roll>
            </Column>
        </Row>
        {isWeb && 
        <ImagesRow>
        <Roll left key={bigPicture} when={removeSlide}>
           <BigImage src={bigPicture}/>
        </Roll>
        <Roll right key={mobPicture} when={removeSlide}>
           <SmallImage src={mobPicture}/>
        </Roll>
        </ImagesRow>}
        {!isWeb && 
        <ImagesRow isMobile={!isWeb}>
        <Roll left key={mobPicture} when={removeSlide}>
           <SmallImage src={mobAppPicture[0]} isMobile={!isWeb}/>
        </Roll>
        <Roll bottom key={mobPicture} when={removeSlide}>
           <SmallImage src={mobAppPicture[1]} isMobile={!isWeb}/>
        </Roll>
        <Roll right key={mobPicture} when={removeSlide}>
           <SmallImage src={mobAppPicture[2]} isMobile={!isWeb}/>
        </Roll>
        </ImagesRow>}
    </SlideWrapper>
  )
}


const SlideWrapper = styled.div`
  max-width: 180rem;
  margin: 10rem auto;

  @media screen and (min-width: 1100px) {
    height: 70vh;
  }

  @media screen and (max-width: 1100px) {
    min-height: 70vh;
    justify-content: flex-start;
    margin: 5rem 0rem  0rem 0rem;
    padding: 0;
    padding-bottom: 2rem;
  }
`;

const Row = styled.div`
  width: 100%;
  max-width: 110rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;

  @media screen and (max-width: 1100px) {
    align-items: center;
    flex-direction: column;
  }
`;

const Column = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  color: var(--mainAccent);
`;
const SubTitle = styled.h4`
  font-size: 2rem;
  color: var(--color-grey-light-1);
  text-transform: uppercase;
`;
const Text = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
  position: relative;
  font-weight: 700;
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
`;

const Image = styled.img`
width: 3rem;
height: 3rem;
margin-left: 1rem;
svg {
    fill: var(--mainAccent);
}
`;

const BigImage = styled.img`
max-height: 40rem;
height: 100%;
@media screen and (max-width: 1100px) {
  width: 100%;
  margin-left: 3rem;
  }
`;

const SmallImage = styled.img`
max-height: 35rem;
margin-left: -5rem;
margin-bottom: -7rem;
height: 100%;
${(props) =>
    (props.isMobile &&
      css`
       margin: 0 2rem;
`)}
@media screen and (max-width: 1100px) {
  width: 100%;
  margin-left: -2rem;

  ${(props) =>
    (props.isMobile &&
      css`
       margin-left: 0;
`)}
}
`;

const ImagesRow = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 120rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

