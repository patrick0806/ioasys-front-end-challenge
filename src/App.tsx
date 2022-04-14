import { GlobalStyle } from "./App.styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { BooksPage } from "./pages/Books/Books";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<BooksPage />} />
      </Routes>
    </Router>
  );
}

export default App;