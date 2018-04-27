import React from "react";
import { render } from "react-dom";
import axios from 'axios';
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Sample } from "./components/Sample";

class hello extends React.Component {
  constructor(){
    super();
  }
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      homeLink: "Home",
      userData: [],
      render: false
    };
  }

  componentWillMount() {
    var data = localStorage.getItem('myData');
    if (!data) {
      axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
        console.log(response.data);
        this.setState({
          userData : response.data,
          render: true
        });
        localStorage.setItem('myData', JSON.stringify(response.data));
      });
    } else {
      this.setState({
        userData: JSON.parse(data),
        render: true
      })
    }
  }

  onGreet() {
    alert("Hello");
  }

  handleDeleteUser(id) {
    var data = JSON.parse(localStorage.getItem('myData'));
    for (var i=0;i< data.length; i++) {
      if (data[i].id == id) {
        data.splice(i,1);
      }
    }
    localStorage.setItem('myData', JSON.stringify(data));
    this.setState({
      userData : data,
      render: true
    });
  }

  onChangeName(newName) {
    this.setState({
      homeLink : newName
    });
  }
  sayHaiEvent(name) {
    alert("Hai"+ name);
  }
  render() {

    return (
      <div className="container">
        {(this.state.render ? <Sample userData={this.state.userData} deleteUser={(id) => this.handleDeleteUser(id)}/> : null)}
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
