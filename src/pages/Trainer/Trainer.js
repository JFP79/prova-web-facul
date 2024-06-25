// Treino.js

import React from 'react';
import MudarTreino from '../../components/MudarTreino';

function Trainer() {
  return (
    <div className="treino">
      <h2>Qual ser curso de mergulho desejado ?</h2>
      <div className="opcoes">
          <MudarTreino />
      </div>
      
    </div>
  );
}

export default Trainer;
