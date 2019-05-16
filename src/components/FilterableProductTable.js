import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
  constructor(props){
    super(props);
  
    this.state = { 
      data:props.products,
      allData:props.products,
     
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
    checkBoxProduct = (checkProduct) =>{

      console.log(checkProduct)
      const productFilter = [...this.state.data];
  
      let result= []; 
  
      productFilter.forEach((elem)=>{
  
        if (elem.stocked === checkProduct){  
        result.push(elem)
        this.setState({ data: result }, () => {
          console.log('State',this.state.data)
        })
        } else {
          this.setState({ data: this.state.allData }, () => {
            console.log('State',this.state.data)
          })
        }
        
      })


  
    }

  render() {
    
    return (
      <div>
        <h1>Iron Products</h1>
        <SearchBar filterProduct={this.filterProduct} checkBoxProduct={this.checkBoxProduct}/>
        <ProductTable products={this.state.data}/>
      </div>
    )
  }
}
