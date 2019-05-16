import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props){
    super(props);
  
    this.state = { 
      name:"",
      checked: true
      }
    
    }

    handleChange = (event) =>{ 
      
      event.preventDefault();
      this.props.filterProduct(event.target.value);

      let { name, value } = event.target;
      this.setState( { [name]: value } );
      
    }

    handleChangeCheckBox = (event) =>{     
      event.preventDefault();
      console.log(event.target.checked)

      this.setState({checked: event.target.checked},()=>{this.props.checkBoxProduct(this.state.checked)})
        
      
    }
  render() {

    return (
      <div className="search">
      
      <form>
          <input name="name" type="text" value={this.state.name} placeholder="Search here" onChange={(e) => this.handleChange(e)} />
          <input id ="stocked" name="stocked" type="checkbox" placeholder="Search here" onChange={(e) => this.handleChangeCheckBox(e)} />
          <label htmlFor="stocked">Show only products in stock</label>
      </form>
    </div>
    )
  }
}
