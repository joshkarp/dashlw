import React, {Component} from 'react';
import '../styles/main.css';

class MenuItem extends Component {
  render() {
    return (
      <div className='menuItem'>{this.props.name}</div>
    );
  }
}

export default MenuItem;
