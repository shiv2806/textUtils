import React,{useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('')

    const handleUpclick =() => {
        console.log('Uppercase was clicked')
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Text convert to UPPERCASE','success')
    }
    const handleDownclick = () => {
        let newText2 = text.toLowerCase()
        setText(newText2)
        props.showAlert('Text convert to lowercase','success')

    }

    const handleOnchange = () => {
        console.log('On change');
        // setText( event.target.value )
    }


  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white': '#042743'}}>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" cols='30' rows="8" style={{backgroundColor: props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'black': '#042743'}}></textarea>
                
                <button className='btn btn-dark mx-1' onClick={handleUpclick}>Convert to UPPERCASE</button>
                <button className='btn btn-dark mx-1' onClick={handleDownclick}>Convert to lowercase</button>
            </div>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white': '#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008* text.split(' ').length } minutes to Read</p>
            <h2>preview</h2>
            <p>{text.length>0?text:'Enter something in above textbox to preview it here'}</p>
        </div>

    </>
      )
}
