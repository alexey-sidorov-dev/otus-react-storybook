import React, { FC, useState } from "react";
import Accordion from "./components/Accordion";
import Breaker from "./components/Breaker";
import Columns from "./components/Columns";
import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import Picture from "./components/Picture";

export const App: FC = () => {
  const [componentName, setComponentName] = useState("");
  const [componentParameter, setComponentParameter] = useState("");
  const [render, setRender] = useState(false);
  const componentsList = [
    { value: "", display: "" },
    { value: "Header", display: "Заголовок" },
    { value: "Paragraph", display: "Параграф" },
    { value: "Breaker", display: "Пробельный блок" },
    { value: "Accordion", display: "Схлопывающийся блок" },
    { value: "Picture", display: "Картинка" },
    { value: "Columns", display: "Колонки" },
  ];

  return (
    <>
      Выберите данные для отображения компонента и нажмите "Показать".
      <br />
      <label>
        Компонент:
        <select
          defaultValue={componentName}
          onChange={(e) => setComponentName(e.target.value)}
        >
          {componentsList.map((item) => (
            <option key={item.value} value={item.value}>
              {item.display}
            </option>
          ))}
        </select>
        <label>Параметры:</label>
        <select defaultValue={componentParameter}></select>
      </label>
      <button className="button" onClick={() => setRender(!render)}>
        {!render ? "Показать" : "Сбросить"}
      </button>
      {componentName === "Header" && <Header />}
      {componentName === "Paragraph" && <Paragraph />}
      {componentName === "Breaker" && <Breaker />}
      {componentName === "Accordion" && <Accordion />}
      {componentName === "Picture" && <Picture />}
      {componentName === "Columns" && <Columns />}
    </>
  );
};
