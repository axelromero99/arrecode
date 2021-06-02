import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './TheWorld.css';

import arrowDown from "./images/arrowdown.png";

import AlgoColL1 from "./images/algoColL1.svg";
import AlgoColL2 from "./images/algoColL2.svg";
import AlgoColR1 from "./images/algoColR1.svg";
import AlgoColR2 from "./images/algoColR2.svg";

import Tree from "./images/tree.svg";
import Extra1 from "./images/extra1.png";
import Extra2 from "./images/extra2.png";
import Extra3 from "./images/extra3.png";
import Extra4 from "./images/extra4.png";

//import ImageFadeIn from "react-image-fade-in";


const TheWorld = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    function handleScrollOne() {
        window.scroll({
            top: 600,
            left: 0,
            behavior: 'smooth',
        });
    }

    return (
        <div>
            <div className="primero">
                <div className="wrapper">
                    <section className="content">
                        <div className="columns">
                            {/* 1 non visible*/}
                            <div className="main">
                                <div className="if" style={{ transform: `translateY(-${offsetY * 1}px)` }}>if</div>
                            </div>
                            {/* 2 non visible*/}
                            <div className="main">
                                <div className="openPar" style={{ transform: `translateY(-${offsetY * 1}px)` }}>(</div>
                            </div>
                            {/* 3 */}
                            <div className="main">
                                <div className="theWorldContainer" id={offsetY > 1000 ? 'hidden' : 'shown'}>

                                    <div className="theWorld" style={{ transform: `translateY(${offsetY * 1}px)` }}>The world does </div>

                                    <div style={{ transform: `translateY(${offsetY * 1}px)` }}><span className="NOT" >NOT</span> </div>

                                    <div className="theWorld" style={{ transform: `translateY(${offsetY * 1}px)` }}><i>[code]</i> by itself</div>

                                </div>
                            </div>
                            {/* 4 non visible*/}
                            <div className="main">
                                <div className="closePar" style={{ transform: `translateY(-${offsetY * 1}px)` }}>)</div>
                            </div>
                            {/* 5 non visible*/}
                            <div className="main">
                                <div className="colons" style={{ transform: `translateY(-${offsetY * 1}px)` }}>:</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="segundo">

                {/* vacio, se superpone el contenido de abajo */}

            </div>
            <div className="tercero">
                <div className="wrapper">
                    <section className="content">
                        <div className="columns">
                            {/* 1 */}
                            <div className="main">
                                <div className="if" style={{ transform: `translateY(-${offsetY * 0.8}px)` }}>if</div>
                            </div>
                            {/* 2 */}
                            <div className="main">
                                <div className="openPar" style={{ transform: `translateY(-${offsetY * 0.8}px)` }}>(</div>
                            </div>
                            {/* 3 */}
                            <div className="main">

                            </div>
                            {/* 4 */}
                            <div className="main">
                                <div className="closePar" style={{ transform: `translateY(-${offsetY * 0.8}px)` }}>)</div>
                            </div>
                            {/* 5 */}
                            <div className="main">
                                <div className="colons" style={{ transform: `translateY(-${offsetY * 0.8}px)` }}>:</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="cuarto">

                <div className="imDeveloper">
                    <div>I'm a</div>
                    <div>Fullstack Web</div>
                    <div>&&</div>
                    <div>Software</div>
                    <div id="developer" style={{ transform: `translateY(290px) translateY(-${offsetY * 0.45}px)` }}>{"{DEVELOPER}"}</div>
                </div>

                <div className="wrapper">
                    <section className="content">
                        <div className="columns">
                            {/* 1 vacio*/}
                            <div className="main">
                                <div style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>  </div>
                            </div>
                            {/* 2 */}
                            <div className="main" title="Do you know how to invert a binary Tree?">

                                <div className="codeIt" style={{ transform: `translateY(-${offsetY * 1.6}px)` }}>I can <i>[code]</i> it for You.</div>
                                <div className="tree"  style={{ transform: `translateY(-${offsetY * 1.45}px)` }}><img src={Tree} title="Do you know how to invert a binary Tree?"></img></div>

                            </div>
                            {/* 3 vacio*/}
                            <div className="main">
                                <div style={{ transform: `translateY(-${offsetY * 0.1}px)` }}></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className="quinto">
                <div className="pleaseSeeMy">
                    <div>Please, be my guest &&</div>
                    <div>watch out my work</div>
                    <Link to="/Projects"><button className="botonProyectos" type="button">Projects</button></Link>

                    
                </div>
            </div>

            <div className="sexto">
                {/* algo columns */}
                <div className="wrapper">
                    <section className="content">
                        <div className="columns">
                            <div className="main algoColumnMain">
                                <div style={{ transform: `translateY(-${offsetY * 0.2}px)` }} id="left1zindex">
                                    <div className="algoColumn left1" >
                                        <img src={AlgoColL1}></img>
                                    </div>
                                </div>

                                <div style={{ transform: `translateY(${offsetY * 0.4}px)` }} id="left2zindex">
                                    <div className="algoColumn left2" >
                                        <img src={AlgoColL2}></img>
                                    </div>
                                </div>
                            </div>
                            <div className="main">{/* vacio */}</div>
                            <div className="main algoColumnMain">
                                <div style={{ transform: `translateY(-${offsetY * 0.2}px)` }} id="right1zindex">
                                    <div className="algoColumn right1">
                                        <img src={AlgoColR1}></img>
                                    </div>
                                </div>

                                <div style={{ transform: `translateY(${offsetY * 0.3}px)` }} id="right2zindex">
                                    <div className="algoColumn right2">
                                        <img src={AlgoColR2}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>

            <div className="floating septimo" title="JSX">

                <img  style={{ transform: `translateY(-${offsetY * 0.1}px)` }} src={Extra1}></img >

            </div>

            <div className="octavo floating-slow" title="Multidimensional Array">

                <img   src={Extra2}></img >

            </div>

            <div className="noveno floating-slow" title="Database">

                <img  style={{ transform: `translateY(${offsetY * 0.2}px)` }} src={Extra3}></img >

            </div>

            <div className="decimo floating" title="Big O">

                <img  style={{ transform: `translateY(-${offsetY * 0.1}px)` }} src={Extra4}></img >

            </div>
        </div>


    )
}

export default TheWorld
