import React from 'react';
import './ingrediente.css'

const Ingrediente = (props) => {				
	const itemPrincipal = <input placeholder={props.ingrediente.cantidad} onChange={props.handleChange} />
	const itemSecundario = <span> {props.ingrediente.cantidad}</span>;

	return (
		<div className="Ingrediente">
		<p className="titulo"><b>{props.ingrediente.nombre}: </b></p>
		<b>{props.ingrediente.principal ? itemPrincipal : itemSecundario}</b>
		<span><b>gr</b> (Proporción: {props.ingrediente.proporcion})</span>
		</div>
	);
}

export default Ingrediente;