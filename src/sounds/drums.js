import Tone from 'tone';

const dist = new Tone.Distortion({
  distortion: 0.3,
  oversample: "2x",
}).toMaster();

// export const kick = new Tone.Synth({
//   oscillator: {
//     type: 'sine',
//   },
//   envelope: {
//     attack: 0.0001,
//     decay: 0.2,
//     sustain: 0.3,
//     release: 0.2
//   },
//   detune: 125,
// }).toMaster();

export const kick = new Tone.MembraneSynth({
  pitchDecay: 0.05,
  octaves: 10,
  oscillator: {
    type: 'sine'
  },
  envelope: {
    attack: 0.001,
    decay: 1,
    sustain: 0.01,
    release: 1.4,
    attackCurve: 'cosine'
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