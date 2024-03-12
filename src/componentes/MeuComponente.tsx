//Faça um componente que faça um retângulo da largura da tela por 200px
//crie uma variavel com LET no js que tenha o valor "Meu Componente"

//Crie  um div no componenteque dentro dela mostre um <p> contendo o valor da variável

import './MeuComponente.css'

function MeuComponente() {
    let valorVariavel = "Meu Componente";
  
    return (
      <div className="meuComponente">
    <p>{valorVariavel}</p>

  </div>
  )
  }

export default MeuComponente;