import React, { useState } from 'react'

const Counter = (props) => {
    const [count,setCount]=useState(0);
    const increase=()=>{
        setCount(count + 1)
    }

    const clickString=props.click || '클릭';

  return (
    <div>
        <div>{clickString + '입니다.'}{count}</div>
        <button onClick={increase}>Click</button>
    </div>
  )
}

export default Counter