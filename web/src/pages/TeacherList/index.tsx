import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import AppInput from "../../components/AppInput";
import AppSelect from "../../components/AppSelect";
import api from "../../services/api";

import "./styles.css";

export default function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day: weekDay,
        time,
      }
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <AppSelect
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
          <AppSelect
            name="week-day"
            label="Dia da semana"
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
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
            name="time"
            label="Hora"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type='submit'>
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return(
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
            />
          );
        })}
      </main>
    </div>
  );
}
