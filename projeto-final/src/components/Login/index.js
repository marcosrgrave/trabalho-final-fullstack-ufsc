import React, { useState } from "react";
import Swal from "sweetalert2";

const Login = ({ setIsAuthenticated }) => {
  const adminEmail = "fullstack@ufsc.com.br";
  const adminPassword = "admin";

  const [email, setEmail] = useState(adminEmail);
  const [password, setPassword] = useState(adminPassword);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        timer: 1000,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem("is_authenticated", true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: "success",
            title: "Login realizado com sucesso!",
            showConfirmButton: false,
            timer: 1200,
          });
        },
      });
    } else {
      Swal.fire({
        timer: 1200,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: "error",
            title: "Erro!",
            text: "Email ou senha incorreto.",
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    <div className="small-container">
      <form onSubmit={handleLogin}>
        <h1>Login Mockado</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder={adminEmail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder={adminPassword}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input style={{ marginTop: "12px" }} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
