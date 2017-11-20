import React, { Component } from 'react';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  render() {
    return (
      <div className="Clock">
        <p>
          Current time: {this.state.date.getHours()}:{this.state.date.getMinutes()}
        </p>
      </div>
    );
  }
}

export default App;
