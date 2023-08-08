import React, { Component } from 'react';

class Counter2 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.start();
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    this.stop();
  }
  start = () => {
    this.idInterval = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }
  stop = () => {
    clearInterval(this.idInterval);
  }

  render() {
    console.log('render');
    return (
      <article>
        <h2>COUNTER:{this.state.count}</h2>
        <h3>THEME: {this.props.theme}</h3>
        <button onClick={this.stop}>STOP</button>
      </article>
    );
  }
}

export default Counter2;
