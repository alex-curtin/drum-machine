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
  },
  volume: 5,
}).toMaster();

export const snare = new Tone.NoiseSynth({
  noise: {
    type: 'pink',
    playbackRate: 0.4,
  },
  envelope: {
    attackCurve: "exponential",
    attack: 0.001,
    decay: 0.3,
    sustain: 0,
    release: 0.4,
  },
  volume: 8,
}).toMaster();

// export const hat = new Tone.NoiseSynth({
//   noise: {
//     type: 'white',
//   },
//   envelope: {
//     attack: 0.001,
//     decay: 0.1,
//     sustain: 0,
//   },
//   volume: -10,
// }).toMaster();

export const hatC = new Tone.MetalSynth({
  frequency: 350,
  envelope: {
    attack: 0.001,
    decay: 0.3,
    release: 0.5
  },
  harmonicity: 3.1,
  modulationIndex: 42,
  resonance: 8000,
  octaves: 0.5,
  volume: -5,
}).toMaster();

export const hatO = new Tone.MetalSynth({
  frequency: 350,
  envelope: {
    attack: 0.001,
    decay: 1.5,
    release: 1.5,
  },
  harmonicity: 4.1,
  modulationIndex: 92,
  resonance: 4000,
  octaves: 0.5,
  volume: -5,
}).toMaster();