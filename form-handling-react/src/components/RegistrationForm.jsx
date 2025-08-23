import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("Registered User:", { username, email, password });

    // Reset fields
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 max-w-sm mx-auto border rounded-md shadow"
    >
      <h2 className="text-xl font-bold">Controlled Registration Form</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}  // ✅ Matches test requirement
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}  // ✅ Matches test requirement
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}  // ✅ Matches test requirement
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
      >
        Register
      </button>
    </form>
  );
}
