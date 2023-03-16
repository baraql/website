/* eslint-disable react/jsx-no-comment-textnodes */
import Draggable from 'react-draggable';
import './Start.css';
import React from "react";
import Console from "./Console"
import face from './assets/face.png';
import { Link } from 'react-router-dom';
import './rainbow.css'

function Start() {
    return (
        <div class='rainbowWrapper'>
            <div class='logoWrapper'>
                <Link to='/' style={{ color: 'white' }} className="logo"> baraq </Link>
            </div>
            <Draggable style={{ position: 'absolute' }} defaultPosition={{ x: window.innerWidth / 5, y: window.innerHeight * 0.30 }}>
                <div className="textedit-wrapper code-font">
                    <div className="flex-row-container top-console-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div style={{ marginLeft: '0.3vw' }}>
                        <p>/*</p>
                        <p>* I'm interested in mobile application</p>
                        <p>* development, fintech,</p>
                        <p>* and artificial intelligence.</p>
                        <p>*/</p>
                        <br></br>
                        <p>><a href="mailto:baraq@nyu.edu" target="_blank" rel="noopener noreferrer">baraq@nyu.edu</a></p>
                        <p>><a href="https://linkedin.com/in/baraq" target="_blank" rel="noopener noreferrer">linkedin.com/in/baraq</a></p>
                        <p>><a href="https://github.com/baraql" target="_blank" rel="noopener noreferrer">github.com/baraql</a></p>
                    </div>
                </div>
            </Draggable>

            <Draggable defaultPosition={{ x: window.innerWidth / 2.3, y: -(window.innerWidth * 0.21) + window.innerHeight * 0.5 }}>
                <div className="console-wrapper">
                    <Console />
                </div>
            </Draggable>

            <Draggable style={{ position: 'absolute' }} defaultPosition={{ x: window.innerWidth / 2.3, y: -(window.innerWidth * 0.44) + window.innerHeight * 0.125 }}>
                <img src={face} className="no-drag-image face-image"
                    alt="Professional headshot of Baraq Lipshitz"
                />
            </Draggable>

        </div >
    );
}

export default Start;