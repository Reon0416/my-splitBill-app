import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import InputPage from "./pages/InputPage";
import ResultPage from "./pages/ResultPage";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>

          <Route path="/" element={<Navigate to="/input" />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
