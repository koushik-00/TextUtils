import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.alert("Converted to Uppercase", "success");
    };
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.alert("Converted to Lowercase", "success");
    };
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.alert("Text cleared", "success");
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState('');

    return (
        <>
            <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>Convert to Lowcase</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>
            <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
                <h1>Your Text summary</h1>
                <p>{text.split(' ').length} words, {text.length} chars</p>
                <p>{0.008 * text.split(' ').length } Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
