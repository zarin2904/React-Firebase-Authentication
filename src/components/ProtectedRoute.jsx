import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Wrap any page with <ProtectedRoute> to make it login-only.
export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Wait until Firebase has checked the saved session,
  // otherwise a logged-in user would be redirected on refresh.
  if (loading) return <p className="center">Loading...</p>;

  if (!user) {
    // Not logged in -> send to Login (remember where they wanted to go)
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
