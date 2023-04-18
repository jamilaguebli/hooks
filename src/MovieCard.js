import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';




function MovieCard({el}) {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.posterURL} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          {el.descreption}
          <StarRatingComponent
              name="stars" /* name of the radio input, it is required */
              value={el.rating} /* number of selected icon (`0` - none, `1` - first) */
              editing={false} /* is component available for editing, default `true` */
/>
        </Card.Text>
        <Link to={`/seemore/${el.id}`}>  <button>See More</button>   </Link>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard