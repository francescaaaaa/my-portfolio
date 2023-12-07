import './AboutMe.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCode } from 'react-icons/fa6';
import { RiTeamLine } from "react-icons/ri";
import { motion } from "framer-motion";
// import { useEffect, useRef } from 'react';
import Card1 from './Card'

function About() {
  var data = {
    "soft": ["Teamwork", "Communication", "Self-awareness", "Creativity"],
    "tech": ["Javascript", "HTML", "CSS", "VueJS", "Figma"],
  }

  // var techskills = data.tech.map(function(skill){
  //   return <li key={skill}>{skill}</li>
  // })

  // var softskills = data.soft.map(function(skill){
  //   return <li key={skill}>{skill}</li>
  // })

  // const ref = useRef(null);
  // const isInView = useInView(ref);

  // const mainControls = useAnimation();

  // useEffect(() => {
  //   if (isInView) {
  //     mainControls.start("visible")
  //   }
  // }, [isInView]);

    return (
        <div className="about-content">
          <Container>
            <Row>
              <Col>
                <motion.div
                  initial={{ opacity: 0, translateY: -50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Card>
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
                </motion.div>
              </Col>
            </Row>
            <Row>
              <Col>
              {/* <div ref={ref}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, translateX: -50, translateY: 50 },
                    visible: { opacity: 1, translateX: 0, translateY: 0 }
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 1.5, delay: 0.25 }}
                >
                  <Card className='skill'>
                    <Card.Body>
                      <Card.Title>
                        <strong>Technical Skills</strong> &nbsp;
                        <FaCode />
                      </Card.Title>
                      <Card.Text>
                        <ul>
                          {techskills}
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
                </div> */}
                <Card1
                  title="Technical Skills"
                  icon={<FaCode />}
                  list={data.tech}
                  variant={{
                    hidden: { opacity: 0, translateX: -50, translateY: 50 },
                    visible: { opacity: 1, translateX: 0, translateY: 0 }
                    }}
                  transition={{ duration: 1.5, delay: 0.25 }}
                />
              </Col>
              <Col>
              {/* <div ref={ref}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, translateX: 50, translateY: 50 },
                    visible: { opacity: 1, translateX: 0, translateY: 0 }
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 2 }}
                >
                  <Card className='skill'>
                    <Card.Body>
                      <Card.Title>
                        <strong>Soft Skills</strong> &nbsp;
                        <RiTeamLine />
                      </Card.Title>
                      <Card.Text>
                        <ul>
                          {softskills}
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
                </div> */}
                <Card1
                  title="Soft Skills"
                  icon={<RiTeamLine />}
                  list={data.soft}
                  variant={{
                    hidden: { opacity: 0, translateX: 50, translateY: 50 },
                    visible: { opacity: 1, translateX: 0, translateY: 0 }
                    }}
                  transition={{ duration: 2 }}
                />
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
  export default About;