import React, { Component } from "react";

import TechItem from "./TechItem";

class TechList extends Component {
  // static defaultProps = {
  //     propiedades padrão para componetes de classe
  // }

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

  // ============================================
  // LOCAL STOReG banco de dados do navegador (salvar sessoes e tra la la)
  // ==============================================

  //propiedades de um componete de classe ficam armazenadas no
  //this.props.NOME

  //executado assim que o componente aparece na tela
  componentDidMount() {
    //requisição para uma API para pegar dados externos

    const techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  //executado sempre que houver alterações nas propos ou estado
  // componentDidUpdate(prevProps, prevState) {
  //recebe as propiedades ou estado como parametro
  //this.props ou this.state
  //comprarar as propriedades antigas com as novas ex.: prevProps == this.props

  // quando nao utiliza o prevProps trocar por _ na funcao
  // }
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      //transormar array em JSON
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  // executado quando o componete deixa de existir
  componentWillUnmount() {}

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

    //salvar informações no navegador
    // localStorage.setItem
  };

  handleDelete = tech => {
    this.setState({ tech: this.state.techs.filter.filter(t => t !== tech) });
    console.log(tech);

    //salvar informações no navegador
    // localStorage.setItem
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

          {/* <TechItem /> sem passar propriedade pega os valores default */}
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

TechList.defaultProps = {};
// TechList.PropTypes = {};

export default TechList;
