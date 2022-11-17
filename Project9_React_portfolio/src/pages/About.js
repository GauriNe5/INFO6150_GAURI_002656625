import React, { Component } from 'react';
import styled from 'styled-components';
import about1 from '../svg/about-1.svg'
import about2 from '../svg/web.svg'
import Roll from 'react-reveal/Roll';
export default class About extends Component {

  render() {
 
    return (
        <Content>
            <div className='column'>
              <div className='card'>
              <Roll left>
        
                <h3>Skills</h3>
                <h2> Front-End</h2>
                <p> JavaScript, Java, React Js, HTML, CSS, Node Js.</p>

                <h2>Back-End</h2>
                <p>NodeJS, GraphQL, Java Spring, MySQL, MongoDB, MS SQL</p>

                <h2>Languages</h2>
                <p> Java, Python, JavaScript, C, TypeScript</p>
                </Roll>
                <div className="space"/>
                <Roll right>
                <img src={about1} alt='gau1' />
                </Roll>
              </div>
            </div>
            
            <div className='column'>
              <div className='card'>
                <Roll left>
                <img src={about2} alt='gau2' />
                </Roll>
                <div className="space"/>
                <Roll right>
                <h3>My Experience</h3>
                <p>
                Currently I'm pursuing a graduate degree in Information Systems at Northeastern University. I have experience as a Software Engineer and have worked on 
                technologies like Java, JavaScript, React, Node Js, SQL, and Git.                
                </p>

                </Roll>
              </div>
            </div>
            <div className='row'>
            </div>
        </Content>
    );
  }
}
const Content = styled.div`
  border-bottom: 0.01rem solid var(--mainAccent);
  margin: 0 10rem;
  max-width: 180rem;
  padding: 0 10rem;

  .column {
    float: left;
    width: 50%;
    padding: 2rem 1rem;

  }

  .space {
    height: 4rem;
  }

  .row {
    margin: 2rem 2rem 0 2rem;
  }
  .card {
    text-align: left;
    margin: 4rem; 
  }
  img {
    max-width: 100%;
  }
  p {
    font-size: 2rem;
    text-align: justify;
    margin-bottom: 1.5rem;
    hyphens: auto;
  }
  h3 {
    font-size: 4rem;
    color: var(--mainAccent);
  }
  h6 {
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
    color: var(--light-blue);
  }



  /* Clear floats after the columns */
  .row:after {
    content: '';
    display: table;
    clear: both;
  }
  @media screen and (max-width: 1100px) {
    margin: 0;
    padding: 0;
    width: 100%;
    .column {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  }
`;
