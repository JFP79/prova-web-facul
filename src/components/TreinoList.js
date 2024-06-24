import React, { useEffect } from 'react'

import { useState } from 'react';

function TreinoList() {
    const  [treinos, setTreinos] = useState([])
    const treinosList = [
        {id: 1, treino: 'A - Peito e Triceps'},
        {id: 2, treino: 'B - Costas e Biceps'},
        {id: 3, treino: 'C - Perna e Aerobico'},
    ]
 
    useEffect(() => {
        setTreinos(treinosList)
    }, [treinosList])

  return (
    <div>
        <h1>Suas Opções de Treino</h1>
        {treinos.map(treino => (
            <li key={treino.id}> {treino.treino} </li>
        ))}
      
    </div>
  )
}

export default TreinoList
