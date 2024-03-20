import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Submissions from "./pages/Submission";
import Form from "./pages/Form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/submissions" element={<Submissions />} />
      </Routes>
    </Router>
  );
}

export default App;
