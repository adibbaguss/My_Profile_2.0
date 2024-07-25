import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <div style={styles.card} onClick={this.handleClick}>
          <h3>This is the front of the card.</h3>
        </div>

        <div style={styles.card} onClick={this.handleClick}>
          <h3>This is the back of the card.</h3>
        </div>
      </ReactCardFlip>
    );
  }
}

const styles = {
  card: {
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 20,
    padding: 20,
    textAlign: 'center',
    height: '200px', // Adjust height as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer', // Change cursor to pointer to indicate it's clickable
  },
};

export default Test;
