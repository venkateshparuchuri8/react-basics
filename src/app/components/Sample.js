import React from "react";

import { Container, Row, Col } from 'reactstrap';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';

export class Sample extends React.Component  {
  state = {
    userData: this.props.userData
  }

  sendDataToParent(data) {
    console.log(data);
    debugger;
    this.props.sayHai(data);
  }
  deleteUser(event, id) {
    console.log(id);
    // this.props.deleteUser(event.target);
  }
  render(){
    return (
      <Container>
        <Table bordered striped responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company Name</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userData.map((user, i) =>
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.company.name}</td>
                <td>
                  <div>
                    <p><span>{user.address.street}</span><span>{user.address.suite}</span></p>
                    <p><span>{user.address.city}</span><span>{user.address.zipcode}</span></p>
                  </div>
                </td>
                <td>
                  <Button color="info">Edit</Button>{' '}
                  <Button color="danger" data-id={user.id} onClick={(event) => this.deleteUser(event, user.id)}>Delete</Button>{' '}
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    )
  }
}
