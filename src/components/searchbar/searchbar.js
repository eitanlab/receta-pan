import React from 'react';
import './searchbar.css';

class SearchBar extends React.Component {
	constructor(props){
    	super(props);

    	this.state = { 
    		receta: ''
    	}
    	this.renderReceta = this.renderReceta.bind(this);
    	this.handleSearch = this.handleSearch.bind(this);
    	this.renderListadoRecetas = this.renderListadoRecetas.bind(this);
  	}
  	renderListadoRecetas(){
  		return this.props.recetas.map( item => { 
  			return <option value={item.nombre}>{item.nombre}</option>;
  		});
	}
	handleSearch(event) {
		this.props.buscarReceta(this.state.receta);
		event.preventDefault();
	}
	renderReceta(){
			return <ingredientes />
	}

	render(){

		return(
			<div className="SearchBar">
			  <div className="SearchBar-recetas">
			    <select options="" onChange={this.handleSearch}>
			    	{this.renderListadoRecetas()}
			    </select>
			  </div>
			</div>
		);
	}
}

export default SearchBar;