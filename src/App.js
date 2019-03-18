import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Titulo from './components/titulo/titulo';

class App extends React.Component {
    render() {
        return (
            <div>
                <header>          
                    <Titulo titulo="Receta de Pan" />
                    
                </header>
            </div>
        );
    }
}

export default App;
