import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  start = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    console.log('render');
    return (
      <article>
        <h2>COUNTER:{this.state.count}</h2>
        <h3>THEME: {this.props.theme}</h3>
        <button onClick={this.start}>START</button>
      </article>
    );
  }
}

export default Counter;
