import { Link } from "react-router-dom";
import style from "./styles/home.module.css";
import { Form, Button } from "react-bootstrap";
import logo from "../assets/img/testeAcolythus.png";
import Input from "../components/Input";

function Home() {
  function ValidarSenha() {
    alert("Em construção");
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
        <div>
          <Form>
            <Input
              label="email"
              place="Digite o seu email"
              tipo="email"
              className="form-control-lg"
              linkToInput="email"
            />
            <Input
              label="senha"
              place="Digite a sua senha"
              tipo="password"
              className="form-control-lg"
              linkToInput="senha"
            />
          </Form>
        </div>
        <div className={style["home__btn-link"]}>
          <div>
            <Button
              onClick={ValidarSenha}
              style={{ backgroundColor: "#8b0000ff" }}
              className={style["home__btn"]}
              type="button"
              value="Entrar"
            >
              Entrar
            </Button>
          </div>
        </div>
        <div>
          <Link className={style.home__link} to={"/esqueci-senha"}>
            Esqueci a senha
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Home };
