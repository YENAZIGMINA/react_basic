import React from 'react'

const Body = (props) => {
    //console.log(props) // props로 App.js 받아옴 => 객체로 받아옴
  return (
    <div>{props.name}는 {props.location}에 삽니다.</div>
  )
}

export default Body