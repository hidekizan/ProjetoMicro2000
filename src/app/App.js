import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Suporte from "../pages/Suporte";
import Solucoes from "../pages/Solucoes";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Servicos from "../pages/Servicos";
import LayoutPadrao from "../app/LayoutPadrao";
import Rafael from "../pages/Produto/Rafael";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rotas que usam Header e Footer */}
        <Route element={<LayoutPadrao />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/servicos" element={<Servicos />} />
        </Route>

        {/* Rotas sem Header e Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

      </Routes>
      <div className="Content flex min-h-screen flex-col">
        <Header/>
        <main className="flex flex-grow container mx-auto p-4 mt-[100px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/suporte" element={<Suporte />} />
            <Route path="/solucoes" element={<Solucoes />} />
            <Route path="/painel" element={
              <PrivateRoute>
                <Painel />
              </PrivateRoute>
            } />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/produtos" element={<Rafael />} />
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
