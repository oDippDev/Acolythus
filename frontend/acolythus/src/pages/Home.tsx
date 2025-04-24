import { useRef } from "react";
import { Link } from "react-router-dom";
import style from "./styles/home.module.css";
import { Form, Button } from "react-bootstrap";
import logo from "../assets/img/testeAcolythus.png";
import Input from "../components/Input";

function Home() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function ValidarSenha(e: { preventDefault: () => void; }) {
    e.preventDefault();
    
    const email = emailRef.current?.value || "";
  const password = passwordRef.current?.value || "";

    if(!email || !password){
      alert("Insira o e-mail e a senha")
      throw Error;
    }

    if (email.length <= 3 || password.length <= 6) {
      alert("O e-mail e/ou a senha devem ter pelo menos 3 caracteres");
      return;
    }

    if (email.length > 255 || password.length > 255) {
      alert("O e-mail e/ou a senha devem ter menos caracteres.");
      return;
    }

    if (!/@/.test(email)) {
      alert("O email esta sem o @. Por favor insira um e-mail valido.")
      return;
    }

    const dadosUser = {
      email: email,
      password: password
    }

    console.log(dadosUser)

    const url: string = `http://localhost:3000`;
    const endpoint: string = "";

    fetch(`${url}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosUser),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao fazer login");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Login bem-sucedido:", data);
        alert("Login realizado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro:", error);
        alert("Erro ao fazer login. Verifique suas credenciais.");
      });

  }

  return (
    <div className={style.home__background}>
      <h1 className={style.home__title}>ACOLYTHUS</h1>
      <div className={style.home__box}>
        <div className="text-center">
          <img
            src={logo}
            alt="Logo Acolythus"
            style={{ width: "200px", opacity: 0.8 }}
          />
        </div>

        <Form>
          <div className={style.home}>
            <Input
              ref={emailRef}
              place="Digite o seu email"
              tipo="email"
              className="form-control"
              linkToInput="email"
              divClass="home"
            />
          </div>
          <div className={style.home}>
            <Input
              ref={passwordRef}
              place="Digite a sua senha"
              tipo="password"
              className="form-control"
              linkToInput="senha"
              divClass="home"
            />
          </div>
        </Form>

        <Button
          onClick={ValidarSenha}
          style={{ backgroundColor: "#8b0000ff" }}
          className={style["home__btn"]}
          type="button"
          value="Entrar"
        >
          Entrar
        </Button>

        <Link className={style.home__link} to={"/esqueci-senha"}>
          Esqueci a senha
        </Link>
      </div>
    </div>
  );
}

export { Home };
