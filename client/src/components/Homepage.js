import React, { Component } from "react";
import { Jumbotron, Button, iframe } from "reactstrap";

const Homepage = props => {
  return (
    <div>
      <Jumbotron className="">
        <h1 className="display-3">Rosy Airlines Services</h1>
        <p className="lead">
          Thank you for choosing Rosy Airlines. If you will like services during
          the duration of your flight, please click the "Request Services Now"
          button.
        </p>
        <hr className="my-2" />

        <p className="lead">
          <Button color="primary">Request Services Now</Button>
        </p>
        <p>
          If an emergency please click "Emergency" your flight attendant will be alerted. We remind you that this is a non-smoking flight. Smoking is prohibited on the entire aircraft, including the lavatories. Happy Flying!
        </p>
        <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
      </Jumbotron>
      
    </div>
  );
};
export default Homepage;
