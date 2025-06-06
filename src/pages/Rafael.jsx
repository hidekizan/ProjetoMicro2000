function Rafael () {
    return (
        <main className="content">
          
        <form>
            <div className="area-conteudo">
                <!-- Filtro especificação -->
                <div className="caixa-filtro">
                        <div className="area-filtro">
                            <h3>Categorias</h3>
                            <button className="btn-fechar">Fechar</button>
                            <div className="filtro-produtos">
                                <details className="hardware">
                                    <summary>Hardware</summary>
                                    <div className="conteudo">
                                        <label><input type="checkbox" name="hardware" value="processador"> Processador</label>
                                        <label><input type="checkbox" name="hardware" value="placa-mae"> Placa Mãe</label>
                                        <label><input type="checkbox" name="hardware" value="memoria"> Memória</label>
                                        <label><input type="checkbox" name="hardware" value="placa-video"> Placa de Vídeo</label>
                                        <label><input type="checkbox" name="hardware" value="disco-hd"> Disco HD</label>
                                        <label><input type="checkbox" name="hardware" value="ssd"> SSD</label>
                                        <label><input type="checkbox" name="hardware" value="gabinete"> Gabinete</label>
                                        <label><input type="checkbox" name="hardware" value="fone"> Fone</label>
                                        <label><input type="checkbox" name="hardware" value="pasta-termica"> Pasta Térmica</label>
                                        <label><input type="checkbox" name="hardware" value="placa-som"> Placa de Som</label>
                                        <label><input type="checkbox" name="hardware" value="acessorios-gabinete"> Acessórios para Gabinete</label>
                                    </div>
                                </details>
                                <details>
                                    <summary>Periféricos</summary>
                                    <div className="conteudo">
                                        <label><input type="checkbox" name="perifericos" value="acessorios"> Acessórios</label>
                                        <label><input type="checkbox" name="perifericos" value="caixa-som"> Caixa de Som</label>
                                        <label><input type="checkbox" name="perifericos" value="teclado"> Teclado</label>
                                        <label><input type="checkbox" name="perifericos" value="fones-ouvido"> Fones de Ouvido</label>
                                        <label><input type="checkbox" name="perifericos" value="microfones"> Microfones</label>
                                        <label><input type="checkbox" name="perifericos" value="kits-teclado-mouse"> Kits Teclado e Mouse</label>
                                        <label><input type="checkbox" name="perifericos" value="kits-perifericos"> Kits Periféricos</label>
                                        <label><input type="checkbox" name="perifericos" value="mouse"> Mouse</label>
                                        <label><input type="checkbox" name="perifericos" value="mousepad"> Mousepad</label>
                                        <label><input type="checkbox" name="perifericos" value="energia"> Energia</label>
                                    </div>
                                </details>
                                <details>
                                    <summary>Monitores</summary>
                                    <div className="conteudo">
                                        <label><input type="checkbox" name="monitores" value="monitores-gamer"/> Monitores Gamer</label>
                                        <label><input type="checkbox" name="monitores" value="monitor-casa-escritorio"/> Monitor Casa e Escritório</label>
                                        <label><input type="checkbox" name="monitores" value="suporte-monitor"/> Suporte Monitor / TV</label>
                                        <label><input type="checkbox" name="monitores" value="acessorios-monitor"/> Acessórios para Monitor</label>
                                    </div>
                                </details>
                                <details>
                                    <summary>Monitores</summary>
                                    <div className="conteudo">
                                        <label><input type="checkbox" name="monitores" value="monitores-gamer"/> Monitores Gamer</label>
                                        <label><input type="checkbox" name="monitores" value="monitor-casa-escritorio"/> Monitor Casa e Escritório</label>
                                        <label><input type="checkbox" name="monitores" value="suporte-monitor"/> Suporte Monitor / TV</label>
                                        <label><input type="checkbox" name="monitores" value="acessorios-monitor"/> Acessórios para Monitor</label>
                                    </div>
                                </details>
                                <details>
                                    <summary>Monitores</summary>
                                    <div className="conteudo">
                                        <label><input type="checkbox" name="monitores" value="monitores-gamer"/> Monitores Gamer</label>
                                        <label><input type="checkbox" name="monitores" value="monitor-casa-escritorio"/> Monitor Casa e Escritório</label>
                                        <label><input type="checkbox" name="monitores" value="suporte-monitor"/> Suporte Monitor / TV</label>
                                        <label><input type="checkbox" name="monitores" value="acessorios-monitor"/> Acessórios para Monitor</label>
                                    </div>
                                </details>
                                <details>
                                    <summary>Monitores</summary>
                                    <div className="conteudo">
                                        <label><input type="checkbox" name="monitores" value="monitores-gamer"/> Monitores Gamer</label>
                                        <label><input type="checkbox" name="monitores" value="monitor-casa-escritorio"/> Monitor Casa e Escritório</label>
                                        <label><input type="checkbox" name="monitores" value="suporte-monitor"/> Suporte Monitor / TV</label>
                                        <label><input type="checkbox" name="monitores" value="acessorios-monitor"/> Acessórios para Monitor</label>
                                    </div>
                                </details>
                            </div>
                        </div>
                    {/* Filtro de valores */}
                    <div className="filtro-de-valores">
                        
                            <legend>Valores</legend>
                            <div className="slider-container">
                                <input type="range" className="range-slider" id="minRange" min="0" max="70000" value="0"/>
                                <input type="range" className="range-slider" id="maxRange" min="0" max="70000" value="70000"/>
                                <div className="slider-track"></div>
                                <div className="values">
                                    <span id="minValue">R$ 0,00</span>
                                    <span id="maxValue">R$ 70.000,00</span>
                                </div>
                            </div>
                        
                    </div>
                    
                </div>
                    {/* Produtos */}
                <section className="caixa-produto">
                        <div className="produtos">
                            <div className="produto">
                                <img src="../img/midia/empresa1.png" alt="Produto 1"/>
                                <p>Descrição do Produto 1</p>

                                <div className="formas-de-pagamento">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"/>{/*!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.8C231.1-7.6 280.3-7.6 310.6 22.8L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.8L22.8 310.6C-7.6 280.3-7.6 231.1 22.8 200.8L80.8 142.7H112.6z"/></svg>*/}
                                    <h3>Valores no pix</h3>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"/>{/*!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"/></svg>*/}
                                    <h3>Valores cartão dividido</h3>
                                </div>
                            </div>
                            <div className="produto">
                                <img src="../img/midia/empresa2.png" alt="Produto 2"/>
                                    <p>Descrição do Produto 2</p>
                                
                                <div className="formas-de-pagamento">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"/>{/*Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.8C231.1-7.6 280.3-7.6 310.6 22.8L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.8L22.8 310.6C-7.6 280.3-7.6 231.1 22.8 200.8L80.8 142.7H112.6z"/></svg>*/}
                                    <h3>Valores no pix</h3>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"/>{/*Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"/></svg>*/}
                                    <h3>Valores cartão dividido</h3>
                                </div>
                            </div>
                            <div className="produto">
                                <img src="../img/midia/empresa3.png" alt="Produto 3"/>
                                <p>Descrição do Produto 3</p>

                                <div className="formas-de-pagamento">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"/>{/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.8C231.1-7.6 280.3-7.6 310.6 22.8L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.8L22.8 310.6C-7.6 280.3-7.6 231.1 22.8 200.8L80.8 142.7H112.6z"/></svg>*/}
                                    <h3>Valores no pix</h3>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"/>{/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"/></svg>*/}
                                    <h3>Valores cartão dividido</h3>
                                </div>
                            </div>
                            <div className="produto">
                                <img src="../img/midia/empresa4.png" alt="Produto 4"/>
                                <p>Descrição do Produto 4</p>

                                <div className="formas-de-pagamento">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"/>{/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.8C231.1-7.6 280.3-7.6 310.6 22.8L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.8L22.8 310.6C-7.6 280.3-7.6 231.1 22.8 200.8L80.8 142.7H112.6z"/></svg>*/}
                                    <h3>Valores no pix</h3>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"/>{/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"/></svg>*/}
                                    <h3>Valores cartão dividido</h3>
                                </div>
                            </div>
                            <div className="produto">
                                <img src="../img/midia/empresa5.png" alt="Produto 5"/>
                                <p>Descrição do Produto 5</p>

                                <div className="formas-de-pagamento">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"/>{/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.8C231.1-7.6 280.3-7.6 310.6 22.8L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.8L22.8 310.6C-7.6 280.3-7.6 231.1 22.8 200.8L80.8 142.7H112.6z"/></svg>} */}
                                    <h3>Valores no pix</h3>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"/>{/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"/></svg>*/}
                                    <h3>Valores cartão dividido</h3>
                                </div>
                            </div>
                            <div className="produto">
                                <img src="../img/midia/empresa6.png" alt="Produto 6"/>
                                <p>Descrição do Produto 6</p>

                                <div className="formas-de-pagamento">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"/>{/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.8C231.1-7.6 280.3-7.6 310.6 22.8L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.8L22.8 310.6C-7.6 280.3-7.6 231.1 22.8 200.8L80.8 142.7H112.6z"/></svg>*/}
                                    <h3>Valores no pix</h3>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"/>{/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"/></svg>*/}
                                    <h3>Valores cartão dividido</h3>
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        </form>

       
    </main>
    );
}

export default Rafael;