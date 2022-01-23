import React, { useState, Component } from "react";
import "./ComposeButton.css"
import AriaModal from "react-aria-modal";
import { get, post } from "../../utilities";


const ComposeButton = (props) => {
    const [ComposePopup, setComposePopup] = useState(false);
    const [Subject, setSubject] = useState("");
    const [Content, setContent] = useState("");

    const togglePopup = () => {
        if (ComposePopup) {
            setSubject("");
            setContent("");
            setComposePopup(false);
        } else {
            setComposePopup(true);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit && props.onSubmit({
            content: Content,
            subject: Subject
        });
        setSubject("");
        setContent("");
        togglePopup()
    };

    const Popup = ComposePopup ?
        <AriaModal titleId="ComposePost Popup" verticallyCenter={true} onExit={togglePopup}>
            <div className="modal">
                <header className="modal-header">
                    <h2 className="modal-title">Compose New Forum Post</h2>
                </header>
                <div className={"input-container"}>
                    <input type="text" placeholder="Subject" className="subject-container" 
                        onChange onChange={(event) => { setSubject(event.target.value); }}
                    value={Subject}/>
                    <textarea type="text" placeholder="Content" className="content-container" 
                        onChange onChange={(event) => { setContent(event.target.value); }}
                    value={Content}/>
                </div>
                <footer className="modal-footer">
                    <button onClick={handleSubmit}>Submit</button>
                </footer>
            </div>
        </AriaModal>
    : false;

    return (
        <>
        <div className={"composebutton-container"} onClick={togglePopup}>+</div>
        {Popup}
        </>
    );
};

const NewPost = (props) => {
    const addPost = (value) => {
        if (value.subject === "" || value.content === "") {
            return
        }
        const body = {
            content: value.content,
            subject: value.subject
        };
        post("/api/newForumPost", body).then((post) => {
            // display this story on the screen
            props.addNewPost(post);
        });
    };

    return <ComposeButton onSubmit={addPost} />;
};


export { NewPost};