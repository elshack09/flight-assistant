import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      seatNumber: "",
      flightNumber: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(guestLogin) {
    guestLogin.preventDefault();
    const guest = {
      name: this.state.name,
      email: this.state.email,
      seatNumber: this.state.seatNumber,
      flightNumber: this.state.flightNumber
    };
    // creating users & storing in database
    axios
      .post("/api/users/guests", guest)
      .then(res => {
        this.props.history.push("/order");
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }
  onChange(guestLogin) {
    this.setState({ [guestLogin.target.name]: guestLogin.target.value });
  }

  render() {
    return (
      <Form inline onSubmit={this.onSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="name" className="mr-sm-2">
            Name
          </Label>
          <Input
            type="fullname"
            name="name"
            id="fullname"
            placeholder="Rosy Airlines"
            value={this.state.name}
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="email" className="mr-sm-2">
            Email
          </Label>
          <Input
            type="Email"
            name="email"
            id="emailAddress"
            placeholder="rosyairlines@rosy.com"
            value={this.state.email}
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="seat" className="mr-sm-2">
            Seat Number
          </Label>
          <Input
            type="seat"
            name="seatNumber"
            id="seatNumber"
            placeholder="123B"
            value={this.state.seatNumber}
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="flight" className="mr-sm-2">
            Flight Number
          </Label>
          <Input
            type="flight"
            name="flightNumber"
            id="flightNumber"
            placeholder="2207"
            value={this.state.flightNumber}
            onChange={this.onChange}
          />
        </FormGroup>
        <Button href="">Submit</Button>
      </Form>
    );
  }
}
export default Login;
