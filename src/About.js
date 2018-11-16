import React, { Component } from 'react';
import { Card, Button, CardBody, CardTitle, CardText, Col } from 'reactstrap';

export class About extends Component {
    render() {
        return(
            <div>
                <h1>About me</h1>
                <p>My name is Saam Pashai and I am a senior in Informatics at UW.
                    My interests in school include software development, project 
                    managment, and data science. 
                </p>
                <p>
                    I have interests out of school too. My favorite sports teams are:
                    <ul>
                        <li>Seattle Seahawks</li>
                        <li><strike>Seattle Sonics</strike> <i>no longer a team tho :(</i></li>
                        <li>Seattle Mariners</li>
                        <li>Arsenal FC</li>
                    </ul>
                    Apart from sports, I really like animals, music, and yoga!
                </p>
                <p>
                    My favorite animals:
                    <div className="text-center">
                        <img className="animal" src="https://polarbearsinternational.org/media/3269/mnm-1022.jpg" alt="polarbear"></img>
                        <img className="animal" src="https://media.mnn.com/assets/images/2018/02/AdorableBlackCatLookingAtCameraFromSofa.jpg.653x0_q80_crop-smart.jpg" alt="cat"></img>
                        <img className="animal" src="http://tigers.panda.org/wp-content/uploads/Image02-892x1024.jpg" alt="tiger"></img>
                    </div>
                    
                </p>
               
            </div>
        )
    }
}