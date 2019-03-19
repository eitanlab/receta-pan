import React from 'react';
import './App.css';
import Titulo from './components/titulo/titulo';
import Ingredientes from './components/ingredientes/ingredientes';

const ingredientes = [
        {id: 1, nombre: 'Harina', cantidad: 1000, proporcion: '100%'},
        {id: 2, nombre: 'Agua', cantidad: 500, proporcion: '50%'},
        {id: 3, nombre: 'Levadura', cantidad: 50, proporcion: '5%'},
        {id: 4, nombre: 'Sal', cantidad: 20, proporcion: '2%'},
        {id: 5, nombre: 'Miel/Malta', cantidad: 10, proporcion: '1%'}
]

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredientes: ingredientes
        }
    }

    render() {
        return (
            <div>
                <header>          
                    <Titulo titulo="Receta de Pan" />
                    <Ingredientes cambiarCantidades={this.cambiarCantidades} ingredientes={this.state.ingredientes}  />
                </header>
            </div>
        );
    }
}

export default App;
