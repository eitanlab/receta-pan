import React from 'react';
import './App.css';
import Titulo from './components/titulo/titulo';
import Ingredientes from './components/ingredientes/ingredientes';
import SearchBar from './components/searchbar/searchbar';

const receta = {
        nombre: 'Pan',
        ingredientes: [
            {id: 1, principal: true, ingrediente: 'Harina', cantidad: 1000, proporcion: 1},
            {id: 2, principal: false, ingrediente: 'Agua', cantidad: 500, proporcion: 0.5},
            {id: 3, principal: false, ingrediente: 'Levadura', cantidad: 50, proporcion: 0.05},
            {id: 4, principal: false, ingrediente: 'Sal', cantidad: 20, proporcion: 0.2},
            {id: 5, principal: false, ingrediente: 'Miel/Malta', cantidad: 10, proporcion: 0.1}
        ]
    }

const recetas = [receta, receta, receta]

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recetas: recetas
        }
    }

    render() {
        return (
            <div>
                <header>          
                    <SearchBar recetas={this.state.recetas}/>
                    <Titulo titulo={this.state.recetas[0].nombre} />
                    <Ingredientes ingredientes={this.state.recetas[0].ingredientes}  />
                </header>
            </div>
        );
    }
}

export default App;
