import React, { Component } from "react";
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
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadUsers();
      }
    };
  }

  componentWillMount() {
    this.loadUsers();
  }

  loadUsers(){
    this.setState({ isLoading: true }, () => {
      request
        .get("https://randomuser.me/api/?results=1000")
        .then(results => {
          const nextUsers = results.body.results.map(user => ({
            email: user.email,
            name: Object.values(user.name).join(" "),
            photo: user.picture.medium,
            username: user.login.username,
            uuid: user.login.uuid
          }));

          this.setState({
            hasMore: this.state.users.length < 100,
            isLoading: false,
            users: [...this.state.users, ...nextUsers]
          });
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
        <h1>Infinite Loading !!!</h1>
        <p>Scroll down to load more !!</p>
        {users && users.map(user => (
          <div key={user.username}>
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
              </div>
            </div>
          </div>
        ))}
        <hr />
        {error && <div style={{ color: "#900" }}>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {!hasMore && <div>You did it! You reached the end!</div>}
      </div>
    );
  }
}

export default InfiniteLoader
