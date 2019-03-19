import React from 'react';
import './ingrediente.css'

const Ingrediente = (props) => {
		return(
			<div className="Ingrediente">
				<p className="titulo"><b>{props.nombre}</b> (Proporción: {props.proporcion}):</p>
				<input placeholder={props.cantidad} onChange={props.handleChange} />
				<span>gr</span>
			</div>
		);
}

export default Ingrediente;