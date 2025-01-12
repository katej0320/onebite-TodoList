import "./Editor.css";
import { useState, useRef } from 'react';

const Editor = ({ onCreate }) => {

    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        if (content === ""){
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }

    const onKeyDown = (e)=>{
        if(e.keyCode === 13){
            onSubmit();
        }
    }

    return (
        <div className="Editor">
            <input 
            onKeyDown={onKeyDown}
            ref={contentRef}
            value={content} onChange={onChangeContent} placeholder="new Todo..." />
            <button onClick={onSubmit}>add</button>
        </div>
    );
};

export default Editor;