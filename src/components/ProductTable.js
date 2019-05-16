import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
  constructor(props){
    super(props);
  
    this.state = { 
      data:props.products
      }
    
    }
    
  render() {
    return (
      <div className="card-wrapper">
        {
          this.props.products.map((data,index) => <ProductRow {...data} key={index}/>)
        }
      </div>
    )
  }
}
