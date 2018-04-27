import React from "react";
import { Button } from 'reactstrap';

export class Adduser extends React.Component {
  createUser(event, value1, value2) {
    this.props.handleCreateUser(event.target.value, value1, value2)
  }
  saveUser(event) {
    this.props.handleSaveUser();
  }
  render(){
    return(
      <tr>
        <td><input type="text" onChange={(event) => this.createUser(event, 'name', null)} /></td>
        <td><input type="text" onChange={(event) => this.createUser(event, 'email', null)} /></td>
        <td><input type="text" onChange={(event) => this.createUser(event, 'phone', null)} /></td>
        <td><input type="text" onChange={(event) => this.createUser(event, 'company','name')} /></td>
        <td>
          <div>
            <div><input type="text" onChange={(event) => this.createUser(event, 'address','street')} /><input type="text" onChange={(event) => this.createUser(event, 'address','suite')} /></div>
            <div><input type="text" onChange={(event) => this.createUser(event, 'address','city')} /><input type="text" onChange={(event) => this.createUser(event, 'address','zipcode')} /></div>
          </div>
        </td>
        <td>
          <Button color="success" onClick={(event) => this.saveUser(event)}>Save User</Button>
        </td>
      </tr>
    )
  }
}
