import './Project.css';
import useTypingEffect from './typing-effect';
import { FaFigma, FaGamepad } from "react-icons/fa";
import { CiTrophy } from "react-icons/ci";
// import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all"
import gsap from "gsap";
import { useLayoutEffect } from 'react';
import projectWorks from '../assets/projectsDetails';



function Project() {

  const header = useTypingEffect("Past Projects", 100);
  const isMobile = matchMedia("(max-width: 768px").matches;

  useLayoutEffect(() => {

    if (!isMobile) {

		const ctx = gsap.context(() => {
			// ---------- selecting all horizontal sections
			const horizontalSections = gsap.utils.toArray(".pin");

			// ---------- applying horizontal scroll animation
			gsap.to(horizontalSections, {
				xPercent: -100 * (horizontalSections.length - 1),
				ease: "none",
				scrollTrigger: {
					trigger: "#container",
					pin: true,
					scrub: 1,
					// snap: 1 / (horizontalSections.length - 1),
          start: "top top",
					end: () => "+=" + document.querySelector("#container").scrollWidth,
          // markers: true,
          // pinSpacing: true
				}
			});
		});

		return () => ctx.revert();
    }
	}, [isMobile]);


  return (
    <div className='project'>
      <header id='header'>
          <h1>{header}</h1>
      </header>
      <main id='container'>
        {projectWorks.map((proj) => {
          return (
            <section className="pin">
              <div className='proj'>
              <h1>{proj.title} <span className='sub'>{proj.subtitle}</span></h1>
              {proj.skills.map((skill) => {
                return (
                  <span class="badge rounded-pill bg-light text-dark skill">{skill}</span>
                )
              })}
              <p>{proj.desc}</p>
              { proj.links["Demo"] ?
                (<iframe
                  // width="600"
                  // height="400"
                  className='projvid'
                  src= {proj.links["Demo"]}
                  title="YouTube video"
                  frameborder="0"
                  allow="accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  web-share" allowfullscreen>
                </iframe>) :
                (<img src={require(`../${proj.image}`)} alt="img" className='projimg'
                />)
              }
              { "Game" in proj.links &&
                <div className='figmalink'>
                  Try Me
                  <a href='https://memorygame4u.netlify.app/'>
                    <FaGamepad size={50} color='black'/>
                  </a>
                </div>
              }
              { "Prototype" in proj.links &&
                <div className='figmalink'>
                  <a href={proj.links["Prototype"]}>
                    <FaFigma size={20} color='black'/>
                  </a>
                  Click here to view prototype
                </div>
              }
              </div>
            </section>
          )
        })}
      </main>
    </div>
  );
}

export default Project;