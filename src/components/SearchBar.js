import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props){
    super(props);
  
    this.state = { 
      name:""
      }
    
    }

    handleChange = (event) =>{ 
      event.preventDefault();
      this.props.filterProduct(event.target.value);
  
      let { name, value } = event.target;
      this.setState( { [name]: value } );
      
    }
  render() {
    return (
      <div className="search">
      
      <form>
          <input name="name" type="text" value={this.state.name} placeholder="Search here" onChange={(e) => this.handleChange(e)} />
      </form>
    </div>
    )
  }
}
