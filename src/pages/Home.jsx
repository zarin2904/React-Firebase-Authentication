import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <section className="card">
      <h1>Welcome to Home Page</h1>
      <p>Campus Desk is a simple student portal.</p>
      {user ? (
        <Link to="/dashboard">Open dashboard</Link>
      ) : (
        <p>
          <Link to="/login">Login</Link> or <Link to="/register">Create account</Link>
        </p>
      )}
    </section>
  );
}
