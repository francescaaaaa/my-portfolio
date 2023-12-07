import './Project.css';
import useTypingEffect from './typing-effect';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFigma, FaVideo } from "react-icons/fa";
import { CiTrophy } from "react-icons/ci";

function Project() {

  const header = useTypingEffect("Past Projects", 100);

  return (
    <div>
      <header>
          <h1>{header}</h1>
      </header>
      <body className='projcard'>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={require('../ioc.png')} />
              <Card.Body>
                <Card.Title>Mobile IOC</Card.Title>
                <Card.Text>
                  Final Year Project <br/><br/> Mobile IOC is a web application dashboard developed to visualise Ngee Ann Polytechnic's (NP) utility data. The aim is to aid the facility management team to make informed decisions based on the insightful dashboards.
                  <p>
                    <a href='https://www.figma.com/proto/vCvzWnJQrnoyonHM19TVW0/Mobile-IOC?type=design&node-id=506-1637&t=dzLEYl8rDVg1T3mk-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=506%3A1637&show-proto-sidebar=1' className='figmalink'>
                      <FaFigma color='white'/> Prototype
                    </a>
                    {' '} | {' '}
                    <a href='https://news.smu.edu.sg/news/2023/06/25/reducing-water-wastage-polytechnic-smart-monitoring-tool' className='figmalink'>
                      <CiTrophy size={18} color='white'/> Award
                    </a>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={require('../smuday.png')} />
              <Card.Body>
                <Card.Title>YourSMUDay</Card.Title>
                <Card.Text>
                With YourSMUDay, students can keep track of the tutorials and new content of each module on eLearn by consolidating these information and presenting it in a to-do list format. 
                Additionally, YourSMUDay helps users to keep track of their daily schedule, specifically their timetable & facility booking by automatically reflecting any changes to their timetable or new facility booking in the application.
                  <p>
                    <a href='https://www.figma.com/proto/JCDU0o5WiqTUatirpB1yDc/YourSMUDay_FINAL_Prototype?node-id=1-2&starting-point-node-id=1%3A2' className='figmalink'>
                      <FaFigma color='white'/> Prototype
                    </a>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={require('../projeck_img.png')} />
              <Card.Body>
                <Card.Title>Projeck</Card.Title>
                <Card.Text>
                  Projeck streamlines employer-employee communication with intuitive progress tracking, task management, and project visualization. 
                  Employers easily monitor ongoing projects, create tasks, and efficiently complete projects. 
                  The platform includes a reward system for motivation and reviews to help employees identify strengths and weaknesses, fostering continuous improvement.
                  <p>
                    <a href='https://youtu.be/e_4JG9KR7dc' className='figmalink'>
                      <FaVideo color='white'/> Demo
                    </a>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </body>
    </div>
  );
}

export default Project;