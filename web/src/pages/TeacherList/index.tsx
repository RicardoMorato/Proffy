import React from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import AppInput from "../../components/AppInput";
import AppSelect from "../../components/AppSelect";

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
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
          <AppInput name="time" label="Hora" type="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  );
}
