import React, { Component } from 'react';
import Button from './components/Button';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBig: false,
    };
    this.onClickHandler2 = this.onClickHandler2.bind(this)
  }

  onClickHandler(e) {
    console.log('caught click ', e);

  };
  onClickHandler2(e) {
    console.log('caught click2 ', e);
    this.setState({
      isBig: !this.state.isBig,
    })
  };

  render() {
    const { isBig } = this.state;
    console.log('Main render ');
    return (
      <div>
        <Button onClick={this.onClickHandler} type="submit" >Button 1</Button>
        <Button onClick={this.onClickHandler2} isBig={isBig} type="submit"><span>Button 2</span></Button>
      </div>
    );
  }
};

export default Main;
