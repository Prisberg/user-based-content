import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import AdminPage from "./components/AdminPage";
import Register from "./components/Register";
import Menu from "./components/Menu";
import UserInfo from "./components/UserInfo";
import APIContextProvider from "./Context/AuthContext";
import BadGate from "./components/BadGate";
import Logout from "./components/Logout";
import { IPost } from "./interface"


interface Props {
  post: IPost;
}
function App() {
  return (
    <BrowserRouter>
      <APIContextProvider>
        <Menu />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="user" element={<UserInfo  />} />
            <Route path="logout" element={<Logout />} />
            <Route path="*" element={<BadGate />} />
          </Routes>
        </ErrorBoundary>
      </APIContextProvider>
    </BrowserRouter>
  );
}

export default App;