import './SampleButton.css';
import React from 'react';


class SampleButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'OK'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const samplebutton = document.getElementById('samplebutton');

    if (!samplebutton.classList.contains('sampleButton-ng')) {
      this.setState(state => ({
        text: 'NG'
      }));
      samplebutton.classList.add('sampleButton-ng');
    } else {
      this.setState(state => ({
        text: 'OK'
      }));
      samplebutton.classList.remove('sampleButton-ng');
    }
  }

  render() {
    return (
      <div onClick={this.handleClick} class="sampleButton-ok" id="samplebutton">
        {this.state.text}
      </div >
    )
  }
}

export default SampleButton;//他の関数から呼び出せるように
