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
    var data = JSON.parse(localStorage.getItem('myData'));
    debugger;
    if (!data || data.length == 0) {
      axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
        console.log(response.data);
        for (var i=0;i< response.data.length; i++) {
          response.data[i].userDataEdit = false;
        }
        this.setState({
          userData : response.data,
          render: true
        });
        localStorage.setItem('myData', JSON.stringify(response.data));
      });
    } else {
      for (var i=0;i< data.length; i++) {
        data[i].userDataEdit = false;
      }
      this.setState({
        userData: data,
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

  handleEditUser(id) {
    var userData = this.state.userData;
    for (var i=0; i< userData.length; i++) {
      if (userData[i].id == id) {
        userData[i].userDataEdit = true
      }
    }
    this.setState({
      userData : userData,
      render: true
    });
  }
  handleSaveUserProperty(value,id,property1, property2) {
    var data = this.state.userData;
    debugger;
    for (var i=0; i< data.length; i++) {
      if (data[i].id == id) {
        if(property2) {
          data[i][property1][property2] = value
        } else {
          data[i][property1] = value;
        }
      }
    }
    this.setState({
      userData : data,
      render: true
    });
  }
  updateUser(user) {
    var data = this.state.userData;
    for (var i=0; i< data.length; i++) {
      if (data[i].id == user.id) {
        data[i] = user;
        data[i].userDataEdit = false;
      }
    }
    this.setState({
      userData : data,
      render: true
    });
    localStorage.setItem('myData', JSON.stringify(data));
  }
  onChangeName(newName) {
    this.setState({
      homeLink : newName
    });
  }
  sayHaiEvent(name) {
    alert("Hai"+ name);
  }
  handleAddUser(user) {
    var data = this.state.userData;
    data.push(user);
    this.setState({
      userData : data,
      render: true
    });
    localStorage.setItem('myData', JSON.stringify(data));
  }
  render() {

    return (
      <div className="container">
        {(this.state.render ? <Sample addUser={(user) => this.handleAddUser(user)} saveUser={(value) => this.updateUser(value)} saveUserProperty={(value,id,property1, property2) => this.handleSaveUserProperty(value,id,property1, property2)} userData={this.state.userData} deleteUser={(id) => this.handleDeleteUser(id)} editUser={(id) => this.handleEditUser(id)}/> : null)}
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
