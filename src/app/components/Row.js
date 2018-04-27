import React from "react";

export class tableRow extends React.Component {
  render(){
    return (
      <tr key={this.props.key}>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.email}</td>
        <td>{this.props.data.phone}</td>
        <td>{this.props.data.company.name}</td>
        <td>
          <div>
            <p><span>{this.props.data.address.street}</span><span>{this.props.data.address.suite}</span></p>
            <p><span>{this.props.data.address.city}</span><span>{this.props.data.address.zipcode}</span></p>
          </div>
        </td>
      </tr>
    )
  }
}
