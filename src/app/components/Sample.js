import React from "react";

import { Container, Row, Col } from 'reactstrap';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';

export class Sample extends React.Component  {
  state = {
    userData: this.props.userData
  }
  componentWillReceiveProps(newProps) {
    this.setState({userData: newProps.userData});
  }
  shouldComponentUpdate() {
    return true;
  }
  sendDataToParent(data) {
    console.log(data);
    debugger;
    this.props.sayHai(data);
  }
  deleteUser(event, id) {
    console.log(id);
    this.props.deleteUser(id);
  }
  handleEditUser(event, id) {
    console.log(id);
    this.props.editUser(id);
  }
  handleSaveUser(event, user) {
    debugger;
    console.log(user);
    this.props.saveUser(user);
  }
  handleSaveUserProperty(event, id, property1, property2) {
    debugger;
    this.props.saveUserProperty(event.target.value, id, property1, property2);
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
                <td>{(user.userDataEdit ? <input type="text" value={user.name} onChange={(event) => (this.handleSaveUserProperty(event, user.id, 'name', null))} /> : <span>{user.name}</span>)}</td>
                <td>{(user.userDataEdit ? <input type="text" value={user.email} onChange={(event) => (this.handleSaveUserProperty(event, user.id, 'email', null))} /> : <span>{user.email}</span>)}</td>
                <td>{(user.userDataEdit ? <input type="text" value={user.phone} onChange={(event) => (this.handleSaveUserProperty(event, user.id, 'phone', null))} /> : <span>{user.phone}</span>)}</td>
                <td>{(user.userDataEdit ? <input type="text" value={user.company.name} onChange={(event) => (this.handleSaveUserProperty(event, user.id, 'company', 'name'))} /> : <span>{user.company.name}</span>)}</td>
                <td>
                  <div>
                    <div>{(user.userDataEdit ? <div><input type="text" value={user.address.street} onChange={(event) => (this.handleSaveUserProperty(event, user.id, 'address', 'street'))} /><input type="text" value={user.address.suite} onChange={(event) => (this.handleSaveUserProperty(event, user.id, 'address', 'suite'))} /></div> : <div><span>{user.address.street}</span><span>{user.address.suite}</span></div>)}</div>
                    <div>{(user.userDataEdit ? <div><input type="text" value={user.address.city} onChange={(event) => (this.handleSaveUserProperty(event, user.id, 'address', 'city'))}/><input type="text" value={user.address.zipcode} onChange={(event) => (this.handleSaveUserProperty(event, user.id, 'address', 'zipcode'))} /></div> : <div><span>{user.address.city}</span><span>{user.address.zipcode}</span></div>)}</div>
                  </div>
                </td>
                <td>
                {user.userDataEdit ? <Button color="info" data-id={user.id} onClick={(event) => this.handleSaveUser(event, user)}>Save</Button> : <Button color="info" data-id={user.id} onClick={(event) => this.handleEditUser(event, user.id)}>Edit</Button>}
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
