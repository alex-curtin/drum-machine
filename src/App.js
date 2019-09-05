import React from 'react';
import './App.css';
import Tone from 'tone';
import Controls from './components/Controls';
import Steps from './components/Steps';
import DrumTrack from './components/DrumTrack';
import Footer from './components/Footer';
import { kick, snare, hatC, hatO, tom, crash } from './sounds/drums';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpm: 120,
      playing: false,
      kickSequencer: '',
      snareSequencer: '',
      hatCSequencer: '',
      loTomSequencer: '',
      hiTomSequencer: '',
      crashSequencer: '',
      kickPattern: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      snarePattern: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      hatCPattern: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      hatOPattern: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      loTomPattern: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      hiTomPattern: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      crashPattern: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    }
  }

  componentDidMount() {
    this.createKick(this.state.kickPattern);
    this.createSnare(this.state.snarePattern);
    this.createHatC(this.state.hatCPattern);
    this.createHatO(this.state.hatOPattern);
    this.createLoTom(this.state.loTomPattern);
    this.createHiTom(this.state.hiTomPattern);
    this.createCrash(this.state.crashPattern);
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
  createHatC = (beats) => {
    const hatCSeq = new Tone.Sequence(function (time) {
      hatC.triggerAttackRelease('8n', time)
    }, beats, '16n').start(0);
    this.setState({
      hatCSequencer: hatCSeq,
    })
  }

  //change closed hat pattern
  setHatC = (i) => {
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
  createHatO = (beats) => {
    const hatOSeq = new Tone.Sequence(function (time) {
      hatO.triggerAttackRelease('8n', time)
    }, beats, '16n').start(0);
    this.setState({
      hatOSequencer: hatOSeq,
    })
  }

  //change open hat pattern
  setHatO = (i) => {
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

  //create low tom sequencer
  createLoTom = (beats) => {
    const loTomSeq = new Tone.Sequence(function (time, note) {
      tom.triggerAttackRelease(note, '8n', time)
    }, beats, '16n').start(0);
    this.setState({
      loTomSequencer: loTomSeq,
    })
  }

  //change low tom pattern
  setLoTom = (i) => {
    const beats = [...this.state.loTomPattern];
    const loTomSeq = this.state.loTomSequencer;
    if (beats[i] === null) {
      beats[i] = 'C2';
      loTomSeq.add(i, 'C2')
    } else {
      beats[i] = null;
      loTomSeq.remove(i).add(i, null)
    }
    this.setState({
      loTomPattern: beats,
      loTomSequencer: loTomSeq,
    })
  }

  //create high tom sequencer
  createHiTom = (beats) => {
    const hiTomSeq = new Tone.Sequence(function (time, note) {
      tom.triggerAttackRelease(note, '8n', time)
    }, beats, '16n').start(0);
    this.setState({
      hiTomSequencer: hiTomSeq,
    })
  }

  //change high tom pattern
  setHiTom = (i) => {
    const beats = [...this.state.hiTomPattern];
    const hiTomSeq = this.state.hiTomSequencer;
    if (beats[i] === null) {
      beats[i] = 'C3';
      hiTomSeq.add(i, 'C3')
    } else {
      beats[i] = null;
      hiTomSeq.remove(i).add(i, null)
    }
    this.setState({
      hiTomPattern: beats,
      hiTomSequencer: hiTomSeq,
    })
  }

  //create crash sequencer
  createCrash = (beats) => {
    const crashSeq = new Tone.Sequence(function (time) {
      crash.triggerAttackRelease('8n', time)
    }, beats, '16n').start(0);
    this.setState({
      crashSequencer: crashSeq,
    })
  }

  //change snare pattern
  setCrash = (i) => {
    const beats = [...this.state.crashPattern];
    const crashSeq = this.state.crashSequencer;
    if (beats[i] === null) {
      beats[i] = true;
      crashSeq.add(i, true)
    } else {
      beats[i] = null;
      crashSeq.remove(i).add(i, null)
    }
    this.setState({
      crashPattern: beats,
      crashSequencer: crashSeq,
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
            order="one"
          />
          <DrumTrack
            set={this.setSnare}
            pattern={this.state.snarePattern}
            drum="snare"
            order="two"
          />
          <DrumTrack
            set={this.setHatC}
            pattern={this.state.hatCPattern}
            drum="closed hat"
            order="three"
          />
          <DrumTrack
            set={this.setHatO}
            pattern={this.state.hatOPattern}
            drum="open hat"
            order="four"
          />
          <DrumTrack
            set={this.setLoTom}
            pattern={this.state.loTomPattern}
            drum="low tom"
            order="five"
          />
          <DrumTrack
            set={this.setHiTom}
            pattern={this.state.hiTomPattern}
            drum="high tom"
            order="six"
          />
          <DrumTrack
            set={this.setCrash}
            pattern={this.state.crashPattern}
            drum="crash"
            order="seven"
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
