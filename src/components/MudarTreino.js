import React from 'react';
import { useState } from 'react';

function MudarTreino() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('treinoA');

  const opcoes = {
    treinoA: "Dive Master",
    treinoB: "Advanced Dive",
    treinoC: "Open Water",
  };

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setOpcaoSelecionada(option);
  };

  return (
    <div className="mudar-treino">
      {opcaoSelecionada && (
        <div className="opcao-escolhida">
          Curso Escolhido: <strong>{opcoes[opcaoSelecionada]}</strong>
        </div>
      )}
      <div className="opcoes">
        <img id = "logo" src='./Padi_Logo.webp' alt="Logotipo Peso" />   
        <select value={opcaoSelecionada} onChange={handleOptionChange}>
          {Object.keys(opcoes).map((key) => (
            <option value={key} key={key}>
              {opcoes[key]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}


export default MudarTreino;
