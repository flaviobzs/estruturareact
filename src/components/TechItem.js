import React from "react";
import PropTypes from "prop-types";

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

//propriedades padrao caso nao seja passadas
TechItem.defaultProps = {
  tech: "Oculto"
};

//validação de propriedades
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
