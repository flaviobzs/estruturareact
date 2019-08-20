import React, { Component } from "react";

class TechList extends Component {
  // constructor(){
  //   this.state = {
  //     techs: [
  //       'NodeJS',
  //       'ReactJS'
  //     ]
  //   }
  // }  substituido pela instalação do plugin onde as variaveis podem ser inicializadas fora do construtor

  state = {
    techs: ["NodeJS", "ReactJS"]
  };

  render() {
    console.log(this.state);

    return (
      <ul>
        <li>X</li>
        <li>Y</li>
      </ul>
    );
  }
}

export default TechList;
