import { useParams } from "react-router-dom";
import './ProdutoDetalhe.css';


const produtos = [
  { id: 1, nomeproduto: "Produto 1", img: "/imgprodutos/monitor01.jpg",descricao: "descricao", dinheiro: "R$ 500,00", cartao: "R$ 550,00" },
  { id: 2, nomeproduto: "Produto 2", img: "/imgprodutos/monitor02.jpg",descricao: "descricao", dinheiro: "R$ 600,00", cartao: "R$ 660,00" },
  { id: 3, nomeproduto: "Produto 3", img: "/imgprodutos/mouse-branco-01.jpg",descricao: "descricao", dinheiro: "R$ 120,00", cartao: "R$ 132,00" },
  { id: 4, nomeproduto: "Produto 4", img: "/imgprodutos/tecladoGamer01.png",descricao: "descricao", dinheiro: "R$ 300,00", cartao: "R$ 330,00" },
  { id: 5, nomeproduto: "Produto 5", img: "/imgprodutos/tecladoGamer02.png",descricao: "descricao", dinheiro: "R$ 350,00", cartao: "R$ 385,00" },
  { id: 6, nomeproduto: "Produto 6", img: "/imgprodutos/tecladoGamerVerde01.png",descricao: "descricao", dinheiro: "R$ 400,00", cartao: "R$ 440,00" },
];



function ProdutoDetalhe() {
  const { id } = useParams();
  const produto = produtos.find((p) => p.id === parseInt(id));

  if (!produto) return <p>Produto não encontrado</p>;

  return (
    <div className="produto-detalhe-container">
        <img src={produto.img} alt={produto.nomeproduto} />
          <div className="area-detalhe">
            <h1>{produto.nomeproduto}</h1>
            <div className="formas-de-pagamento-detalhe">
              {/* Coloque seus SVGs de dinheiro/cartão aqui */}
              {/* SVG do dinheiro */}
              <div className="forma">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.8C231.1-7.6 280.3-7.6 310.6 22.8L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.8L22.8 310.6C-7.6 280.3-7.6 231.1 22.8 200.8L80.8 142.7H112.6z"/>
                </svg>
                <h3>{produto.dinheiro}</h3>
              </div>
              {/* SVG do cartão */}
              <div className="forma">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"/>
                </svg>
                <h3>{produto.cartao}</h3>
              </div>
            </div>
              <h2>{produto.descricao}</h2>
          </div>
    </div>
  );
}

export default ProdutoDetalhe;