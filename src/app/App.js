import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Suporte from "../pages/Suporte";
import Solucoes from "../pages/Solucoes";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Servicos from "../pages/Servicos";
import LayoutPadrao from "../app/LayoutPadrao";

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
    </BrowserRouter>
  );
}

export default App;
