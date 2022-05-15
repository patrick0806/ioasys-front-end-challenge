import { GlobalStyle } from './App.styles';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { Login } from './Pages/Login/Login';
import { BooksPage } from './Pages/Books/Books';
import { RequireAuth, UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/books"
            element={
              <RequireAuth>
                <BooksPage />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
