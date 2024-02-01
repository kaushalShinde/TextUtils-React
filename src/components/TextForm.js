
import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);

        props.showAlert("Converted to UpperCase!", "success");
    }
    const handleLoClick = () => {
        // console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleFirstUpClick = () => {
        let newText = "";

        let newArray = text.split(" ");
        newArray.forEach((word, index, array)=>{
            let newWord = "";
            newWord += word.slice(0, 1).toUpperCase();
            newWord += word.slice(1, word.length).toLowerCase();
            newWord += " ";

            newText += newWord;
        })
        newText.trim();
        setText(newText);

        
        props.showAlert("Converted First Character to Uppercase!", "success");
    }

    const handleClearTextClick = () => {
        setText('');

        props.showAlert("Text Cleared!", "success");
    }
    
    const handleTrimExtraSpaces = () => {
        // let newText = text;
        // let result = text.replace(/^\s+|\s+$/gm,'');
        let result = text.replace(/\s\s+/g, ' ');

        setText(result);

        props.showAlert("Extra Space Trimed Successfully!", "success");
    }
    const handleOnChange = (event) => {
        // console.log("on change")
        // console.log(text);

        setText(event.target.value)   
    }
    

    const [text, setText] = useState(' ');
    // text = "new text";  // wrong
    // setText("jdasg");   // right way

    return (
    <>
        <div className="contianer" style={{color: props.mode==='light'?'black':'white'}}>
            <h1> {props.heading} </h1>
            <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>

            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert To UpperCase </button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}> Convert To LowerCase </button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleFirstUpClick}> Convert First Words to UpperCase </button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleTrimExtraSpaces}> Trim Extra Spaces </button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearTextClick}> Clear Text </button>
        </div>

        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words & {text.length} characters</p>
            <p> {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes required to read above paragraph </p>

            <h2>Preview</h2>
            <p> {text.length>0?text:"Enter Something In TextBox"} </p>
        </div>
    </>
  )
}