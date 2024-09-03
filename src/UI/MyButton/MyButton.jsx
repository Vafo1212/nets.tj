import React from 'react'
import './MyButton.scss'
const MyButton = ({name, grey, width, height, size, data, blue}) => {
  return (
    <button className='MyButton' style={{background: grey ? '#F2F3F7' : blue ? '#21BBEF' :'#EA3E2A', width: width, height: height, color: grey ? '#202020': '#FFF', fontSize:  size ? size : '' }} onClick={()=> data && data()}>
       {name}
    </button>
  )
}

export default MyButton
