
import React from 'react';

import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import parse from 'html-react-parser';
import marked from 'marked';

import emojisObject from './emojis';
import "./github-markdown.css"

import { projectsData } from "./data";

import './Projects.css';

class Projects extends React.Component {

    state = {
        posts: [],
        open: false,
        selectedPost: null, // Keep track of the selected post
        arrayOfRepos : [],
        contentReadmos: "",

    };


    onOpenModal = (i, post) => {

        this.fetchReadme(post.github_readmos,i)

        let elemento = document.getElementById("root");
        elemento.classList.add("blurred");

    };
    
    onCloseModal = () => {
        this.setState({ open: false });
        let elemento = document.getElementById("root");
        elemento.classList.remove("blurred");
    };

    componentDidMount() {
        this.setState({
            posts: projectsData.slice(0, 18)
        });
    }


    async fetchReadme(url,i) {

        const response = await fetch(url);
        let dirty = ""
        let clean = ""

        await response.text().then(function(text) {

            // In this line we use marked library to parse the MD to HTML
            dirty = marked(text);

            // Calling function to replace all the icon syntax of github with the respective icon image
            dirty = replaceIcons(dirty);
            
            clean = parse(dirty);

            return clean;
        });

        this.setState({
            open: true,
            selectedPost: i, // When a post is clicked, mark it as selected
            contentReadmos: clean
        });

        function replaceIcons (dirty)  {
            const regexp = RegExp(":[a-zA-Z1-9_+-]*:", "g");
            let dirtyCopy = dirty;
            let word;
            let ocurrency;
    
            while ((ocurrency = regexp.exec(dirty)) !== null) {
                //console.log(`Found ${ocurrency[0]} start=${ocurrency.index} end=${regexp.lastIndex}.`);
    
                // Delete the : of the word
                word = ocurrency[0].slice(1, -1);
                //console.log(word)
                //console.log(emojisObject.emojisObject)
                // Compare if the emoji syntax is on the emojisObject
                if (Object.keys(emojisObject.emojisObject).includes(word)) {
                    let emojiHTML = `<img class="githubEmoji" src="${emojisObject.emojisObject[word]}"></img>`;
                    dirtyCopy = dirtyCopy.replace(/\:[a-zA-Z_]*\:/, emojiHTML);
                }
            }
            //console.log(dirtyCopy);
            return dirtyCopy;
        }
    }

    

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
                            post.autors.map((autor, i) => {
                                return (
                                    <span className="tag">
                                        {autor}
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
                            <button className="viewProjectBtn" onClick={() => this.onOpenModal(i,post)}>View Project</button>
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

                    <p className="descripcionLargaModal markdown-body">{this.state.contentReadmos}</p>

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

                <Modal show={open} onHide={this.onCloseModal}  className="centered" id="myModal">

                    <Modal.Header closeButton className="botonCierreModal">
                    </Modal.Header>

                    <div style={{ overflowY: "auto" }}>{this.renderModal()}</div>
                </Modal>
            </div>

        );
    };
};

export default Projects;