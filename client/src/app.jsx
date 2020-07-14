import React from "react";
import ReactDOM from "react-dom";
import UserList from "./components/UserList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("App"));
