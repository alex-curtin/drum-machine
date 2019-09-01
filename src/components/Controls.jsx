import React from 'react';

export default function Controls(props) {
  return (
    <div className="controls">
      <div
        className="control-button"
        onClick={props.toggleTransport}>
        {props.playing ? 'stop' : 'start'}
      </div>
      <div className="bpm">
        <p>bpm</p>
        <div className="bpm-control">
          <button
            className="bpm-tick"
            onClick={props.bpmTick}
            value="-1"
          >-</button>
          <input
            type="number"
            value={props.bpm}
            onChange={props.handleBpmChange}
          ></input>
          <button
            className="bpm-tick"
            onClick={props.bpmTick}
            value="1"
          >+</button>
        </div>
      </div>
    </div >
  )
}
