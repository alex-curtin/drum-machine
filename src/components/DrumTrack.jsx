import React from 'react';

export default class DrumTrack extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <div className="drum-track">
        <p>{this.props.drum}</p>
        {this.props.pattern.map((beat, i) => (
          <div
            key={i}
            className={'step ' + (beat ? 'active' : 'inactive')}
            onClick={() => this.props.set(i)}
          >{i}
          </div>
        ))}
      </div>
    )
  }
}