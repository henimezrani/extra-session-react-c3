import React from "react";
import axios from "axios";

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }

  toggleEdit() {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  editUser() {
    axios.put(`/one/${this.props.user._id}`, this.props.user).then(() => {
      this.toggleEdit();
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>{this.props.user._id}</h1>
          {!this.state.editMode ? (
            <div>
              <h1>Name: {this.props.user.first_name}</h1>
              <h3>Email: {this.props.user.email}</h3>
              <h3>Password: {this.props.user.password}</h3>
              <h3>Age: {this.props.user.age}</h3>
            </div>
          ) : (
            <div>
              <label for="first_name">First Name</label>
              <input id="first_name" type="text" value={this.props.user.first_name} onChange={(event) => this.props.typing(event, this.props.index)} />
              <label for="last_name">Last Name</label>
              <input id="last_name" type="text" value={this.props.user.last_name} onChange={(event) => this.props.typing(event, this.props.index)} />
              <label for="email">Email</label>
              <input id="email" type="text" value={this.props.user.email} onChange={(event) => this.props.typing(event, this.props.index)} />
              <label for="password">password</label>
              <input id="password" type="password" value={this.props.user.password} onChange={(event) => this.props.typing(event, this.props.index)} />
              <label for="age">age</label>
              <input id="age" type="number" value={this.props.user.age} onChange={(event) => this.props.typing(event, this.props.index)} />
              <button onClick={this.editUser.bind(this)}>Submit</button>
            </div>
          )}
        </div>
        <div>
          <button onClick={this.toggleEdit.bind(this)}>Edit user</button>
          <button onClick={() => this.props.deleteUser(this.props.user._id)}>Delete User</button>
        </div>
      </div>
    );
  }
}
export default UserDetails;
