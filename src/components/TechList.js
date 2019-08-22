import React, { Component } from "react";

import TechItem from "./TechItem";

class TechList extends Component {
  // constructor(){
  //   this.state = {
  //     techs: [
  //       'NodeJS',
  //       'ReactJS'
  //     ]
  //   }
  // }  substituido pela instalação do plugin onde as variaveis podem ser inicializadas fora do construtor

  //não pode mudar essa variavel diretamente (usar setState)
  state = {
    newTech: "",
    techs: ["NodeJS", "ReactJS", "React native"]
  };

  //propiedades de um componete de classe ficam armazenadas no
  //this.props.NOME

  handleInputChange = e => {
    //this.state.newTech = e.target.value;
    this.setState({ newTech: e.target.value }); //realizar a atualização do estado apenas com esse metodo
  };

  handleSubmit = e => {
    e.preventDefault();
    //para mudar um array ou objeto, deve-se recriar-lo do zero
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
    //spred operation para copiar
    console.log(this.state.newTech);
  };

  handleDelete = tech => {
    this.setState({ tech: this.state.techs.filter.filter(t => t !== tech) });
    console.log(tech);
  };

  render() {
    console.log(this.state);
    return (
      // fragmento
      //<>
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
            // <li key={tech}>
            //   {tech}
            //   {/* chamar a função dentro de outra função porque quando montado o componete, ja seria chamado automaticamente */}
            //   <button onClick={() => this.handleDelete(tech)} type="button">
            //     Remover
            //   </button>
            // </li>
          ))}
          {/* <li>X</li> */}
          {/* <li>Y</li>  */}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
      </form>
      //</>
    );
  }
}

export default TechList;
