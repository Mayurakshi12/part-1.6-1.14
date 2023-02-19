import React from 'react'

export default function (props)
{
  return (
    <div>
        <p>Number of exercises {props.total[0] + props.total[1] + props.total[2]}</p>
    </div>
  )
}
