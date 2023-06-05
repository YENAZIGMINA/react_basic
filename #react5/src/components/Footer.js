import React from 'react'

//const Footer = ({name, location}) => {}  : 1) 이렇게도 사용가능

const Footer = (props) => {
    const {name, location}=props; // 2)props로 받아서 변수로 구조분해
  return (
    <div>{name}의 고향은 {location}입니다.</div>
  )
}

export default Footer