import React from 'react';
import './App.css';
import Tone from 'tone';
import Controls from './components/Controls';
import DrumTrack from './components/DrumTrack';
import { kick, snare, hat } from './sounds/drums';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kickSequencer: '',
      snareSequencer: '',
      hatSequencer: '',
      kickPattern: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      snarePattern: [null, null, null, null, true, null, null, null, null, null, null, null, true, null, null, null],
      hatPattern: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    }
  }

  componentDidMount() {
    this.createKick(this.state.kickPattern);
  }

  //create kick sequencer
  createKick = (beats) => {
    const kickSeq = new Tone.Sequence(function (time, note) {
      kick.triggerAttackRelease(note, '8n', time)
    }, beats, '16n').start(0);
    this.setState({
      kickSequencer: kickSeq,
    })
  }

  //change kick pattern
  setKick = (i) => {
    const beats = [...this.state.kickPattern];
    const kickSeq = this.state.kickSequencer;
    if (beats[i] === null) {
      beats[i] = 'C2';
      kickSeq.add(i, 'C2')
    } else {
      beats[i] = null;
      kickSeq.remove(i).add(i, null)
    }
    this.setState({
      kickPattern: beats,
      kiqSequencer: kickSeq,
    })
  }

  //create snare sequencer
  createSnare = (beats) => {
    const snareSeq = new Tone.Sequence(function (time) {
      snare.triggerAttackRelease('8n', time)
    }, beats, '16n').start(0);
    this.setState({
      snareSequencer: snareSeq,
    })
  }

  start = () => {
    Tone.Transport.start();
  }

  stop = () => {
    Tone.Transport.stop();
  }

  render() {
    return (
      <div className="App">
        <Controls
          start={this.start}
          stop={this.stop}
        />
        <DrumTrack
          set={this.setKick}
          pattern={this.state.kickPattern}
          drum="kick"
        />
      </div>
    );
  }
}

export default App;
