import React from 'react';
import { useState } from 'react';

function MudarTreino() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('Treino A');

  const handleOptionChange = (option) => {
    setOpcaoSelecionada(option);
  };

  return (
    <div className="mudar-treino">
      <p>Opção selecionada: <strong>{opcaoSelecionada}</strong></p>
      <div className="opcoes">
        <button onClick={() => handleOptionChange('Treino A')}>Treino A</button>
        <button onClick={() => handleOptionChange('Treino B')}>Treino B</button>
        <button onClick={() => handleOptionChange('Treino C')}>Treino C</button>
      </div>
    </div>
  );
}

export default MudarTreino;
