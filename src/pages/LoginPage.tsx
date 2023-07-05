import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const { signIn } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signIn(username);
    navigate(from, { replace: true });
  };

  return (
    <section className="flex flex-col gap-4 items-center justify-center h-screen">
      <h2 className="font-semibold text-2xl">Login Page</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <label className="flex flex-col gap-2">
          Username: <br />
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 rounded-md"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-slate-50 rounded-md p-2"
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
