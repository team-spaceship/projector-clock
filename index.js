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
      1000,
    );
  }

  render() {
    /* eslint-disable*/
    if(this.state.date){
      return(
        <div className="Clock">
        {this.state.date &&
          <p>
            Current time: {this.state.date.getHours()}:{this.state.date.getMinutes()}
          </p>
        }
      </div>
      )
    }else{
      return null
    }
  }

  /* eslint-enable */
}

export default App;
