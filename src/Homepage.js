import React, { Component } from 'react';

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to my website</h1>
                <p>The about page has information about me on it.
                </p>
                <p>The projects page has information about various 
                    projects I took part in. 
                </p>
                <p>I hope you like what you see!</p>
                <img id="all" src="https://spaceplace.nasa.gov/review/sunburn/sunburn1.en.png" alt="sun"></img>
            </div>
        )
    }
}

export { Homepage };