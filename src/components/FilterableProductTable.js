import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
  constructor(props){
    super(props);
  
    this.state = { 
      data:props.products,
      allData:props.products
      }
    }

    filterProduct = (searchProduct) =>{

      const productFilter = [...this.state.allData];
  
      let result= []; 
  
      productFilter.forEach((elem)=>{
  
        if (elem.name.includes(searchProduct)){
        result.push(elem)
      
        } 
        
      })
  
      this.setState({ data: result }, () => {
        console.log('State',this.state.data)
      })
  
    }

  render() {
    
    return (
      <div>
        <h1>Iron Products</h1>
        <SearchBar filterProduct={this.filterProduct} />
        <ProductTable products={this.state.data}/>
      </div>
    )
  }
}
