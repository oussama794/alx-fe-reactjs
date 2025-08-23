import { Navigate } from 'react-router-dom';

const isAuthenticated = false; // simulate login

export default function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}
