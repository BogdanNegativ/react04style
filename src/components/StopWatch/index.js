import React, { Component } from 'react';
import './index.css';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date(0, 0, 0, 0, 0, 0, 0) };
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
      <div className='StopWatch'>
        <h1>{this.state.time.toLocaleTimeString('en-GB')}</h1>
        <div className='buttons'>
          <button className='stop' onClick={this.stop}>Pause</button>
          <button className='start' onClick={this.start}>Start</button>
          <button className='reset' onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default StopWatch;
