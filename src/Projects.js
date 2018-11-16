import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, Button, CardBody, CardTitle, CardText, Col } from 'reactstrap';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv('data/projects.csv').then((d) => {
            this.setState({ data: d });
        });
    }
    render() {
        console.log(this.state.data)
        return <div className="container">
            <h1>Projects</h1>
            { /* Render a card for each element in your data */}
            {this.state.data.map((d, i) => {
                return (
                    <Card key={"project" + i}>
                        <CardBody>
                            <CardTitle><a target="_blank" href={d.link}>{d.name}</a></CardTitle>
                            <CardText>{d.description}</CardText>
                        </CardBody>
                    </Card>
                )
            })}
            <p className="cite"> *The animation was not created by me. I got the code to do this from<a target="_" href="https://codepen.io/JTParrett/pen/hktzu">CodePen.</a></p>
            <div className="cube">
                <img className="luigi" src="https://vignette.wikia.nocookie.net/nintendo/images/e/ec/Paper_Luigi_2.png/revision/latest?cb=20171111011157&path-prefix=en" alt="luigi"></img>
            </div>
        </div>
    }
}