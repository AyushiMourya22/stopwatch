import React from 'react'
import styled from 'styled-components'

const Time=styled.div`
padding:30px;
background-color:${props=>props.theme===true?"#282c34":"white"};
width:30%;
height:10%;
margin-bottom:30px;
font-size:40px;
font-weight:bold;
display:flex;
justify-content:center;
align-items:center;
border:5px solid ${props=>props.theme===true?"white":"#282c34"};
transition:border 1.5s;
text-overflow:none;
transition:all 1.5s ease;

@media (max-width: 955px){
  font-size:38px;
}
@media (max-width: 905px){
  font-size:35px;
}

color:${props=>props.theme===true?"white":"#282c34"}`

function Timer(props) {
  return (
    <Time theme={props.theme}>{(props.time.h)>=10?props.time.h:'0'+props.time.h} : {(props.time.min)>=10?props.time.min:'0'+props.time.min} : {(props.time.s>=10)?props.time.s:'0'+props.time.s} : {(props.time.m>=10)?props.time.m:'0'+props.time.m}</Time>
  )
}

export default Timer