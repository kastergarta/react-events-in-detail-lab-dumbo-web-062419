import React from 'react';

export default class DelayedButton extends React.Component {

handleClick = (event) => {

  setTimeout(() => { this.props.onDelayedClick(event)}, this.props.delay);

};

render(){
  // console.log(this.props.onDelayedClick);
    return <button onClick={this.handleClick}>XXX</button>;
  }
}
