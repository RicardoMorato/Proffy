import React, { useState } from "react";

import PageHeader from "../../components/PageHeader";
import AppInput from "../../components/AppInput";
import warningIcon from "../../assets/images/icons/warning.svg";
import AppTextarea from "../../components/AppTextarea";
import AppSelect from "../../components/AppSelect";

import "./styles.css";

export default function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { weekDay: 0, to: "", from: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { weekDay: 0, to: "8:00 AM", from: "12:00 PM" },
    ]);
  }

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

          <AppSelect
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Programação", label: "Programação" },
              { value: "Física", label: "Física" },
              { value: "Química", label: "Química" },
              { value: "Matemática", label: "Matemática" },
              { value: "Cálculo", label: "Cálculo" },
              { value: "Álgebra Linear", label: "Álgebra Linear" },
              { value: "Astronomia", label: "Astronomia" },
              { value: "Geografia", label: "Geografia" },
              { value: "Literatura", label: "Literatura" },
              { value: "História", label: "História" },
              { value: "Biologia", label: "Biologia" },
              { value: "Inglês", label: "Inglês" },
            ]}
          />
          <AppInput name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map((item) => {
            return (
              <div className="schedule-item">
                <AppSelect
                  name="week-day"
                  label="Dia da semana"
                  options={[
                    { value: "0", label: "Domingo" },
                    { value: "1", label: "Segunda-feira" },
                    { value: "2", label: "Terça-feira" },
                    { value: "3", label: "Quarta-feira" },
                    { value: "4", label: "Quinta-feira" },
                    { value: "5", label: "Sexta-feira" },
                    { value: "6", label: "Sábado" },
                  ]}
                />
                <AppInput name="From" label="Das" type="time" />
                <AppInput name="to" label="Até" type="time" />
              </div>
            );
          })}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}
