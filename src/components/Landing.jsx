import React, { useState, useEffect } from "react";
import { Check, XCircle } from "@phosphor-icons/react";
import "./Landing.css";

const Landing = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });

  // useEffect para verificar se os campos estão vazios
  useEffect(() => {
    if (touched.email && !email) {
      setEmailError("Informe um email ou número de telefone válido.");
    } else {
      setEmailError("");
    }

    if (touched.password && !password) {
      setPasswordError("Por favor, preencha sua senha.");
    } else {
      setPasswordError("");
    }
  }, [email, password, touched]);

  const handleClick = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
  };

  return (
    <div className="mr landing flex flex-col gap-4 rounded py-[1.4rem] px-16 relative">
      <h1 className="text-4xl font-bold my-3">Entrar</h1>
      <form
        onSubmit={handleClick}
        id="loginForm"
        action=""
        className="flex gap-4 flex-col items-center"
      >
        <div className="relative w-full height">
          <input
            id="emailInput"
            type="email"
            className="rounded w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setTouched((prev) => ({ ...prev, email: true }))}
          />
          <label htmlFor="emailInput">Email ou número de celular</label>
          {emailError && (
            <p className="relative text-red-500 text-sm mb flex items-center gap-2">
              <XCircle size={20} />
              {emailError}
            </p>
          )}
        </div>

        <div
          className="relative w-full height
        "
        >
          <input
            id="passwordInput"
            type="password"
            className="rounded w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setTouched((prev) => ({ ...prev, password: true }))}
          />
          <label htmlFor="passwordInput">Senha</label>
          {passwordError && (
            <p className="relative text-red-500 text-sm mb flex gap">
              <XCircle size={20} />
              {passwordError}
            </p>
          )}
        </div>

        <button className="w-full bg-red-600 rounded text-white py-2 font-medium text-xl ">
          Entrar
        </button>
        <p className="text-center">OU</p>
        <button className="w-full bg-[#81818173] rounded text-white py-2 font-medium text-xl ">
          Usar um código de acesso
        </button>
        <a style={{ fontSize: "17px" }} href="../App.jsx">
          Esqueceu a senha?
        </a>
      </form>

      <div className="mt-2 flex flex-col gap-4">
        <label
          htmlFor="checkbox"
          className="infos cursor-pointer flex items-center gap-3"
        >
          <input type="checkbox" id="checkbox" />
          <div className="check cursor-pointer">
            <Check />
          </div>
          <span>Lembre-se de mim</span>
        </label>
        <div className="flex items-center">
          <p className="text-[#737373] font-semibold">Novo por aqui?</p>
          <a href="../App.jsx" className="font-semibold hover:underline">
            Assine aqui
          </a>
        </div>
        <p className="text-sm text-[#737373]">
          Esta página é protegida pelo Google reCAPTCHA para garantir que você
          não é um robô.{" "}
          <a href="../App.jsx" className="text-blue-600 hover:underline">
            Saiba mais
          </a>
        </p>
      </div>
    </div>
  );
};

export default Landing;
