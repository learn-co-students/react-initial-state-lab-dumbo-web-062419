// your Bomb code here!
// your ImageSlider code here!
import React from 'react';

export default class Bomb extends React.Component {
    state = {
        secondsLeft: this.props.initialCount
    }

    render() {
        return (
            this.state.secondsLeft == 0 ? <div>Boom!</div> : <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        );
    }
}