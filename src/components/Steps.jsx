import React from 'react'

export default function Steps(props) {
  return (
    <div>
      <div className="step-nums">
        <div className="track-name">step</div>
        {props.pattern.map((beat, i) => (
          <div
            key={i}
            className='num'
          >{i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}
