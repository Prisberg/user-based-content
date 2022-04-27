import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import AdminPage from "./components/AdminPage";
import Register from "./components/Register";
import Menu from "./components/Menu";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <Menu/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<UserInfo />} />
        <Route path="*" element={<div>Invalid URL, sorry.</div>} />
      </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;