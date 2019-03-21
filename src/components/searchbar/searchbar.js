import React from 'react';
import './searchbar.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class SearchBar extends React.Component {
	constructor(props){
    	super(props);

    	this.state = { 
    		receta: '',
    		value: 1
    	}
    	this.handleOnSelect = this.handleOnSelect.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.renderListadoRecetas = this.renderListadoRecetas.bind(this);
  	}
  	renderListadoRecetas(){
  		return this.props.recetas.map( item => { 
  			return <Dropdown.Item key={item.id} eventKey={item.id} onSelect={this.handleOnSelect}>{item.nombre}</Dropdown.Item>
  		});
	}
	handleOnChange(event) {
		
	}
	handleOnSelect(eventKey) {
		//event.preventDefault();
		this.setState({value: parseInt(eventKey)}, this.handleSubmit);
		//console.log('searchbar state value: ' + this.state.value);
	}
	handleSubmit() {
		this.props.buscarReceta(this.state.value);
	}
	

	render(){

		return(
			<div className="SearchBar">
			  <div className="SearchBar-recetas">
				 	<DropdownButton id="dropdown-basic-button" title="Elegir receta" >
				    	{this.renderListadoRecetas()}
					</DropdownButton>			    
			  </div>
			</div>
		);
	}
}

export default SearchBar;