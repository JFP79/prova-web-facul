// Treino.js

import React, { useState } from 'react';

function Trainer() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

  const handleOptionClick = (option) => {
    setOpcaoSelecionada(option);
  };

  return (
    <div className="treino">
      <h2>Escolha uma opção de treino:</h2>
      <div className="opcoes">
        <button onClick={() => handleOptionClick('Treino A')}>Treino A</button>
        <button onClick={() => handleOptionClick('Treino B')}>Treino B</button>
        <button onClick={() => handleOptionClick('Treino C')}>Treino C</button>
      </div>
      {opcaoSelecionada && (
        <div className="opcao-escolhida">
          Opção escolhida: <strong>{opcaoSelecionada}</strong>
        </div>
      )}
    </div>
  );
}

export default Trainer;
