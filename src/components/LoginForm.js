import React from "react";

function LoginForm() {
    return (
        <div className="login-form">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Nome" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
