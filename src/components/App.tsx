import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Homepage from "./Homepage";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<div>Invalid URL, sorry.</div>} />
      </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;