import React from "react";

import PageHeader from "../../components/PageHeader";
import AppInput from "../../components/AppInput";
import warningIcon from "../../assets/images/icons/warning.svg";
import AppTextarea from "../../components/AppTextarea";
import AppSelect from "../../components/AppSelect";

import "./styles.css";

export default function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <AppInput name="name" label="Nome completo" />
          <AppInput name="avatar" label="Avatar" />
          <AppInput name="whatsapp" label="Whatsapp" />
          <AppTextarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <AppSelect name="subject" label="Matéria" />
          <AppInput name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br/>
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  );
}
