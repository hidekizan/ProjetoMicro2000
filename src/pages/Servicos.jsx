import React from "react";
import '../pagescss/Servicos.css';
import Reparo from "../components/imagens/reparo.jpg";
import Visita from "../components/imagens/visita.png";
import Locacao from "../components/imagens/locacao.jpg";
import Laudo from "../components/imagens/laudo.jpg";

const Servicos = () => {
  return (
    <div className="container">
      <main className="conteudo">

        {[{
          titulo: "Reparo",
          texto: "Seu equipamento funcionando como novo! Somos uma assistência técnica autorizada das marcas EPSON, HISENSE, LG e NHS, o que garante reparos com peças originais e padrões de qualidade certificados. Consertamos impressoras, TVs, notebooks, além de computadores, aparelhos de som, celulares, projetores, consoles e nobreaks. Diagnóstico preciso, atendimento confiável e cuidado com cada detalhe.",
          imagem: Reparo,
          alt: "Reparo"
        }, {
          titulo: "Locação de Impressoras",
          texto: "Impressão de qualidade sem preocupações! Oferecemos locação de impressoras e multifuncionais com suporte técnico completo incluso. Ideal para empresas, órgãos públicos e residências que precisam de impressão confiável sem altos investimentos. Com planos flexíveis e manutenção garantida, você tem equipamentos modernos sempre disponíveis, sem dores de cabeça.",
          imagem: Locacao,
          alt: "Locação"
        }, {
          titulo: "Visita Técnica",
          texto: "Conserto e diagnóstico onde você estiver! Nossos técnicos realizam visita técnica em domicílio, empresa ou órgão público para diagnosticar e reparar TVs no local. Com equipamentos completos, identificamos o problema sem precisar deslocar seu aparelho e providenciamos o conserto. Rápido e prático, esse serviço evita transtornos e garante a solução diretamente onde você está.",
          imagem: Visita,
          alt: "Visita técnica"
        }, {
          titulo: "Laudo Técnico",
          texto: "Confiança e transparência nos detalhes. Emitimos laudos técnicos detalhados para seguradoras ou comprovação formal de defeito. Nossos técnicos certificados fazem análise minuciosa do equipamento, gerando relatório claro e completo. Esse serviço agiliza processos de sinistro ou garantia, oferecendo segurança e credibilidade ao seu caso.",
          imagem: Laudo,
          alt: "Laudo"
        }].map((servico, i) => (
          <section className="section-main" key={i} style={{ flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
            <article className="artigo">
              <div className="texto-conteudo">
                <h1>{servico.titulo}</h1>
                <p>{servico.texto}</p>
                <button className="botao-acao" onClick={() => console.log("Ação do botão")}>Saiba mais</button>
              </div>
            </article>
            <div className="section-div-image">
              <img className="imagem" src={servico.imagem} alt={servico.alt} />
            </div>
          </section>
        ))}

      </main>
    </div>
  );
};

export default Servicos;