import React from 'react';

export default function Controls(props) {
  return (
    <div className="controls">
      <div
        className="control-button"
        onClick={props.toggleTransport}>
        {props.playing ? 'stop' : 'start'}
      </div>
    </div >
  )
}
