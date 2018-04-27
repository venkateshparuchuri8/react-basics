import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
        age: props.initialAge,
        homeLink: props.initialLinkval
    };
  }
  onClickIncrease() {
    this.setState({
      age: this.state.age + 3
    });
  }

  onChangeLinkName() {
    this.props.changeLink(this.state.homeLink);
  }

handleValueChange(event) {
  this.setState({
    homeLink: event.target.value
  });
}

  render() {

    return (

      <div>
        <p>In A New Component</p>
      <p>Hello {this.props.name}. Your age is {this.state.age}! </p>

    <hr/>
  <button onClick={this.onClickIncrease.bind(this)} className="btn btn-primary">Increase Age</button>
<hr/>
<button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
<hr/>
<input type="text" value={this.state.homeLink} onChange ={(event) => this.handleValueChange(event)} />
<button className="btn btn-primary" onClick={this.onChangeLinkName.bind(this)}>Change Header</button>
      </div>

    );
  }
}
