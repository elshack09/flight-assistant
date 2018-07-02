import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
// test
const Home = props => {
  return (
    <div>
      <h1 className="display-2">Rosy Airlines Services</h1>
      <Card  body inverse style={{ backgroundColor: '#f5c16c', borderColor: '#8a79af' }}>
        <CardImg className="img-responsive"
          top
          width="100%" height="70%"
          src="https://images.unsplash.com/photo-1494029722188-672a328c4989?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f72669fc9591f5e35a39894fbbef4f9e&auto=format&fit=crop&w=1291&q=80"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Hello, Guest!</CardTitle>
          <CardSubtitle>
               <p className="lead">
              Thank you for choosing Rosy Airlines. If you will like services
              during the duration of your flight, please click the "Request
              Services" button</p><Button color="danger" size="lg" href="/login">Request Services</Button> <p></p>
          </CardSubtitle>
        
          <CardText>
            <p className="lead">
              If an emergency please click "Emergency" your flight attendant
              will be alerted. We remind you that this is a non-smoking flight.
              Smoking is prohibited on the entire aircraft, including the
              lavatories. Happy Flying!
            </p>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
