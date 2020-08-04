import React from "react";

import PageHeader from "../../components/PageHeader";
import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" name="subject" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" name="week-day" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" name="time" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
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
            In love with Javascript, Python and Flutter. Currently using React
            and Node on projects, also experienced with Django and Django Rest.
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
      </main>
    </div>
  );
}
