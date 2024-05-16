import timelineElements from "../assets/timelineElements";
import "./Work.css"
import { FaBriefcase } from 'react-icons/fa';
import { IoMdSchool } from "react-icons/io";


function Work() {
    return (
      <div>
        <header>
          <h1 className="w-75">My Work Experience</h1>
        </header>
        {timelineElements.map((element)=> {
          return (
            <div key={element.id} className="flex relative py-5" style={{borderBottom: `2px dashed #31363F`}}>
              <div style={{color: '#6589ad'}}>
                <h5>{element.date}</h5>
                {element.icon === "school" ? <IoMdSchool/> : <FaBriefcase/>}
              </div>
              <div className="rounded-lg px-3 py-2 text-center">
                <h4 className="font-weight-bold" style={{color:'#1B1A55'}}>{element.role}</h4>
                <div style={{fontSize: '12px', color: "#19376D"}}>{element.company}</div>
                { element.description.length > 1 ?
                <ul className="py-0 px-2">{element.description.map((desc) => {
                  return <li className="m-1 p-1" style={{color: "#102C57"}}>{desc}</li>
                })}</ul> : <div className="my-2" style={{color: "#102C57"}}>{element.description[0]}</div>
                }
                <div>{element.tech.map((tech, index) => {
                  return <span key={index} className="rounded-lg px-2 py-1 m-1" style={{backgroundColor: '#31363F', color: 'white'}}>{tech}</span>;
                })}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  export default Work;