import React from 'react'

const CustomInput = (props) => {
    const {type,name,placeholder,classname}=props
  return (
    <div>
  <input placeholder={placeholder} type={type} name={name} className={`form-control ${classname}`}/>
  </div>

  )
}

export default CustomInput