import React from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
  Col
} from "reactstrap";
import axios from "axios";

class Servicesorder extends React.Component {
  constructor() {
    super();
    this.state = {
      guestList: []
    };
  }
  componentWillMount() {
    this.guestLogins();
  }
  guestLogins() {
    axios.get("/api/users/guests").then(response => {
      this.setState({ guestList: response.data }, () => {
        //  console.log(this.state)
      });
    });
  }
  render() {
    const listGuests = this.state.guestList.map((customers, i) => {
      return (
        <div>
          <ul>{customers.name}</ul>
          <ul>{customers.email}</ul>
          <ul>{customers.seatNumber}</ul>
          <ul>{customers.flightNumber}</ul>
        </div>
      );
    });
    return (
      <div>
        <h1 className="display-1">Order List</h1>
        <Row>
          <Col>
            <ListGroup>
              <ListGroupItem active>
                <ListGroupItemHeading>Guest</ListGroupItemHeading>
                <ListGroupItemText />
              </ListGroupItem>
              <ListGroupItem>
                {listGuests}
                <ListGroupItemHeading>
                  List group item heading
                </ListGroupItemHeading>
                <ListGroupItemText>
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>
                  List group item heading
                </ListGroupItemHeading>
                <ListGroupItemText>
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col>
            {" "}
            <img
              src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1445377411%2FWBAIRLINEFOOD1015-Korean.jpg%3Fitok%3D6RXVNOOk&w=700&q=85"
              alt="airplane-dinner"
            />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Servicesorder;
