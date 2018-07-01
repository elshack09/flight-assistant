import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(guestLogin) {
    guestLogin.preventDefault();
    const guest = {
      name: this.state.name,
      email: this.state.email
    };
    console.log(guest)
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
        <Button>Submit</Button>
      </Form>
    );
  }
}
export default Login;
