import React from "react";
import Guestinfo from "./Guestinfo";
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
      this.setState({ guestList: response.data }, () => {});
    });
  }
  render() {
    const listGuests = this.state.guestList.map((customers, i) => {
      return(
      <Guestinfo key={i} list={customers} />)
    });
    return (
      <div  >
        <h1 className="display-1">Order List</h1>
        <img
          className="img-responsive m-sm-5 d-inline-block"
          margin="10px"
          src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1445377411%2FWBAIRLINEFOOD1015-Korean.jpg%3Fitok%3D6RXVNOOk&w=700&q=85"
          alt="airplane-dinner"
        />
        <Row>
          <Col className=" d-inline-block ">
            <ListGroup>
              <ListGroupItem active>
                <ListGroupItemHeading><h1 className="display-3">Food</h1></ListGroupItemHeading>
                <ListGroupItemText />
              </ListGroupItem>
              <ListGroupItem  >{listGuests}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col className=" d-inline-block">
            <ListGroup>
              <ListGroupItem active>
                <ListGroupItemHeading><h1 className="display-3">Guest Info</h1></ListGroupItemHeading>
                <ListGroupItemText />
              </ListGroupItem>
              <ListGroupItem>{listGuests}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col className=" d-inline-block">
            <ListGroup>
              <ListGroupItem active>
                <ListGroupItemHeading><h1 className="display-3">Mood</h1></ListGroupItemHeading>
                <ListGroupItemText />
              </ListGroupItem>
              <ListGroupItem>{listGuests}</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Servicesorder;
