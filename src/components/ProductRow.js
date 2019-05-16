import React from 'react'

function ProductRow(props) {
  return (
    <div className="card">

        {
          props.stocked ? 
          <div>{props.name}</div>
          : 
          <div style={{color:'red'}}>{props.name}</div>
        }
        <div>{props.price}</div>

    </div>
  )
}

export default ProductRow
