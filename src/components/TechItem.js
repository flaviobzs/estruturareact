import React from "react";

function TechItem({ tech, onDelete }) {
  //usar props ou desestruturar
  return (
    //usar props.tech
    <li>
      {tech}
      {/* <button onClick={() => this.handleDelete(tech)} type="button"> */}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

export default TechItem;
