import React, {Component} from "react";
class Produto extends Component{
    constructor(props){
        super(props);
    }

    imprimeOpcoes(item, indice){
        return <option key={indice}>{indice+1} {item}</option>;
    }

    renderizaReddit(objeto){
        return <p>{objeto.kind}</p>
    }


    render(){
        var listaCores = this.props.cor.map(this.imprimeOpcoes);
        var listaEnvio = this.props.envio.map(this.imprimeOpcoes);
        console.log(listaEnvio);
        return (
            <div>
                <h1>
                    Produto
                </h1>
                <p>{this.props.nome} - R$ {this.props.valor}</p>
                <select>
                    {listaCores}
                </select>
                <br/>
                <select>
                    {listaEnvio}
                </select>
            </div>
        )
    }
}

export default Produto;