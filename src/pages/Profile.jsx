import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <section className="card">
      <h2>Profile Page</h2>
      <p>
        Email: <strong>{user.email}</strong>
      </p>
      <button onClick={handleLogout}>Logout</button>
    </section>
  );
}
