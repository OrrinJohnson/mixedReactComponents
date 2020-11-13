import React, { Component } from 'react'

class Menu extends Component {
    state = {
        show: true
    }

    toggleMenu = () => {
        this.setState(prevState => {
            return {
                show: !prevState.show
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleMenu}>
                    {this.state.show ? "Hide" : "Show"}
                    Menu
                </button>
                <nav style={{display: this.state.show ? "block" : "none"}}>
                    <h6>You are signed in as anonymous</h6>
                    <a>View your profile</a>
                    <a>Your Posts</a>
                    <a>Other's Posts</a>
                    <a>Favorites</a>
                </nav>
            </div>
        )
    }
}

export default Menu