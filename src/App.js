import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/content/UserCard';
import Landing from './components/content/Landing';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      activeId: null
    }
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=8')
    .then(users => {
      this.setState({
        users: users.data.results
      })
    })
  }

  render() {
    console.log(this.state.users);

    const cardList = this.state.users.map((user, i) => {
      return (
        <UserCard key={i}
                  name={`${user.name.first} ${user.name.last}`}
                  email={user.cell}
                  pic={user.picture.thumbnail}/>
      )
    })

    return (
      <main className="App">
        <div className="main-content">
          <div className="users-container">
            {cardList}
          </div>
          <section className="landing-content">
            <Landing />
          </section>
        </div>
      </main>
    );
  }
}

export default App;
