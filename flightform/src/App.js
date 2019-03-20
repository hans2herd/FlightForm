import React, { Component } from 'react';
import './App.css';
//import Login from './components/Login';
import firebase from './firebase'
//import Home from './components/Home';

class App extends Component {

  constructor() {
    super();
    this.state = {
      hoursWorked: "",
      username: "",
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.hoursWorked,
      user: this.state.username
    }
    itemsRef.push(item);
    this.setState({
      hoursWorked: '',
      username: ''
    });
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }
  render() {

    console.log(this.state)
    return (
      <div className="app">
        <header>
          <div className="wrapper">
            <h1>Fun Food Friends</h1>
          </div>
        </header>
        <div className="container">
          <section className="add-item">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="What's your name?"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <input
                type="text"
                name="hoursWorked"
                placeholder="How many hours did you work?"
                onChange={this.handleChange}
                value={this.state.hoursWorked}
              />
              <button>Add Item</button>
            </form>
          </section>
          <section className="display-item">
            <div className="wrapper">
              <ul />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
 
 export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Login/>
//       </div>
//     );
//   }
// }

