import React from "react";
import styles from "../pagescss/Servicos.module.css";

const Servicos = () => {
  return (
    <div className={styles.pages}>
      {/* H1 */}<section className={styles.hero}>
        <div className={`${styles.container} ${styles.textCenter}`}>
          <h1 className="font-bold">Nossos Serviços Especializados</h1>
          <p>
            Oferecemos soluções completas para reparo e manutenção de equipamentos
            eletrônicos com qualidade e garantia.
          </p>
        </div>
      </section>

      {/* Grid de serviços */}<section className={styles.services}>
        <div className={`${styles.container} ${styles.grid}`}>

          {/* Impressoras */}<div className={styles.serviceCard}>
                  <div className={styles.serviceHeader}>
                          <div className={styles.icon}>🖨️</div>
                          <div>
                                  <h3 className="font-bold">Reparo de Impressoras</h3>
                                  <p>Manutenção preventiva e corretiva de Impressoras</p>
                          </div>
                  </div>

                  <div className={styles.serviceFeatures}>
                    <h4 className="font-bold">Problemas Solucionados:</h4>
                    <ul>
                      <li>✔ Falhas nas impressões</li>
                      <li>✔ Papel não é tracionado</li>
                      <li>✔ Todas as luzes piscam</li>
                    </ul>
                  </div>

                  <div className={styles.serviceBrands}>
                    <h4 className="font-bold">Marcas Atendidas:</h4>
                    <div className={styles.brandsList}>
                      <span>EPSON</span>
                      <span>HP</span>
                      <span>Canon</span>
                      <span>Brother</span>
                    </div>
                  </div>

                  <div className={styles.serviceFooter}>
                    <div className={styles.info}>
                      <span>⏱ 1-3 dias</span>
                    </div>
                    <a href="/suporte" className={styles.btnPrimary}>
                    Solicitar suporte
                    </a>
                  </div>
          </div>

          {/* Televisores */}<div className={styles.serviceCard}>
          <div className={styles.serviceHeader}>
                    <div className={styles.icon}>📺</div>
                    <div>
                      <h3 className="font-bold">Reparo de Televisores</h3>
                      <p>Manutenção preventiva e corretiva de Televisores</p>
                    </div>
                  </div>

                  <div className={styles.serviceFeatures}>
                    <h4 className="font-bold">Problemas Solucionados:</h4>
                    <ul>
                      <li>✔ Sem imagem</li>
                      <li>✔ Sem som</li>
                      <li>✔ Problemas de wi-fi</li>
                    </ul>
                  </div>

                  <div className={styles.serviceBrands}>
                    <h4 className="font-bold">Marcas Atendidas:</h4>
                    <div className={styles.brandsList}>
                      <span>LG</span>
                      <span>Samsung</span>
                      <span>Hisense</span>
                      <span>AOC</span>
                      <span>Sony</span>
                      <span>Philips</span>
                    </div>
                  </div>

                  <div className={styles.serviceFooter}>
                    <div className={styles.info}>
                      <span>⏱ 2-3 dias</span>
                    </div>
                    <a href="/suporte" className={styles.btnPrimary}>
                      Solicitar suporte
                    </a>
                  </div>
          </div>

          {/* Notebooks */}<div className={styles.serviceCard}>
          <div className={styles.serviceHeader}>
                    <div className={styles.icon}>💻</div>
                    <div>
                      <h3 className="font-bold">Reparo de Notebooks</h3>
                      <p>Manutenção preventiva e corretiva de notebooks</p>
                    </div>
                  </div>

                  <div className={styles.serviceFeatures}>
                    <h4 className="font-bold">Problemas Solucionados:</h4>
                    <ul>
                      <li>✔ Sistema muito lento</li>
                      <li>✔ Telas azuis</li>
                      <li>✔ Notebook não liga</li>
                    </ul>
                  </div>

                  <div className={styles.serviceBrands}>
                    <h4 className="font-bold">Marcas Atendidas:</h4>
                    <div className={styles.brandsList}>
                      <span>Acer</span>
                      <span>Dell</span>
                      <span>Lenovo</span>
                      <span>Samsung</span>
                    </div>
                  </div>

                  <div className={styles.serviceFooter}>
                    <div className={styles.info}>
                      <span>⏱ 3-4 dias</span>
                    </div>
                    <a href="/suporte" className={styles.btnPrimary}>
                    Solicitar suporte
                    </a>
                  </div>
          </div>

          {/* Projetores */}<div className={styles.serviceCard}>
          <div className={styles.serviceHeader}>
                    <div className={styles.icon}>📽️</div>
                    <div>
                      <h3 className="font-bold">Reparo de Projetores</h3>
                      <p>Manutenção preventiva e corretiva de Projetores</p>
                    </div>
                  </div>

                  <div className={styles.serviceFeatures}>
                    <h4 className="font-bold">Problemas Solucionados:</h4>
                    <ul>
                      <li>✔ Sem imagem</li>
                      <li>✔ Imagem muito escura</li>
                      <li>✔ Projetor não liga</li>
                    </ul>
                  </div>

                  <div className={styles.serviceBrands}>
                    <h4 className="font-bold">Marcas Atendidas:</h4>
                    <div className={styles.brandsList}>
                      <span>EPSON</span>
                      <span>Samsung</span>
                    </div>
                  </div>

                  <div className={styles.serviceFooter}>
                    <div className={styles.info}>
                      <span>⏱ 2-3 dias</span>
                    </div>
                    <a href="/suporte" className={styles.btnPrimary}>
                    Solicitar suporte
                    </a>
                  </div>
          </div>

          {/* Aparelhos de som */}<div className={styles.serviceCard}>
          <div className={styles.serviceHeader}>
                    <div className={styles.icon}>📻</div>
                    <div>
                      <h3 className="font-bold">Reparo de Aparelhos de som</h3>
                      <p>Manutenção preventiva e corretiva de Aparelhos de som</p>
                    </div>
                  </div>

                  <div className={styles.serviceFeatures}>
                    <h4 className="font-bold">Problemas Solucionados:</h4>
                    <ul>
                      <li>✔ Não liga</li>
                      <li>✔ Não segura carga</li>
                      <li>✔ Não está gerando som</li>
                    </ul>
                  </div>

                  <div className={styles.serviceBrands}>
                    <h4 className="font-bold">Marcas Atendidas:</h4>
                    <div className={styles.brandsList}>
                      <span>LG</span>
                      <span>JBL</span>
                      <span>Philips</span>
                      <span>Sony</span>
                    </div>
                  </div>

                  <div className={styles.serviceFooter}>
                    <div className={styles.info}>
                      <span>⏱ 2-3 dias</span>
                    </div>
                    <a href="/suporte" className={styles.btnPrimary}>
                    Solicitar suporte
                    </a>
                  </div>
          </div>

          {/* Computadores */}<div className={styles.serviceCard}>
          <div className={styles.serviceHeader}>
                    <div className={styles.icon}>🖥️</div>
                    <div>
                      <h3 className="font-bold">Reparo de Computadores</h3>
                      <p>Manutenção preventiva e corretiva de notebooks</p>
                    </div>
                  </div>

                  <div className={styles.serviceFeatures}>
                    <h4 className="font-bold">Problemas Solucionados:</h4>
                    <ul>
                    <li>✔ Telas azuis</li>
                    <li>✔ Sistema muito lento</li>
                    <li>✔ Computador não liga</li>
                    </ul>
                  </div>

                  <div className={styles.serviceBrands}>
                    <h4 className="font-bold">Marcas Atendidas:</h4>
                    <div className={styles.brandsList}>
                      <span>TODAS</span>
                    </div>
                  </div>

                  <div className={styles.serviceFooter}>
                    <div className={styles.info}>
                      <span>⏱ 3-4 dias</span>
                    </div>
                    <a href="/suporte" className={styles.btnPrimary}>
                    Solicitar suporte
                    </a>
                  </div>
          </div>

        </div>

      </section>

      {/* Processo */}<section className={styles.process}>
        <div className={`${styles.container} ${styles.textCenter}`}>
          <h2>Como Funciona Nosso Processo</h2>
          <p>Um processo simples e transparente para garantir a melhor experiência</p>

          <div className={`${styles.grid} ${styles.processSteps}`}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Diagnóstico</h3>
              <p>Análise completa do problema de seu equipamento</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Orçamento</h3>
              <p>Apresentação de custos</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Reparo</h3>
              <p>Execução do serviço com peças originais</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Entrega</h3>
              <p>Devolução com teste e garantia do reparo</p>
            </div>
          </div>
        </div>
      </section>


      {/* Extra */} <section className={styles.cta}>
        <div className={`${styles.container} ${styles.textCenter}`}>
          <h2>Precisa de Ajuda com Seu Equipamento?</h2>
          <p>Entre em contato conosco</p>
          <div className={styles.ctaButtons}>
            <a href="/contato" className={styles.btnLight}>
              Solicitar Atendimento
            </a>
            <a href="/cadastro" className={styles.btnOutline}>
              Criar Conta
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;