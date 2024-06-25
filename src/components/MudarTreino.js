import React from 'react';
import { useState } from 'react';

function MudarTreino() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('treinoA');

  const opcoes = {
    treinoA: "Treino A",
    treinoB: "Treino B",
    treinoC: "Treino C",
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
        <img src='./logotipo-peso.webp' alt="Logotipo Peso" />
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
