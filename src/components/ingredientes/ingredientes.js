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
	componentWillReceiveProps(nextProps) {
	  if (nextProps.ingredientes !== this.state.ingredientes) {
	    this.setState({ ingredientes: nextProps.ingredientes });
	  }
	}
    cambiarCantidades(nuevaCant) {
            const ingredientesToUpdate = this.state.ingredientes;
            console.log(this.state.ingredientes);
            //console.log(ingredientesToUpdate);
            //console.log(`Nueva cant harina: ${nuevaCant}`);
            ingredientesToUpdate.map( item => {
                item.cantidad = item.proporcion * nuevaCant;
                return item.cantidad 
            });
            
            this.setState({ ingredientes: ingredientesToUpdate }); 
    }

    handleChange(event) {
       // if(event.target.value > 0) {
        	this.cambiarCantidades(event.target.value);     

        //}
        //console.log('Nueva cantidad:' + event.target.value);
    }
	render() {
		return(
			<div className="listaIngredientes">
			  {
			  	this.state.ingredientes.map((ingrediente) => {
			  		return <Ingrediente key={ingrediente.id} ingrediente={ingrediente} handleChange={this.handleChange} />;
			  	})
			  }
			</div>
		);
	}
}

export default Ingredientes;