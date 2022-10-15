import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uppercase Was Clicked");
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase Was Clicked");
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  }
  const handleOnChange = (event) =>
{
  // console.log("on change");
  setText(event.target.value);
}
const handleCopy = ()=>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copy", "success");

}
const [text, setText] = useState('');
  return (
    <>
<div className='container' style={{color :props.mode==='dark'?'white':'#021d45'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3 ">
      
            <textarea className="form-control" value = {text} style={{backgroundColor :props.mode==='dark'?'#021d45':'white',color :props.mode==='dark'?'white':'#021d45'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2  " onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
        
</div>
<div className="container my-3" style={{color :props.mode==='dark'?'white':'#021d45'}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length } minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in the textbox to preview it"}</p>

</div>
</>
  )
}
