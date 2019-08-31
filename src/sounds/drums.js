import Tone from 'tone';

export const kick = new Tone.Synth({
  oscillator: {
    type: 'sine',
  },
  envelope: {
    attack: 0.001,
    decay: 0.2,
    sustain: 0.2,
    release: 0.2
  }
}).toMaster();

export const snare = new Tone.NoiseSynth({
  noise: {
    type: 'pink',
  },
  envelope: {
    attack: 0.0001,
    decay: 0.3,
    sustain: 0,
  },
  volume: 5,
}).toMaster();

export const hat = new Tone.NoiseSynth({
  noise: {
    type: 'white',
  },
  envelope: {
    attack: 0.001,
    decay: 0.1,
    sustain: 0,
  },
  volume: -12,
}).toMaster();