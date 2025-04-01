import { Link } from "react-router-dom";
import style from "./styles/home.module.css";

function Home() {
  return (
    <div className={style.home__background}>
      <div className={style.home__box}>
        <div>
          <input
            className={style.home__input}
            type="password"
            placeholder="Digite a sua senha aqui"
          />
        </div>
        <div className={style['home__btn-link']}>
          <div>
            <input className={style.home__btn} type="button" value="ENTRAR" />
          </div>
          <div>
            <Link className={style.home__link} to={"/esqueci-senha"}>Esqueceu a senha?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Home };
