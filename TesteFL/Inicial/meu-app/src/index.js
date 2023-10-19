import React from 'react';
import ReactDOM from 'react-dom';
import BackgroundButton from './components/BackgroundButton';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <BackgroundButton
      imagePath="D:\Python_Programas\Gerador-De-Ficha-RPG-FL\Artes_Ficha_Livro\Artes_Front\FL - Generator - Background_Inicial.png"
      imagePath1="D:\Python_Programas\Gerador-De-Ficha-RPG-FL\Artes_Ficha_Livro\Artes_Front\d683eb_830f19a27d8b4b8a928bd525d295a8bd~mv2.jpg"
      imagePath2="D:\Python_Programas\Gerador-De-Ficha-RPG-FL\Artes_Ficha_Livro\Artes_Front\d683eb_830f19a27d8b4b8a928bd525d295a8bd~mv2.jpg"
      buttonText1="Geral Ficha Aleatoria"
      buttonText2="Escolher Caracteristicas Da Ficha"
      newText1="Isso vai gerar uma ficha de Forbidden Lands do ZERO. Voce nao vai escolher nada e ela vai vir completamente aleatoria."
      newText2="Voce vai poder decidir a classe, raca e XP inicial da sua ficha. Voce nao precisa escolher todas elas, somente a que quiser."
    />
  </React.StrictMode>,
  rootElement
);
