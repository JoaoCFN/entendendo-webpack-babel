import React from 'react';
import ReactDOM from 'react-dom';

const meuNome = 'João Neto';

console.log('Funcionou tudo junto');

ReactDOM.render(
    <div>Meu nome é: {meuNome}</div>,
    document.querySelector('#root')
)