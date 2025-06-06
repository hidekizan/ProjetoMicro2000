import '../components/servicos.css'

function Servicos() {

    const mostrarConteudo = (pagina) => {
        console.log("Mostrar conteúdo:", pagina);
        // aqui você pode depois integrar navegação ou exibir modais
    }

    const toggleMenu = (menu) => {
        console.log("Toggle menu:", menu);
        // aqui você pode manipular o estado pra mostrar ou esconder menus
    }

    return (
        <>
        <section className="section-1">
            <div className="logo">
                <img className="imagem" src="/imagens/logo-micro2000.png" alt="logo" />
            </div>

            <div className="search-bar">
                <div className="input-busca">   
                    <input 
                        className="search-key" 
                        type="text" 
                        data-input="sugestion" 
                        placeholder="O que você está buscando?" 
                        name="palavra_busca" 
                        tabIndex="1" 
                        data-tray-tst="busca_palavra" 
                        required 
                        autoComplete="off" 
                    />
                </div>

                <div>
                    <button className="bt-search" type="button">Buscar</button>
                </div>
            </div>

            <div className="home-entrar">
                <ul className="link-home">
                    <li onClick={() => mostrarConteudo('home')}>Cadastre-se</li>     
                    <li onClick={() => mostrarConteudo('entrar')}>Entrar</li>
                </ul>
            </div>
        </section>
        
        <section className="section-2">
            <div className="menu-item">
                <ul className="ul-section" onClick={() => toggleMenu('produtos-menu')}>
                    <li>Produtos</li>
                </ul>
            </div>

            <div className="menu-item">
                <ul className="ul-section" onClick={() => toggleMenu('servicos-menu')}>
                    <li>Serviços</li>
                </ul>
            </div>

            <div className="menu-item">
                <ul className="ul-section" onClick={() => toggleMenu('assistencia-menu')}>
                    <li>Assistência técnica</li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Servicos;
