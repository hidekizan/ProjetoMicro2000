import { useParams } from "react-router-dom";

const produtos = [
  { id: 1, descricao: "Produto 1", img: "/imgprodutos/monitor01.jpg" },
  { id: 2, descricao: "Produto 2", img: "/imgprodutos/monitor02.jpg" },
  { id: 3, descricao: "Produto 3", img: "/imgprodutos/mouse-branco-01.jpg" },
  { id: 4, descricao: "Produto 4", img: "/imgprodutos/tecladoGamer01.png" },
  { id: 5, descricao: "Produto 5", img: "/imgprodutos/tecladoGamer02.png" },
  { id: 6, descricao: "Produto 6", img: "/imgprodutos/tecladoGamerVerde01.png" },
];

function ProdutoDetalhe() {
  const { id } = useParams();
  const produto = produtos.find((p) => p.id === parseInt(id));

  if (!produto) return <p>Produto não encontrado</p>;

  return (
    <div className="produto-detalhe-container">
      <h1>{produto.descricao}</h1>
      <img src={produto.img} alt={produto.descricao} />
      <div className="formas-de-pagamento">
        {/* Coloque seus SVGs de pix/cartão aqui */}
      </div>
    </div>
  );
}

export default ProdutoDetalhe;