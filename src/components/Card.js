import Card from 'react-bootstrap/Card';

function Card1(props) {

    var skills = props.list.map(function(skill){
        return <li key={skill} className='item'>{skill}</li>
    })

    return (
        <div>
                <Card className='skill' id={props.id}>
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
        </div>
    )
}

export default Card1;