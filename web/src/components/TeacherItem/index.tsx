import React from "react";

import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/56000167?s=460&u=03d372d364faa8a95ed12e7cc12b00c6110de953&v=4"
          alt="Foto de perfil"
        />
        <div>
          <strong>Ricardo Morato</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        I'm a software engineer who loves learning and testing new things.
        <br />
        <br />
        In love with Javascript, Python and Flutter. Currently using React and
        Node on projects, also experienced with Django and Django Rest.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
