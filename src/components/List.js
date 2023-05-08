import React from 'react'
import styled from 'styled-components'

const Container=styled.div``

const Table=styled.ul`
background-color:black;`
const Item=styled.li`
font-size:25px;
color:white;
`

function List(props) {

  
  return (
    <Container>
        <Table>
        {
            props.stamp.map((key,item)=>{
               return <Item id={key}>{item.h} : {item.min} : {item.s} : {item.m}</Item>
            })
        }
        </Table>
    </Container>
  )
}

export default List