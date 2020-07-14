import React from "react";
import axios from "axios";
import UserDetails from "./UserDetails.jsx";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    this.deleteUser = this.deleteUser.bind(this);
    this.typing = this.typing.bind(this);
  }

  componentWillMount() {
    this.fetchData();
  }

  typing(event, key) {
    let updatedUsers = this.state.users;
    updatedUsers[key][event.target.id] = event.target.value;
    this.setState({ users: updatedUsers });
  }

  fetchData() {
    axios.get("http://localhost:3000/all").then((result) => {
      this.setState({ users: result.data });
    });
  }

  deleteUser(id) {
    axios.delete(`/one/${id}`).then(() => {
      let newUsers = this.state.users.filter((elem) => {
        return elem._id !== id;
      });
      this.setState({
        users: newUsers
      });
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchData.bind(this)}>Add a new user</button>
        <h1>we have {this.state.users.length} users in the database</h1>

        {/* since we added Component did Mount we will not need this button anymore */}
        {/* <button onClick={this.fetchData.bind(this)}>fetch data</button> */}

        {this.state.users.map((user, index) => {
          return <UserDetails user={user} key={index} index={index} deleteUser={this.deleteUser} typing={this.typing} />;
        })}
      </div>
    );
  }
}
export default UserList;
