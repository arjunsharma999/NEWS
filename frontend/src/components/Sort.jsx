import React, { useState } from 'react'
import Select from 'react-select'

function Sort() {

    const [ value, setValue] = useState (null)

    const option = [
        {value: "sort by date", label: "sort by date"},
        {value: "sort by views", label: "sort by views"}
    ]

  return (
    <>
     <div style={{margin: 20, width: 200}}>
     <Select  options={option} defaultValue={value} placeholder="Sort list" onChange={setValue}/>
     </div>
    
    </>
    
  )
}

export default Sort