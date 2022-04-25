import { BrowserRouter, Routes, Route } from "react-router-dom";
import BadGate from "./BadGate";
import ErrorBoundary from "./ErrorBoundary";
import Homepage from "./Homepage";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<BadGate />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;