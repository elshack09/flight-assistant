import React, { Component } from 'react'
import { Jumbotron, Button, NavbarBrand } from 'reactstrap';

const Homepage = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Rosy Airlines Services</h1>
        <p className="lead">Thank you for choosing Rosy Airlines. If you will like services during the duration of your flight, please click the "Request Services Now" button.</p>
        <hr className="my-2" />
        <p>We remind you that this is a non-smoking flight. Smoking is prohibited on the entire aircraft, including the lavatories. Happy Flying!</p>
        <p className="lead">
          <Button color="primary">Request Services Now</Button>
        </p>
      </Jumbotron>
    </div>
  );
};
export default Homepage








