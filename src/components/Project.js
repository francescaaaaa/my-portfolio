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

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo("#header", {
      x: "-100%",
      opacity: 0
    },
    {
      x: '0%',
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '#header',
        start: 'top 90%',
        toggleActions: 'play reverse play reverse',
      },
      ease: "power3.inOut",
    });

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
	}, []);


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
                width="600"
                height="400"
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
              (<img src={require(`../${proj.image}`)} alt="img"
                style={{ width: '850px', height: '400px' }}
              />)
            }
            { "Game" in proj.links &&
              <div>
                Try Me ~
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