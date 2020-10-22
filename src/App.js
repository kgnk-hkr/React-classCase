import React from 'react';
import './App.css';
import SampleButton from './SampleButton';

function App() {
  return (
    <div>
      <SampleButton id="samplebutton1"/>
      <SampleButton id="samplebutton2"/>
      <SampleButton id="samplebutton3"/>
    </div>
  );
}

export default App;//他の関数から呼び出せるように
