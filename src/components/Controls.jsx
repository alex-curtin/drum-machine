import React from 'react'

export default function Controls(props) {
  return (
    <div>
      <button onClick={props.start}>start</button>
      <button onClick={props.stop}>stop</button>
    </div>
  )
}
