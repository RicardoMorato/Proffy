import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import AppInput from "../../components/AppInput";
import warningIcon from "../../assets/images/icons/warning.svg";
import AppTextarea from "../../components/AppTextarea";
import AppSelect from "../../components/AppSelect";
import api from "../../services/api";

import "./styles.css";

export default function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, to: "", from: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, to: "8:00", from: "12:00" },
    ]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post("/classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        alert("Cadastro realizado com sucesso");

        history.push("/");
      })
      .catch(() => {
        alert("Erro no cadastro");
      });
  }

  function setScheduleItemValue(
    index: number,
    fieldName: string,
    value: string
  ) {
    const updatedSchedulesArray = scheduleItems.map((item, position) => {
      if (position === index) return { ...item, [fieldName]: value };

      return item;
    });

    setScheduleItems(updatedSchedulesArray);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <AppInput
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <AppInput
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
            <AppInput
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
            <AppTextarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <AppSelect
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
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
            <AppInput
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((item, index) => {
              return (
                <div key={item.week_day} className="schedule-item">
                  <AppSelect
                    name="week-day"
                    label="Dia da semana"
                    value={item.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
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
                  <AppInput
                    value={item.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)
                    }
                    name="From"
                    label="Das"
                    type="time"
                  />
                  <AppInput
                    value={item.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                    name="to"
                    label="Até"
                    type="time"
                  />
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
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}
