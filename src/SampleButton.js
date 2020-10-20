import './SampleButton.css';
import React from 'react';


class SampleButton extends React.Component {

  // コンストラクター
  constructor(props) {
    super(props);
    // テキストの初期値設定
    this.state = {
      text: 'OK'
    };

    //クリックして呼び出すイベント動作を実際にクリックした動作と紐づけている
    //this.handleClickのthisとbind(this)のthisは指しているものが微妙に違う
    // this.handleClick = this.handleClick.bind(this);
  }

  // クリックイベントで実行する処理
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
      <div onClick={this.handleClick.bind(this)} class="sampleButton-ok" id="samplebutton">
        {this.state.text}
      </div >
    )
  }
}

export default SampleButton;//他の関数から呼び出せるように
