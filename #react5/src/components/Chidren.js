import React from 'react'

const Chidren = ({children}) => {
    console.log(children)
  return (
    <>
        <div className='red'>{children}</div>
        <div style={{color:'red'}}>인라인스타일</div>
    </>
  )
}

export default Chidren