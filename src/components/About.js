import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // })
    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // let myStyle = {
    //     color: 'White',
    //     backgroundColor: 'black'
    // }

    let myStyle = {
      color: props.mode === 'dark'?'white':'black',
      backgroundColor: props.mode === 'dark'?'black':'white'
    }

    return (
    <div class = "container" style={myStyle}>
        <h1>About US </h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                  TextUtils gives you a way to analize your text quickly and efficiently. Be it word count of character count
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free To Use</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                TexxtUtils is a free character counter tool that provides character count and word count statistics for a given text. TextUtils reports the numver of words and character. Thus it is suaitable for writing for writing text with word/character limit.   
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                This word counter software works in any web browser such as chrome, firefox, internet explorer, safari, opera.
                It suits to count character in facebook, blog, books, excel document, pdf document, essays, etc.
              </div>
            </div>
        </div>
    </div>

    </div>
  )
}
