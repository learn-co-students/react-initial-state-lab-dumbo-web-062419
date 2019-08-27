import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render() {
        if (this.state.secondsLeft == 0) {

        }

        const returnMessage = this.state.secondsLeft == 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        return(
            <h1>{returnMessage}</h1>
        )
    }
}

export default Bomb;
