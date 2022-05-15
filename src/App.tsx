import { GlobalStyle } from './App.styles';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { Login } from './Pages/Login/Login';
import { BooksPage } from './Pages/Books/Books';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/books" element={<BooksPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
