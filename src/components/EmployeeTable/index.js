import React from "react";
import "./style.css";
import { CardGroup, Card, Button } from "react-bootstrap";

const EmployeeTable = (props) => {
  const Card = ({ first, last, title, image}) => {
    console.log(image)
    return (
      <div className="App">
             <div className="card">
               <img className="card-img-top" src={image} alt="Card image cap"/>
               <div className="card-body">
               <h5 className="card-title"> {`${title} ${first} ${last}`} </h5>
               <p class="card-text">This is {`${first}`}'s employee card, they are an engineer at prestige worldwide</p>
              </div>
            </div>
            </div>
    );
  };

  const userMap = props.users.map(function (el, index) {
    return (<Card
      key={index}
      // image={el.picture.large}
      first={el.name.first}
      last={el.name.last}
      title={el.name.title}
      image={el.picture.large}>
         <Card.Img variant="top" image={el.picture.large} />
      <Card.Body>
    <Card.Title>{el.name.title} {el.name.first} {el.name.last} </Card.Title>
        <Card.Text>
    This is {el.name.last}'s employee card, they are an engineer at prestige worldwide
        </Card.Text>
      </Card.Body> 
    </Card>)
  })


return <div>{userMap}</div>;

};
  
  export default EmployeeTable;
  