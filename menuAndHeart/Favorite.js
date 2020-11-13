import React, { Component } from 'react'

class Favorite extends Component {
    state = {
        hasBeenFavorited: false
    }

    toggleFavorited = () => {
        this.setState(prevState => {
            return {
                hasBeenFavorited: !prevState.hasBeenFavorited
            }
        })
    }

    render() {
        return (
            <div>
                <h3>Select the heart to favorite!</h3>
                <h1>
                    <span 
                    onClick={this.toggleFavorited}>
                    {this.state.hasBeenFavorited ? "💜" : "♡"}
                    </span>
                </h1>
            </div>
        )
    }
}

export default Favorite