import React from 'react';
import './searchbar.css';

class SearchBar extends React.Component {
	constructor(props){
    	super(props);

    	this.state = { 
    		receta: '',
    		value: 1
    	}
    	this.handleOnChange = this.handleOnChange.bind(this);
    	this.handleOnClick = this.handleOnClick.bind(this);
    	this.renderListadoRecetas = this.renderListadoRecetas.bind(this);

  	}
  	renderListadoRecetas(){
  		return this.props.recetas.map( item => { 
  			return <option value={item.id}>{item.nombre}</option>;
  		});
	}
	handleOnChange(event) {
		this.setState({value: parseInt(event.target.value)});
		event.preventDefault();
	}
	handleOnClick(event) {
		event.preventDefault();
		//console.log('searchbar state value: ' + this.state.value);
		this.props.buscarReceta(this.state.value);
	}
	

	render(){

		return(
			<div className="SearchBar">
			  <div className="SearchBar-recetas">
			    <select value={this.state.value} onChange={this.handleOnChange}>
			    	{this.renderListadoRecetas()}
			    </select>
			    <button type="button" onClick={this.handleOnClick}>Mostrar receta</button>
			  </div>
			</div>
		);
	}
}

export default SearchBar;