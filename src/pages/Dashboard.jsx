import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <section className="card">
      <h2>Welcome to Dashboard</h2>
      <p>This is a protected page.</p>
      <p>
        Logged in as: <strong>{user.email}</strong>
      </p>
    </section>
  );
}
