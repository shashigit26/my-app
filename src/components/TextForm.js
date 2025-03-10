import React, { useState } from 'react'

export default function TextForm(props) {

    /*   States syntax */
    const [text, setText] = useState("Enter the value")

    // useState example on button click will update the date 
    //To uppercase 
    const handelUpClick = () => {
        // console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("converted to uppercase!",'success')

    }
    //To lowercase 
    const handelLowClick = () => {
        console.log("lowercase was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("converted to Lowercase!",'success')
    }
    //clear
    const handelClearClick = () => {
        let newText = ' '
        setText(newText)
    }
    //captalized
    const handelCapClick = () => {
        let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
        setText(newText)
        props.showAlert("converted to captlized!",'success')
    }
    //copy
    const handelCopyClick = () => {
        let coText = document.getElementById('myBox')
        coText.select();
        navigator.clipboard.writeText(coText.value)

    }
    //Extra spaces
    const handelSpaceClick = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))


    }

    //Onchange event 
    const handelOnChange = (event) => {
        console.log("handelOnChange")
        setText(event.target.value)
    }

    return (
        <>

            <div style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>

                <h1 style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>{props.heading}</h1>
                <div className="mb-3 my-3"  >
                    <textarea className="form-control" id="myBox" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                     color: props.mode === 'dark' ? 'white' : '#042743' }} rows="5" onChange={handelOnChange} value={text}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handelUpClick} >convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handelLowClick}>convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handelClearClick}>clear</button>
                <button className="btn btn-primary mx-2" onClick={handelCapClick}>Captalized</button>
                <button className="btn btn-primary mx-2" onClick={handelCopyClick}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handelSpaceClick}>Remove Space</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').filter((element) => { return element.length !== 0 }).length} words and {text.length} charcters</p>
                <p>{0.008 * text.split(' ').length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter a something to preview it"}</p>

            </div>
        </>
    )
}
