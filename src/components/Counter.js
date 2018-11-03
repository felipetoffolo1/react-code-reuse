import React from "react";
import styles from "./Counter.module.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
  }
  add() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }
  minus() {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  }
  render() {
    const { counter } = this.state;
    return (
      <div className={styles.counter}>
        <button className={styles.counter__button} onClick={this.add}>
          +
        </button>
        <input
          className={styles.counter__input}
          readOnly
          type="text"
          value={counter}
        />
        <button className={styles.counter__button} onClick={this.minus}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
