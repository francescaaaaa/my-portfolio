import Card from 'react-bootstrap/Card';
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from 'react';

function Card1(props) {

    var skills = props.list.map(function(skill){
        return <li key={skill} className='item'>{skill}</li>
    })

    const ref = useRef(null);
    const isInView = useInView(ref);

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
        mainControls.start("visible")
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref}>
            <motion.div
                variants={props.variant}
                initial="hidden"
                animate={mainControls}
                transition={props.transition}
            >
                <Card className='skill'>
                <Card.Body>
                    <Card.Title>
                    <strong>{props.title}</strong> &nbsp;
                    {props.icon}
                    </Card.Title>
                    <Card.Text>
                    <ul>
                        {skills}
                    </ul>
                    </Card.Text>
                </Card.Body>
                </Card>
            </motion.div>
        </div>
    )
}

export default Card1;