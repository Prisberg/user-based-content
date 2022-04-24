import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <Menu/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<div>Invalid URL, sorry.</div>} />
      </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;