import React, { Component } from "react";
import { Badge } from "reactstrap";
import { Link } from "react-router-dom";

class Guestinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list
    };
  }
  render() {
    return (
      <div>
        <ul>
          <h1 className>
            <Badge className="mr-2" color="success">
              Name
            </Badge>
            <Link to={`/customer/${this.state.list.id}`}>
              <Badge className="mr-2" color="primary">
                Update
              </Badge>
            </Link>
            <Link to={`api/users/guests/${this.state.list.id}`}>
              <Badge className="mr-2" color="danger">
                Delete
              </Badge>
            </Link>
          </h1>
          <span>
            <h1>{this.state.list.name}</h1>
          </span>
        </ul>
        <ul>
          <h3>
            <Badge color="warning">Email</Badge>
          </h3>
          <span>
            <h1>{this.state.list.email}</h1>
          </span>
        </ul>
        <ul>
          <h3>
            <Badge color="warning">Seat Number</Badge>
          </h3>
          <span>
            <h1>{this.state.list.seatNumber}</h1>
          </span>
        </ul>
        <ul>
          <h3>
            <Badge color="warning">Flight Number</Badge>
          </h3>
          <span>
            <h1>{this.state.list.flightNumber}</h1>
          </span>
        </ul>
      </div>
    );
  }
}
export default Guestinfo;
