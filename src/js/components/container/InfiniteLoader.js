import React, { Component, Fragment } from "react";
import request from "superagent";

class InfiniteLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      users: []
    };

    window.onscroll = () => {
      const {
        loadUsers,
        state: { error, isLoading, hasMore }
      } = this;

      if (error || isLoading || !hasMore) return;

      if (
        window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
      ) {
        this.loadUsers();
      }
    };
  }

  componentWillMount() {
    this.loadUsers();
  }

  loadUsers(){
    this.setState({ isLoading: true }, () => {
      request
        .get("https://randomuser.me/api/?results=10")
        .then(results => {
          const nextUsers = results.body.results.map(user => ({
            email: user.email,
            name: Object.values(user.name).join(" "),
            photo: user.picture.medium,
            username: user.login.username,
            location: user.location.street,
            city: user.location.city,
            description: user.location.timezone.description,
            uuid: user.login.uuid
          }));

          // all time only 10 nextUsers
          console.log('nextUsers--', nextUsers)
          this.setState({
            hasMore: this.state.users.length < 100,
            isLoading: false,
            users: [...this.state.users, ...nextUsers]
          });
          //add users onload i.e. 10->20->30 ...etc
          console.log('users--', this.state.users)
        })
        .catch(err => {
          this.setState({
            error: err.message,
            isLoading: false
          });
        });
    });
  };

  render() {
    const { error, hasMore, isLoading, users } = this.state;
    return (
      <div className="App">
        <h1>Infinite Users!</h1>
        <p>Scroll down to load more!!</p>
        {users && users.map(user => (
          <Fragment key={user.username}>
            <hr />
            <div style={{ display: "flex" }}>
              <img
                alt={user.username}
                src={user.photo}
                style={{
                  borderRadius: "50%",
                  height: 72,
                  marginRight: 20,
                  width: 72
                }}
              />
              <div>
                <h2 style={{ marginTop: 0 }}>@{user.username}</h2>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Location: {user.location}, {user.city}</p>
                <p>Description: {user.description}</p>
              </div>
            </div>
          </Fragment>
        ))}
        <hr />
        {error && <div style={{ color: "#900" }}>{error}</div>}
        {isLoading && <div><b>Loading...</b></div>}
        {!hasMore && <div>You did it! You reached the end!</div>}
      </div>
    );
  }
}

export default InfiniteLoader
