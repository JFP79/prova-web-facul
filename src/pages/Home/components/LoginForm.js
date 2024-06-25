import React, { useState } from "react";

function LoginForm() {
    const [inputs, setInputs] = useState({
        "name": "",
        "password": "",
        "email": ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        localStorage.setItem("userCredentials", JSON.stringify(inputs));
    }

    
    const handleDeleteCredentials = () => {
        localStorage.removeItem("userCredentials");
        
        if (localStorage.getItem("userCredentials") === null) {
            alert("Credenciais Removidas!");
        }
    }

    return (
        <div className="login-form">
            <h1>Diver Login</h1>
            <form>
                <input type="text" placeholder="Nome" name="name" value={inputs.name} onChange={handleChange} />
                <input type="password" placeholder="Senha" name="password" value={inputs.password} onChange={handleChange} />
                <input type="email" placeholder="Email" name="email" value={inputs.email} onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>Login</button>
                <button type="submit" onClick={handleDeleteCredentials}>Remover Credenciais</button>
            </form>
        </div>
    );
}

export default LoginForm;
