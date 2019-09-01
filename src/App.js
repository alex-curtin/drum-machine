import React from 'react';
import './App.css';
import Tone from 'tone';
import Controls from './components/Controls';
import Steps from './components/Steps';
import DrumTrack from './components/DrumTrack';
import { kick, snare, hatC, hatO } from './sounds/drums';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpm: 120,
      playing: false,
      kickSequencer: '',
      snareSequencer: '',
      hatCSequencer: '',
      kickPattern: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      snarePattern: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      hatCPattern: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      hatOPattern: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    }
  }

  componentDidMount() {
    this.createKick(this.state.kickPattern);
    this.createSnare(this.state.snarePattern);
    this.createhatC(this.state.hatCPattern);
    this.createhatO(this.state.hatOPattern);
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
      beats[i] = 'C0';
      kickSeq.add(i, 'C0')
    } else {
      beats[i] = null;
      kickSeq.remove(i).add(i, null)
    }
    this.setState({
      kickPattern: beats,
      kickSequencer: kickSeq,
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

  //change snare pattern
  setSnare = (i) => {
    const beats = [...this.state.snarePattern];
    const snareSeq = this.state.snareSequencer;
    if (beats[i] === null) {
      beats[i] = true;
      snareSeq.add(i, true)
    } else {
      beats[i] = null;
      snareSeq.remove(i).add(i, null)
    }
    this.setState({
      snarePattern: beats,
      snareSequencer: snareSeq,
    })
  }

  //create closed hat sequencer
  createhatC = (beats) => {
    const hatCSeq = new Tone.Sequence(function (time) {
      hatC.triggerAttackRelease('8n', time)
    }, beats, '16n').start(0);
    this.setState({
      hatCSequencer: hatCSeq,
    })
  }

  //change closed hat pattern
  sethatC = (i) => {
    const beats = [...this.state.hatCPattern];
    const hatCSeq = this.state.hatCSequencer;
    if (beats[i] === null) {
      beats[i] = true;
      hatCSeq.add(i, true)
    } else {
      beats[i] = null;
      hatCSeq.remove(i).add(i, null)
    }
    this.setState({
      hatCPattern: beats,
      hatCSequencer: hatCSeq,
    })
  }

  //create open hat sequencer
  createhatO = (beats) => {
    const hatOSeq = new Tone.Sequence(function (time) {
      hatO.triggerAttackRelease('8n', time)
    }, beats, '16n').start(0);
    this.setState({
      hatOSequencer: hatOSeq,
    })
  }

  //change open hat pattern
  sethatO = (i) => {
    const beats = [...this.state.hatOPattern];
    const hatOSeq = this.state.hatOSequencer;
    if (beats[i] === null) {
      beats[i] = true;
      hatOSeq.add(i, true)
    } else {
      beats[i] = null;
      hatOSeq.remove(i).add(i, null)
    }
    this.setState({
      hatOPattern: beats,
      hatOSequencer: hatOSeq,
    })
  }

  toggleTransport = () => {
    Tone.Transport.toggle();
    this.setState(prevState => ({
      playing: !prevState.playing
    }))
  }

  changeBpm = (e) => {
    const bpm = e.target.value;
    this.setState({
      bpm: bpm,
    })
    Tone.Transport.bpm.value = bpm;
  }

  bpmTick = (e) => {
    const tick = e.target.value;
    Tone.Transport.bpm.value += parseInt(tick);
    this.setState(prevState => ({
      bpm: prevState.bpm + parseInt(tick),
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="drum-machine">
          <Controls
            playing={this.state.playing}
            toggleTransport={this.toggleTransport}
            bpm={this.state.bpm}
            handleBpmChange={this.changeBpm}
            bpmTick={this.bpmTick}
          />
          <Steps
            pattern={this.state.kickPattern}
          />
          <DrumTrack
            set={this.setKick}
            pattern={this.state.kickPattern}
            drum="kick"
          />
          <DrumTrack
            set={this.setSnare}
            pattern={this.state.snarePattern}
            drum="snare"
          />
          <DrumTrack
            set={this.sethatC}
            pattern={this.state.hatCPattern}
            drum="closed hat"
          />
          <DrumTrack
            set={this.sethatO}
            pattern={this.state.hatOPattern}
            drum="open hat"
          />
        </div>
      </div>
    );
  }
}

export default App;
