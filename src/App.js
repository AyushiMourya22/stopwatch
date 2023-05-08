import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Button from './components/Button';
import Timer from './components/Timer';
import ReactSwitch from 'react-switch';

const Main=styled.div`
width:100vw;
height:100vh;
background-color: #282c34;
background-color:${props=>props.theme===true?"#282c34":"white"};
transition: background 1.5s;
overflow-x:hidden;
`

const Navbar=styled.div`
padding-bottom:120px;
background-color:${props=>props.theme===true?"#282c34":"white"};
transition: background 1.5s;
display:flex;
padding-top:10px;
padding-right:10px;
justify-content:flex-end;
align-items:center;`


const Container=styled.div`
width:100%;
// height:100%;
// padding-top:20px;

display:flex;
justify-content:center;
align-items:center;
// padding-top:50px;
flex-direction:column;
background-color:${props=>props.theme===true?"#282c34":"white"};
transition:background 1.5s;
`

const Div=styled.div`
min-width:200px;
transition:background 1.5s;
// max-height:200px;
// overflow-y:scroll;
font-size:20px;
background-color:#282c34;
background-color:${props=>props.theme===true?"#282c34":"white"};
color:white;
color:${props=>props.theme===true?"white":"#282c34"};
text-align:center;
transition:all 1.5s ease;
`
const List=styled.li`
font-size:20px;
padding:5px;

// margin-left:10px;
list-style:none;
`

const H=styled.h1`
color:white;
transition:all 1.5s ease;
color:${props=>props.theme===true?"white":"#282c34"};
text-align:center;
font-size:40px;
font-weight:800;
`

function App() {
  const [time,setTime]=useState({m:0,s:0,min:0,h:0})
  const [inter,setInter]=useState()
  const [status,setStatus]=useState(0)
  const [stamp,setStamp]=useState([])
  const [list,setList]=useState([])
  // const [light,setLight]=useState(true);
  const [theme,setTheme] =useState(true)
  const [checked,setChecked]=useState(true)
  
  var updatedH=time.h, updatedMin=time.min, updateds=time.s, updatedm=time.m;
  
  const run=()=>{
    if(updatedm===100){
      updatedm=0;
      updateds++;
    }
    if(updateds===60){
      updateds=0;
      updatedMin++;
    }
    if(updatedMin===60){
      updatedMin=0;
      updatedH++;
    }
    updatedm+=1;
    return setTime({m:updatedm, s:updateds, min:updatedMin, h:updatedH})
  }
  const start=()=>{
    run();
    setInter(setInterval(run,10))
    setStatus(1)
  }

  const pause=()=>{
    clearInterval(inter)
    setStatus(2)
  }
  const restart=()=>{
    clearInterval(inter)
    setStatus(0)
    setStamp([])
    setTime({m:0, s:0, min:0, h:0})
    
  }
  const resume=()=>start()

  const timestamp=()=>{
    setStamp([...stamp,time])
    console.log(stamp)
  }

  const handleChange = val => {
    setChecked(val)
    setTheme(!theme)
  }

  useEffect(()=>{
    setList(stamp.map((item)=>{
      return item
    }))
  },[stamp])  

  return (
    <Main theme={theme}>
      <Navbar theme={theme}>
        <ReactSwitch checked={checked} onChange={handleChange} />
      </Navbar>  
      <H theme={theme}>STOPWATCH</H>
      <Container theme={theme} >
        
        <Timer theme={theme} time={time}/>
        <Button theme={theme} resume={resume} restart={restart} status={status} start={start} pause={pause} timestamp={timestamp} />
      </Container>
        <Div theme={theme}>{
              list.map((item)=>{
                return <List >{(item.h>=10)?item.h:'0'+item.h} : {(item.min>=10)?item.min:'0'+item.min} : {(item.s>=10)?item.s:'0'+item.s} : {(item.m>=10)?item.m:'0'+item.m}</List>
              })
            }
        </Div>
    </Main>
    
  );
}

export default App;
