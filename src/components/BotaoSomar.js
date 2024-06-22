import React from "react";

import { useState } from "react";

function BotaoSomar(params) {
    const[somar, setSomar] = useState(1);

function adicionarBotaoSomar() {
    setSomar(somar + 1);
}
    
    return (
        <div className="trocar-treino">  
            <button onClick={adicionarBotaoSomar}>Troque o Treino</button>
        </div>
    )

}

export default BotaoSomar