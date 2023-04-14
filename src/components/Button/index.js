import React, { Component } from 'react';

import './style.css';


class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreen: false,
    }
    this.onClickBut = this.onClickBut.bind(this)
  };

  onClickBut() {
    this.setState({
      isGreen: !this.state.isGreen,
    });
  };

  render() {
    const { type, onClick, classess = '', isBig = false, children } = this.props;
    const { isGreen } = this.state;
    return (
      <button onClickBut={this.onClickBut} className={`buttonNew ${classess} ${isBig ? 'btn-big' : ''} ${isGreen ? 'isGreen' : ''}`} type={type} onClick={onClick}>{children}</button>
    );
  }
};


// this learn js почитать!! контекст + задания
// const Button = (props) => {
//   const { type, onClick, classess = '', isBig = false, children } = props;
//   return (
//     <button className={`buttonNew ${classess} ${isBig ? 'btn-big' : ''}`} type={type} onClick={onClick}>{children}</button>
//   )
// };


export default Button;

