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
        if(this.state.ingredientes[0].cantidad > 0) {
            const ingredientesToUpdate = this.state.ingredientes;
        	const cantOriginal = this.state.ingredientes[0].cantidad;
            console.log(ingredientesToUpdate);
            console.log(`Nueva cant harina: ${nuevaCant}`);

            
            ingredientesToUpdate.map( item => {
                item.cantidad = (item.cantidad * nuevaCant) / cantOriginal ;
                return item.cantidad 
            });
            
            this.setState({ ingredientes: ingredientesToUpdate }); 
        }
    }
    
    handleChange(event) {
        this.cambiarCantidades(event.target.value);        
        console.log('Nueva cantidad:' + event.target.value);
    }
	render() {
		return(
			<div className="listaIngredientes">
			  {
			  	this.props.ingredientes.map((ingrediente) => {
			  		return <Ingrediente key={ingrediente.id} handleChange={this.handleChange} nombre={ingrediente.nombre} cantidad={ingrediente.cantidad} proporcion={ingrediente.proporcion} />;
			  	})
			  }
			</div>
		);
	}
}

export default Ingredientes;