import Header from "../Header/index";
import Footer from "../Footer/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Suporte from "../pages/Contato";
import Login from "../pages/Login";
import Servicos from "../pages/Servicos";
import Cadastro from "../pages/Cadastro";
import Rafael from "../pages/Produto/Rafael";
import ProdutoDetalhe from "../pages/Produto/ProdutoDetalhe";

function App() {
  return (
    <BrowserRouter>
      <div className="Content flex min-h-screen flex-col">
        <Header/>
        <main className="w-full mt-[100px] mb-[20px] flex-grow p-0 justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Suporte />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/produtos" element={<Rafael />} />
            <Route path="/produtos/:id" element={<ProdutoDetalhe />} />
            <Route path="/painel" element={
              {/*<PrivateRoute>
                <Painel />
              </PrivateRoute>*/}
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </main>
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}
export default App;