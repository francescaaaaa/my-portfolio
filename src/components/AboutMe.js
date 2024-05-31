import './AboutMe.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCode } from 'react-icons/fa6';
import { RiTeamLine } from "react-icons/ri";
// import { motion } from "framer-motion";
// import { useEffect, useRef } from 'react';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"
import gsap from "gsap";
import Card1 from './Card'
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

function About() {

  const scrollRef = useRef();

  var data = {
    "soft": ["Teamwork", "Communication", "Self-awareness", "Creativity"],
    "tech": ["Javascript", "HTML", "CSS", "VueJS", "Figma"],
  }

  const isMobile = matchMedia("(max-width: 768px").matches;

  useEffect(() => {

    if (!isMobile) {
  // useGSAP(() => {
    gsap.to('#about', {
      y: -200,
      duration: 1,
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom', // Adjust based on when you want the animation to start
        end: 'bottom top', // Adjust based on when you want the animation to end
        toggleActions: 'play reverse play reverse', // Adjust the actions as needed
        // markers: true
      },
      ease: "power1.inOut",
    });

    gsap.fromTo('#tech', {
      x: '-100%',
      opacity: 0
    }, // initial state
    {
      x: '0%',
      y: -200,
      opacity: 1,
      duration: 1.25,
      scrollTrigger: {
        trigger: '#tech',
        start: 'top 90%',
        // end: 'bottom 50%',
        toggleActions: 'play reverse play reverse',
      },
      ease: "power1.inOut",
    });

    gsap.fromTo("#soft", {
      x: "10%",
      opacity: 0
    },
    {
      x: '0%',
      opacity: 1,
      duration: 1.25,
      scrollTrigger: {
        trigger: '#tech',
        start: 'top 70%',
        // end: 'top 90%',
        toggleActions: 'play reverse play reverse',
        // markers: true
      },
      ease: "power1.inOut",
    });
  }

  }, [isMobile]);
  // });

    return (
        <div className="about-content" ref={scrollRef}>
          <Container className='p-0'>
            <Row>
              <Col>
                  <Card id='about'>
                    <Card.Body>
                      <Card.Title>
                        <strong>About Me</strong>
                      </Card.Title>
                      <Card.Text className='intro'>
                        Hello! Welcome to my cozing space where I share projects I have contributed in :)
                        I am a fresh graduate from <b>Singapore Management University (SMU)</b> with a <b>BSc (Information Systems)</b>.
                        During my time at SMU, I have worked with VueJS framework, Javascript, HTML and CSS for the front-end development. I am a highly driven individual who enjoys front-end development and I am willing to learn new technologies along the way.
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card1
                  id="tech"
                  title="Technical Skills"
                  icon={<FaCode />}
                  list={data.tech}
                />
              </Col>
              <Col>
                <Card1
                  id="soft"
                  title="Soft Skills"
                  icon={<RiTeamLine />}
                  list={data.soft}
                />
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
  export default About;