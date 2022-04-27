import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import AdminPage from "./components/AdminPage";
import Register from "./components/Register";
import Menu from "./components/Menu";
import UserInfo from "./components/UserInfo";
import { APIContextProvider } from "./Context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
    <APIContextProvider>
      <Menu/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<UserInfo />} />
        <Route path="*" element={<div>Invalid URL, sorry.</div>} />
      </Routes>
    </APIContextProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;