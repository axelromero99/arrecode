
import React from 'react';

import { projectsData } from "./data";
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'

import {
    FaGithub
} from "react-icons/fa";

import {
    AiFillPlayCircle} from "react-icons/ai";

import './Projects.css';

class Projects extends React.Component {

    state = {
        posts: [],
        open: false,
        selectedPost: null, // Keep track of the selected post
    };


    onOpenModal = (i) => {
        this.setState({
            open: true,
            selectedPost: i, // When a post is clicked, mark it as selected
        });

        let elemento = document.getElementById("root");
        elemento.classList.add("blurred");

    };


    componentDidMount() {
        this.setState({
            posts: projectsData.slice(0, 18)
        });

    }

    
    onCloseModal = () => {
        this.setState({ open: false });

        let elemento = document.getElementById("root");
        elemento.classList.remove("blurred");
    };

    renderPosts = () => {
        return this.state.posts.map((post, i) => {
            return (
                <span>

                    <div className="markdown-body readmosContent"></div>

                    <div
                        className="post flex-item"
                        key={post.id}
                        style={{ textAlign: "center" }}
                    // Pass the id of the clicked post
                    >
                        <div className={post.autors ? "autor" : "invisible"}>
                    <h5>{
                            post.autors.map((tag, i) => {
                                return (
                                    <span className="tag">
                                        {tag}
                                    </span>
                                )
                            })
                        }
                        </h5>
                    </div>
                        <div className="post1">
                            <img src={post.image} alt=""></img>
                        </div>
                        
                        <div className="post2">
                            <h4 style={{ padding: `3px`, color: "#E700A6" }}>{post.name}</h4>
                        </div>

                        <div className="post3">
                            <h5 style={{ padding: `10px`, textAlign: "justify", textJustify: "inter-word",  textAlign: "center" }}>{post.description}</h5>
                        </div>

                        <div className="post4" style={{ width: "100%" }}>
                            <span className="tag">
                                {post.technologies[0]}
                            </span>
                            <span className="tag">
                                {post.technologies[1]}
                            </span>
                            <br />
                            <span className={post.technologies[2] ? "tag" : "invisible"}>
                                {post.technologies[2]}
                            </span>
                            <span className={post.technologies[3] ? "tag" : "invisible"}>
                                {post.technologies[3] ? `+` : ""}
                            </span>
                        </div>

                        <div className="post5">
                            <button className="viewProjectBtn" onClick={() => this.onOpenModal(i)}>View Project</button>
                        </div>
                    </div>

                </span>



            );
        });
    };

    renderModal = () => {
        // Check to see if there's a selected post. If so, render it.
        if (this.state.selectedPost !== null) {
            const post = this.state.posts[this.state.selectedPost];
            return (
                <div
                    style={{ textAlign: "center" }} 
                >

                    <h1 className="tituloModal">{post.name}</h1>
                    <h3 className="descripcionModal">{post.description}</h3>
                    <img src={post.image} style={{ marginBottom: "20px", border: "solid 5px" }}></img>

                        <h5>
                        Author/s: <br></br>
                        {
                            post.autors.map((tag, i) => {
                                return (
                                    <span className="tag">
                                        {tag}
                                    </span>
                                )
                            })
                        }
                        </h5>


                    <div style={{ width: "100%", marginBottom: "20px" }}>
                    <h5>
                        Tags: <br></br>
                        {
                            post.technologies.map((tag, i) => {
                                return (
                                    <span className="tag">
                                        {tag}
                                    </span>
                                )
                            })
                        }
                    </h5>
                    </div>

                    <p className="descripcionLargaModal" >{post.description_full}</p>

                    <div style={{ marginBottom: "10px"}} className={post.aclaration ? `aclaracion` : "invisible"}>
                        <i>
                            Aclaration: {post.aclaration}</i>

                    </div>

                    <div style={{ marginBottom: "10px"}} className={post.features[0] ? `features` : "invisible"}>
                        <ul><h5>Features:</h5>
                        {
                            post.features.map((feature, i) => {
                                return (
                                    <li >•
                                        {feature}
                                    </li>
                                )
                            })
                        }
                            </ul>

                    </div>

                    <div style={{ marginBottom: "10px"}} className={post.links[0] !== "" ? "listaLinks" : "invisible"}>
                    <h5>Links:</h5>
                        <ul>
                            {
                                post.links.map((link, i) => {
                                    return (
                                        <li>•
                                            <a href={link[0]} target="_blank" rel="noreferrer" style={{ color: "#E700A6" }}>{link[1]}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className={post.images[0] !== "" ? "listaLinks" : "invisible"}>
                        <h5>Images:</h5>
                        <ul>
                            {
                                post.images.map((image, i) => {
                                    return (
                                        <li>•
                                            <a href={process.env.PUBLIC_URL + image[0]} target="_blank" rel="noreferrer" style={{ color: "#E700A6" }}>{image[1]}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="botonesProyectos">

                        <button className={post.github ? `viewProjectBtn` : "invisible"}><a
                            className="social-icon-link"
                            href={post.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Github"
                        >
                            <FaGithub size={20} /> Github

                    </a></button>

                        <button className={post.live_demo ? `viewProjectBtn` : "invisible"}><a
                            className="social-icon-link"
                            href={post.live_demo}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="liveDemo"
                        >
                            <AiFillPlayCircle size={20}/>
                            Live
                    </a></button>
                    </div>
                </div>
            );
        }
    };

    render() {
        const { open } = this.state;
        return (

            <div className="contenido">


                <Container className="flexbox">{this.renderPosts()}</Container>
                <br style={{ clear: "both" }} />

                <Modal show={open} onHide={this.onCloseModal} center className="centered" id="myModal">

                    <Modal.Header closeButton className="botonCierreModal">
                    </Modal.Header>

                    <div style={{ overflowY: "auto" }}>{this.renderModal()}</div>
                </Modal>
            </div>

        );
    };
};

export default Projects;