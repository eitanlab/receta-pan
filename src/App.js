import React from 'react';
import './App.css';
import Titulo from './components/titulo/titulo';
import Ingredientes from './components/ingredientes/ingredientes';
import SearchBar from './components/searchbar/searchbar';


const receta1 = {
        id: 1,
        nombre: 'Pan',
        ingredientes: [
            {id: 1, principal: true, nombre: 'Harina', cantidad: 1000, proporcion: 1},
            {id: 2, principal: false, nombre: 'Agua', cantidad: 600, proporcion: 0.5},
            {id: 3, principal: false, nombre: 'Levadura', cantidad: 50, proporcion: 0.05},
            {id: 4, principal: false, nombre: 'Sal', cantidad: 20, proporcion: 0.2},
            {id: 5, principal: false, nombre: 'Miel/Malta', cantidad: 10, proporcion: 0.1}
        ]
}
const receta2 = {
        id: 2,
        nombre: 'Pizza',
        ingredientes: [
            {id: 1, principal: true, nombre: 'Harina', cantidad: 1000, proporcion: 1},
            {id: 2, principal: false, nombre: 'Agua', cantidad: 500, proporcion: 0.5},
            {id: 3, principal: false, nombre: 'Levadura', cantidad: 50, proporcion: 0.05},
            {id: 4, principal: false, nombre: 'Sal', cantidad: 20, proporcion: 0.2},
            {id: 5, principal: false, nombre: 'Miel/Malta', cantidad: 10, proporcion: 0.1}
        ]
}
const receta3 = {
        id: 3,
        nombre: 'Scons',
        ingredientes: [
            {id: 1, principal: true, nombre: 'Harina', cantidad: 450, proporcion: 1},
            {id: 2, principal: false, nombre: 'Agua', cantidad: 500, proporcion: 0.5},
            {id: 3, principal: false, nombre: 'Levadura', cantidad: 50, proporcion: 0.05},
            {id: 4, principal: false, nombre: 'Sal', cantidad: 20, proporcion: 0.2},
            {id: 5, principal: false, nombre: 'Miel/Malta', cantidad: 10, proporcion: 0.1},
            {id: 6, principal: false, nombre: 'Manteca', cantidad: 45, proporcion: 0.1}
        ]
}

const recetas = [receta1, receta2, receta3]

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recetas: recetas,
            recetaElegida: 0
        }
        this.buscarReceta = this.buscarReceta.bind(this);
    }
    
    buscarReceta(idReceta) {
        //console.log('idReceta recibido desde searchbar: ' + idReceta);
        //console.log(typeof idReceta);
        const index = this.state.recetas.findIndex(item => item.id === idReceta );
        this.setState({recetaElegida: index})
        //console.log('Index encontrado: ' + index);
    }
    render() {
        return (
            <div class="recetario">          
                <SearchBar buscarReceta={this.buscarReceta} recetas={this.state.recetas}/>
                <Titulo titulo={this.state.recetas[this.state.recetaElegida].nombre} />
                <Ingredientes ingredientes={this.state.recetas[this.state.recetaElegida].ingredientes}  />
            </div>
        );
    }
}

export default App;
