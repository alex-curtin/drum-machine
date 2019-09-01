import React from 'react';

export default class DrumTrack extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="drum-track">
        <div className="track-name">{this.props.drum}</div>
        {this.props.pattern.map((beat, i) => (
          <div
            key={i}
            className={'step ' + (beat ? 'active ' : 'inactive ') + this.props.drum}
            onClick={() => this.props.set(i)}
          >
          </div>
        ))}
      </div>
    )
  }
}