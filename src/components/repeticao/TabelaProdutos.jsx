import React from 'react'
import produtos from '../data/produtos';
    
function TabelaProdutos (props) {
    
    function getLinhas() {
     return produtos.map(produto => {
         return (
             <tr key={produto.id}>
                 <td>{produto.id}</td>
                 <td>{produto.nome}</td>
                 <td>R$ {produto.preço}</td>
             </tr>
         )
     })  
    }


    return(
        <div>
            <table border="2">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                {getLinhas()}
                </tbody>
            </table>
        </div>
    )

}
    
export default TabelaProdutos;