import React from "react";

import { useState } from "react";

function FormPedido() {
    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState(""); 


    return (
        <div className="form-pedido">
            <h1>Formulário de Cadastro</h1>
            <form>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                        />
                </label>    
                <label>
                    Endereço:
                    <input
                        type="text"
                        value={endereco}
                        onChange={(event) => setEndereco(event.target.value)}
                        />
                </label>
                <label>
                    E-mail:
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        />
                </label>
                <label>
                    CPF:
                    <input
                        type="text"
                        value={cpf}
                        onChange={(event) => setCpf(event.target.value)}
                        />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}   

export default FormPedido