import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date(0, 0, 0, 0, 0, 0) };
    this.idTimeout = null;
  }

  componentDidMount = () => {
    this.start();
  }

  start = () => {
    if (this.idTimeout === null) {
      this.tick();
    }
  }
  tick = () => {
    this.idTimeout = setTimeout(() => {
      const { time } = this.state;
      const newTime = new Date(time.getTime() + 1000);
      this.setState({ time: newTime }, this.tick);
    }, 1000);
  };


  stop = () => {
    clearTimeout(this.idTimeout);
    this.idTimeout = null;
  }
  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) }, this.start);
  }
  componentWillUnmount = () => {
    this.stop();
  }
  render() {
    return (
      <div>
        <h1>{this.state.time.toLocaleTimeString('en-GB')}</h1>
        <button onClick={this.start}>START</button>
        <button onClick={this.reset}>RESET</button>
        <button onClick={this.stop}>STOP</button>
      </div>
    );
  }
}

export default StopWatch;
