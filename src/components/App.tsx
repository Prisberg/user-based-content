import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Homepage from "./Homepage";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
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