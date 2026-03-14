import { Route, Routes } from "react-router-dom";
import { Inicial, SobreNos } from "./pages";
import { LayoutPadrao } from "./layouts";

const Rounter = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPadrao />}>
        <Route index element={<Inicial />} />
        <Route path="sobre-nos" element={<SobreNos />} />
      </Route>
    </Routes>
  );
};

export { Rounter };