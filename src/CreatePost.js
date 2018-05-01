import React, { Component } from "react";

class CreatePost extends Component {
  state = {
    inputValue: ""
  };
  Change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.searchBtn(this.state.inputValue);
  };

  handleButtonClick = () => {
    this.props.addToDo(this.state.inputValue);
    this.setState({
      inputValue: ""
    });
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s10">
          <input
            name="inputValue"
            placeholder="write what to you do "
            value={this.state.inputValue}
            onChange={e => this.Change(e)}
          />
        </div>
        <div className="input-field col s2">
          <button
            className="blue waves-effect waves-light btn"
            onClick={this.handleButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default CreatePost;
