import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/auth/login";
import { Error404 } from "./pages/Error404";
import { Register } from "./pages/auth/Register";
import { LayoutAdmin } from "./layouts/LayoutAdmin";
import { Home } from "./pages/admin/Home";
import { LayoutAuth } from "./layouts/LayoutAuth";
import { ForgetPassword } from "./pages/auth/ForgetPassword";
import { ContactList } from "./pages/admin/ContactList";
import { AddProveedor } from "./pages/admin/AddProveedor";
import { ModifyProveedor } from "./pages/admin/ModifyProveedor";
import { SedeList } from "./pages/admin/SedeList";
import { AddSedes } from "./pages/admin/AddSedes";
import DetalleSede from "./pages/admin/DetalleSede";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="olvide-password" element={<ForgetPassword />} />
        </Route>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="/lista-contactos" element={<ContactList />} />
          <Route path="/agregar-proveedor" element={<AddProveedor />} />
          <Route path="/modificar-proveedor/:id" element={<ModifyProveedor />} />
          <Route path="/listar-sedes" element={<SedeList />} />
          <Route path="/agregar-sedes" element={<AddSedes />} />
          <Route path="/ver-sede/:id" element={<DetalleSede />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
