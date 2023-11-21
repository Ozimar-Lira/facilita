import React from 'react';
import Image from 'next/image';
import './login.css';

function Login() {
  return (
    <div className="pagina">
      <div className="imagem">
        {/* Logomarca */}
        <Image
          src="/Facilita.png"
          alt="Facilita Eventos Logo"
          width={121}
          height={110}
          priority
          className="absolute top-0 left-0 w-121 h-110"
          style={{ background: 'white' }}
        />
      </div>

      <div className="welcome-message">
        <h1 className="texto">Seja bem-vindo!</h1>
      </div>

      {/* Mantenha login-container abaixo da imagem */}
      <div className="login-container">
        <form className="login-form">
          <input className="input" type="email" placeholder="Email" required />
          <input
            className="input"
            type="password"
            placeholder="Senha"
            required
          />
          <button className="button" type="submit">
            Login
          </button>
          <a href="/esqueceu-senha" className="esqueceu">
            Esqueceu sua senha?
          </a>

          <a href="/login" className="login">
            Não tem conta? Inscreva-se
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
