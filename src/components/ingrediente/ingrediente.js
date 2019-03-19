import React from 'react';
import './ingrediente.css'

const Ingrediente = (props) => {				
	const itemPrincipal = <input placeholder={props.cantidad} onChange={props.handleChange} />
	const itemSecundario = <span> {props.cantidad}</span>;

	return (
		<div className="Ingrediente">
		<p className="titulo"><b>{props.ingrediente}: </b></p>
		<b>{props.principal ? itemPrincipal : itemSecundario}</b>
		<span><b>gr</b> (Proporción: {props.proporcion})</span>
		</div>
	);
}

export default Ingrediente;