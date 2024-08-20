import React, { Component } from 'react';
import Typical from 'react-typical';
import dataJson from '../../data/data.json';

class Typing extends Component {
  render() {
    return <Typical steps={[dataJson.about.role_1, 3000, dataJson.about.role_2, 2000]} loop={Infinity} wrapper="b" />;
  }
}

export default Typing;
