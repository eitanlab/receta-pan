import React from 'react';
import Ingrediente from '../ingrediente/ingrediente';

class Ingredientes extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ingredientes: this.props.ingredientes
		}
		this.handleChange = this.handleChange.bind(this);
		this.cambiarCantidades = this.cambiarCantidades.bind(this);
	}
	
    cambiarCantidades(nuevaCant) {
            const ingredientesToUpdate = this.state.ingredientes;
            console.log(ingredientesToUpdate);
            console.log(`Nueva cant harina: ${nuevaCant}`);

            
            ingredientesToUpdate.map( item => {
                item.cantidad = item.proporcion * nuevaCant;
                return item.cantidad 
            });
            
            this.setState({ ingredientes: ingredientesToUpdate }); 
    }

    handleChange(event) {
        if(event.target.value > 0) {
        	this.cambiarCantidades(event.target.value);     
        }
        //console.log('Nueva cantidad:' + event.target.value);
    }
	render() {
		return(
			<div className="listaIngredientes">
			  {
			  	this.props.ingredientes.map((ingrediente) => {
			  		return <Ingrediente ingrediente={ingrediente} handleChange={this.handleChange} />;
			  	})
			  }
			</div>
		);
	}
}

export default Ingredientes;