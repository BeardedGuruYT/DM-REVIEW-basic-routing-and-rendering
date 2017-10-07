import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/content/UserCard';
import Landing from './components/content/Landing';
import UserDetail from './components/content/UserDetail';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      activeUser: null
    }

    this.handleActiveUser = this.handleActiveUser.bind(this);
    this.handleClearUser = this.handleClearUser.bind(this);

  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=8')
    .then(users => {
      this.setState({
        users: users.data.results
      })
    })
  }

  handleActiveUser(id) {
    let activeUser = this.state.users.filter(user => {
      return user.id.value === id;
    })
    this.setState({
      activeUser: activeUser[0]
    })
    window.scrollTo(0, 968)
  }

  handleClearUser() {
    this.setState({
      activeUser: null
    })
  }

  render() {
    console.log(window.scrollY)

    const cardList = this.state.users.map((user, i) => {
      return (
        <UserCard key={i}
                  name={`${user.name.first} ${user.name.last}`}
                  cell={user.cell}
                  pic={user.picture.thumbnail}
                  id={user.id.value}
                  makeActive={this.handleActiveUser}/>
      )
    })

    const landingRender = () => {
      let user = this.state.activeUser;
      return user ?
      (<UserDetail pic={user.picture.large}
                   name={`${user.name.first} ${user.name.last}`}
                   cell={user.cell}
                   email={user.email}
                   location={user.location}
                   id={user.id.value}
                   clearUser={this.handleClearUser}/>) :
      (null)
    }

    return (
      <main className="App">
        <div className="main-content">
          <div className="users-container">
            {cardList}
          </div>
          <section className="landing-content">
            <Landing />
            {landingRender()}
          </section>
        </div>
      </main>
    );
  }
}

export default App;
