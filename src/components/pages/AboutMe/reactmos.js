import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import ReactMarkdown from 'react-markdown'
import DOMPurify from 'dompurify';
import emojisObject from './emojis';

import { projectsData } from "./data";
import "./github-markdown.css"
import "./Projects.css"

function Reactmos({
    userURL,
    arrayOfRepos, 
}) {

    const [content, setContent] = useState("");

  // De forma similar a componentDidMount y componentDidUpdate
useEffect(() => {
    console.log(userURL);

    getRepos(userURL)

    async function getRepos(userURL) {
        const response = await fetch(userURL);

        const result = await response.json();

        // Initialization of repositories object
        let reposObject = new Object();
        // Initialization of set for keys
        let reposNameSet = new Set();

        // Recorring all the repositories and creating the object
        // key = repoName || value = rawURL
        let repoName = ""
        let rawURL = ""
        for (let i = 0; i < result.length; i++) {
            //console.log(result[i])

            repoName = result[i].name;
            //console.log(repoName)

            // Modifying the URL to for accessing to the raw content of the README.md
            rawURL = result[i].html_url + "/master/README.md";
            rawURL = [rawURL.slice(0, 8), "raw.", rawURL.slice(8)].join("");
            rawURL = rawURL.replace("github", "githubusercontent");
            //console.log(rawURL)

            reposObject[repoName] = rawURL;
            reposNameSet.add(repoName);
        }

        // Comprobate if each element on arrayOfRepos is in the reposNameSet
        for (let item of arrayOfRepos) {
            if (reposNameSet.has(item)) {
                //  if is in, add the onClick function to the fetchReadme
                console.log(`"${item}" exist`);
                fetchReadme(reposObject[item]);
            } else {
                console.log(`The "${item}" does not exist in your github profile`);
            }
        }
    }

    async function fetchReadme(url) {
        const response = await fetch(url);
        let dirty = ""
        response.text().then(function(text) {
            // In this line we use marked library to parse the MD to HTML
            //let dirty = marked(text);
            
            // Calling function to replace all the icon syntax of github with the respective icon image
            dirty = replaceIcons(text);
            
            // In this line we use DOMPurify library to purify the HTML and show it correctly
            let clean = DOMPurify.sanitize(dirty);
            //document.getElementsByClassName("readmosContent")[0].innerHTML = clean;
            console.log(clean);
            //setContent(clean);
        });
    }

    function replaceIcons(dirty) {
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
                let emojiHTML = `<img className="githubEmoji" src="${emojisObject.emojisObject[word]}"></img>`;
                dirtyCopy = dirtyCopy.replace(/\:[a-zA-Z_]*\:/, emojiHTML);
            }
        }
        //console.log(dirtyCopy);
        return dirtyCopy;
    }

});


    return(
        <>
        {
            arrayOfRepos.map((repoName, i) => {
                return (
                    <span className="repo">
                        <button className={repoName}></button>
                    </span>
                )
            })
        }
        <ReactMarkdown className="markdown-body">{}</ReactMarkdown>
        </>
    )
}

export default Reactmos;