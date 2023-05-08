import React from 'react'
import styled from 'styled-components'
const Func=styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;

`

const But=styled.button`
margin:20px;
background-color:#61dafb;
color:${props=>props.theme===true?"white":"#282c34"};
font-weight:700;
width:200px;
border:none;
padding:20px;
border:5px solid ${props=>props.theme===true?"white":"#282c34"};
font-size:25px;
transition: background 1s;
transition: border 1s;
transition:all 1.5s ease;

&:hover{
  border:5px solid #61dafb;
  background-color:white;
  color:#61dafb;
}`

function Button(props) {
  return (
    <Func>{(props.status===0)?
        <But theme={props.theme} onClick={props.start}>Start</But>:""}

        {(props.status===1)?
        <div>
        <But theme={props.theme} onClick={props.pause}>Pause</But>
        {/* <But onClick={props.start}>Time-stamp</But> */}
        </div>
        :""}
        {(props.status===2)?
        <div>
        <But theme={props.theme}  onClick={props.resume}>Resume</But>
        </div>
        :""}
        
        <But theme={props.theme}  onClick={props.timestamp}>Time-stamp</But>
        <But theme={props.theme}  onClick={props.restart}>Restart</But>
    </Func>
  )
}

export default Button