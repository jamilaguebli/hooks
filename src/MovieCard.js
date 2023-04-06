import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample({el}) {
  return (

    <Card style={{ width: '18rem'   }}>
      <Card.Img variant="top" src={el.img}  style={{widh:"100px ",height:"100px"}}/>
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          {el.description}
     
        </Card.Text>
        <Card.Title>{el.posterURL}</Card.Title>
        <Card.Title>{el.rating}</Card.Title>
        
        
      </Card.Body>
    </Card>
   
  );
}

export default BasicExample;
